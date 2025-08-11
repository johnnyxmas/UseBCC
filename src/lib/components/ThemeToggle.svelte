<script>
	import { onMount } from 'svelte';
	import { Sun, Moon, Monitor } from 'lucide-svelte';
	
	let theme = 'auto';
	let isOpen = false;
	
	// Dynamic themes array that updates based on system preference
	$: themes = [
		{ value: 'auto', label: 'Auto', icon: systemPrefersDark ? Moon : Sun },
		{ value: 'light', label: 'Light', icon: Sun },
		{ value: 'dark', label: 'Dark', icon: Moon }
	];
	
	onMount(() => {
		// Load saved theme preference
		const savedTheme = localStorage.getItem('theme') || 'auto';
		theme = savedTheme;
		applyTheme(savedTheme);
		
		// Check initial system preference
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		systemPrefersDark = mediaQuery.matches;
		
		// Listen for system theme changes
		mediaQuery.addEventListener('change', (e) => {
			systemPrefersDark = e.matches;
			if (theme === 'auto') {
				applyTheme('auto');
			}
		});
		
		// Close dropdown when clicking outside
		const handleClickOutside = (event) => {
			if (!event.target.closest('.theme-toggle')) {
				isOpen = false;
			}
		};
		
		document.addEventListener('click', handleClickOutside);
		
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
	
	function applyTheme(selectedTheme) {
		const root = document.documentElement;
		
		if (selectedTheme === 'auto') {
			// Remove manual theme classes and let CSS media query handle it
			root.classList.remove('light', 'dark');
		} else if (selectedTheme === 'light') {
			root.classList.remove('dark');
			root.classList.add('light');
		} else if (selectedTheme === 'dark') {
			root.classList.remove('light');
			root.classList.add('dark');
		}
	}
	
	function selectTheme(selectedTheme) {
		theme = selectedTheme;
		localStorage.setItem('theme', selectedTheme);
		applyTheme(selectedTheme);
		isOpen = false;
	}
	
	function toggleDropdown() {
		isOpen = !isOpen;
	}
	
	// Reactive statement to determine actual theme
	let systemPrefersDark = false;
	
	$: actualTheme = theme === 'auto'
		? (systemPrefersDark ? 'dark' : 'light')
		: theme;
	
	$: currentTheme = themes.find(t => t.value === theme);
	// Show sun/moon based on actual theme, including for auto mode
	$: CurrentIcon = actualTheme === 'dark' ? Moon : Sun;
</script>

<div class="theme-toggle">
	<button 
		class="toggle-button"
		on:click={toggleDropdown}
		aria-label="Toggle theme"
		aria-expanded={isOpen}
	>
		<CurrentIcon size={20} />
		<span class="toggle-label">{currentTheme?.label}</span>
		<svg 
			class="chevron" 
			class:open={isOpen}
			width="12" 
			height="12" 
			viewBox="0 0 12 12"
		>
			<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
		</svg>
	</button>
	
	{#if isOpen}
		<div class="dropdown">
			{#each themes as themeOption}
				<button
					class="dropdown-item"
					class:active={theme === themeOption.value}
					on:click={() => selectTheme(themeOption.value)}
				>
					<svelte:component this={themeOption.icon} size={18} />
					<span>{themeOption.label}</span>
					{#if theme === themeOption.value}
						<svg class="check" width="16" height="16" viewBox="0 0 16 16">
							<path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
	}
	
	.toggle-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--color-bg-secondary);
		color: var(--color-text);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		font-family: inherit;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
	}
	
	.toggle-button:hover {
		background: var(--color-bg);
	}
	
	.toggle-label {
		min-width: 3rem;
		text-align: left;
	}
	
	.chevron {
		transition: transform 0.2s;
	}
	
	.chevron.open {
		transform: rotate(180deg);
	}
	
	.dropdown {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		min-width: 150px;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		overflow: hidden;
	}
	
	.dropdown-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.625rem 0.875rem;
		background: transparent;
		color: var(--color-text-secondary);
		border: none;
		cursor: pointer;
		font-size: 0.875rem;
		font-family: inherit;
		text-align: left;
		position: relative;
	}
	
	.dropdown-item:hover {
		background: var(--color-bg);
		color: var(--color-text);
	}
	
	.dropdown-item.active {
		color: var(--color-primary);
		font-weight: 500;
	}
	
	.check {
		margin-left: auto;
		color: var(--color-primary);
	}
	
	/* Dark mode specific styles */
	:global(.dark) .toggle-button {
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3);
	}
	
	:global(.dark) .dropdown {
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
	}
	
	/* Mobile responsive */
	@media (max-width: 768px) {
		.theme-toggle {
			top: 0.75rem;
			right: 0.75rem;
		}
		
		.toggle-button {
			padding: 0.375rem 0.625rem;
			font-size: 0.8125rem;
		}
		
		.toggle-label {
			display: none;
		}
		
		.chevron {
			display: none;
		}
	}
</style>