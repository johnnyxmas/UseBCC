<script>
	import { onMount } from 'svelte';
	import { Eye, EyeOff, Users, Mail, ToggleLeft, ToggleRight } from 'lucide-svelte';
	
	let activeMode = 'cc';
	let isAnimating = false;
	
	const scenarios = {
		cc: {
			title: 'Using CC (Carbon Copy)',
			subtitle: 'Everyone can see everyone else\'s email',
			recipients: [
				'alice.johnson@company.com',
				'bob.smith@company.com',
				'charlie.brown@company.com',
				'diana.wilson@company.com',
				'evan.davis@company.com'
			],
			visible: true,
			icon: Eye,
			color: '#ef4444',
			bgColor: '#fef2f2',
			borderColor: '#fecaca'
		},
		bcc: {
			title: 'Using BCC (Blind Carbon Copy)',
			subtitle: 'Recipients are hidden and protected',
			recipients: [
				'alice.johnson@company.com',
				'bob.smith@company.com',
				'charlie.brown@company.com',
				'diana.wilson@company.com',
				'evan.davis@company.com'
			],
			visible: false,
			icon: EyeOff,
			color: '#059669',
			bgColor: '#f0fdf4',
			borderColor: '#bbf7d0'
		}
	};
	
	function toggleMode() {
		if (isAnimating) return;
		
		isAnimating = true;
		activeMode = activeMode === 'cc' ? 'bcc' : 'cc';
		
		setTimeout(() => {
			isAnimating = false;
		}, 300);
	}
	
	$: currentScenario = scenarios[activeMode];
</script>

<section id="comparison" class="section bg-gray-50">
	<div class="container">
		<div class="section-header text-center fade-in">
			<h2>See the Difference</h2>
			<p class="section-subtitle">
				Interactive comparison showing how CC exposes privacy while BCC protects it
			</p>
		</div>
		
		<div class="comparison-container fade-in">
			<div class="toggle-controls">
				<button 
					class="toggle-btn {activeMode === 'cc' ? 'active' : ''}"
					on:click={() => activeMode = 'cc'}
					disabled={isAnimating}
				>
					<Eye size={20} />
					CC Mode
				</button>
				<button 
					class="toggle-btn {activeMode === 'bcc' ? 'active' : ''}"
					on:click={() => activeMode = 'bcc'}
					disabled={isAnimating}
				>
					<EyeOff size={20} />
					BCC Mode
				</button>
			</div>
			
			<div class="email-comparison">
				<div class="email-container {isAnimating ? 'animating' : ''}">
					<div class="email-header">
						<div class="email-title">
							<Mail size={20} />
							{currentScenario.title}
						</div>
						<div class="email-subtitle">
							{currentScenario.subtitle}
						</div>
					</div>
					
					<div class="email-body">
						<div class="field-group">
							<div class="field">
								<span class="field-label">To:</span>
								<span class="field-value">team-lead@company.com</span>
							</div>
							
							<div class="field">
								<span class="field-label">{activeMode.toUpperCase()}:</span>
								<div class="recipients-container">
									{#if currentScenario.visible}
										<div class="recipients-list visible">
											{#each currentScenario.recipients as email, index}
												<div 
													class="recipient-item exposed"
													style="animation-delay: {index * 100}ms"
												>
													{email}
												</div>
											{/each}
											<div class="visibility-indicator exposed">
												<svelte:component this={currentScenario.icon} size={16} />
												<span>All recipients can see each other</span>
											</div>
										</div>
									{:else}
										<div class="recipients-list hidden">
											<div class="privacy-shield">
												<svelte:component this={currentScenario.icon} size={20} />
												<span>Recipients hidden and protected</span>
											</div>
											<div class="recipient-count">
												<Users size={16} />
												<span>{currentScenario.recipients.length} recipients (private)</span>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</div>
						
						<div class="email-content">
							<div class="content-header">Subject: Team Meeting Update</div>
							<div class="content-body">
								Hi everyone,<br><br>
								Just a quick update about tomorrow's team meeting...<br><br>
								Best regards,<br>
								Team Lead
							</div>
						</div>
					</div>
					
					<div class="privacy-status {activeMode}">
						<svelte:component this={currentScenario.icon} size={16} />
						<span>
							{activeMode === 'cc' ? 'Privacy Exposed' : 'Privacy Protected'}
						</span>
					</div>
				</div>
			</div>
			
			<div class="comparison-summary">
				<div class="summary-grid">
					<div class="summary-item {activeMode === 'cc' ? 'active' : ''}">
						<div class="summary-header">
							<Eye size={20} />
							<span>CC (Carbon Copy)</span>
						</div>
						<ul class="summary-points">
							<li class="negative">❌ Email addresses visible to all</li>
							<li class="negative">❌ Privacy compromised</li>
							<li class="negative">❌ Increased spam risk</li>
						</ul>
					</div>
					
					<div class="summary-item {activeMode === 'bcc' ? 'active' : ''}">
						<div class="summary-header">
							<EyeOff size={20} />
							<span>BCC (Blind Carbon Copy)</span>
						</div>
						<ul class="summary-points">
							<li class="positive">✅ Email addresses hidden</li>
							<li class="positive">✅ Privacy maintained</li>
							<li class="positive">✅ Spam protection</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		margin-bottom: var(--spacing-12);
	}
	
	.section-subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-gray-600);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.comparison-container {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.toggle-controls {
		display: flex;
		justify-content: center;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-8);
	}
	
	.toggle-btn {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3) var(--spacing-6);
		border: 2px solid var(--color-gray-300);
		background: var(--color-white);
		color: var(--color-gray-600);
		border-radius: var(--radius-lg);
		font-weight: 600;
		cursor: pointer;
		transition: all var(--transition-fast);
	}
	
	.toggle-btn:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}
	
	.toggle-btn.active {
		border-color: var(--color-primary);
		background: var(--color-primary);
		color: var(--color-white);
	}
	
	.toggle-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.email-comparison {
		margin-bottom: var(--spacing-12);
	}
	
	.email-container {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
		overflow: hidden;
		transition: transform var(--transition-normal);
	}
	
	.email-container.animating {
		transform: scale(0.98);
	}
	
	.email-header {
		background: linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%);
		color: var(--color-white);
		padding: var(--spacing-6);
	}
	
	.email-title {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-weight: 600;
		font-size: var(--font-size-lg);
		margin-bottom: var(--spacing-2);
	}
	
	.email-subtitle {
		color: var(--color-gray-300);
		font-size: var(--font-size-sm);
	}
	
	.email-body {
		padding: var(--spacing-6);
	}
	
	.field-group {
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-6);
		border-bottom: 1px solid var(--color-gray-200);
	}
	
	.field {
		display: flex;
		align-items: flex-start;
		margin-bottom: var(--spacing-4);
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: var(--font-size-sm);
	}
	
	.field-label {
		font-weight: 600;
		color: var(--color-gray-700);
		min-width: 50px;
		margin-right: var(--spacing-3);
	}
	
	.field-value {
		color: var(--color-gray-600);
	}
	
	.recipients-container {
		flex: 1;
	}
	
	.recipients-list {
		transition: all var(--transition-normal);
	}
	
	.recipient-item {
		padding: var(--spacing-2) var(--spacing-3);
		margin-bottom: var(--spacing-2);
		border-radius: var(--radius-md);
		font-size: var(--font-size-xs);
		animation: fadeInUp 0.3s ease-out forwards;
		opacity: 0;
		transform: translateY(10px);
	}
	
	.recipient-item.exposed {
		background: #fef2f2;
		color: #ef4444;
		border: 1px solid #fecaca;
	}
	
	.visibility-indicator {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		font-size: var(--font-size-xs);
		font-weight: 600;
		margin-top: var(--spacing-2);
	}
	
	.visibility-indicator.exposed {
		background: #fef2f2;
		color: #ef4444;
		border: 1px solid #fecaca;
	}
	
	.privacy-shield {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-4) var(--spacing-6);
		background: var(--color-green-50);
		color: var(--color-secondary);
		border-radius: var(--radius-lg);
		font-weight: 600;
		margin-bottom: var(--spacing-3);
		border: 2px solid var(--color-green-200);
	}
	
	.recipient-count {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-gray-600);
		font-size: var(--font-size-sm);
		padding-left: var(--spacing-2);
	}
	
	.email-content {
		background: var(--color-gray-50);
		padding: var(--spacing-4);
		border-radius: var(--radius-lg);
	}
	
	.content-header {
		font-weight: 600;
		color: var(--color-gray-800);
		margin-bottom: var(--spacing-3);
	}
	
	.content-body {
		color: var(--color-gray-600);
		line-height: 1.6;
		font-size: var(--font-size-sm);
	}
	
	.privacy-status {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3) var(--spacing-4);
		font-weight: 600;
		font-size: var(--font-size-sm);
	}
	
	.privacy-status.cc {
		background: #fef2f2;
		color: #ef4444;
	}
	
	.privacy-status.bcc {
		background: var(--color-green-50);
		color: var(--color-secondary);
	}
	
	.comparison-summary {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-lg);
	}
	
	.summary-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-8);
	}
	
	.summary-item {
		padding: var(--spacing-6);
		border-radius: var(--radius-lg);
		border: 2px solid var(--color-gray-200);
		transition: all var(--transition-fast);
	}
	
	.summary-item.active {
		border-color: var(--color-primary);
		background: var(--color-gray-50);
	}
	
	.summary-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-weight: 600;
		color: var(--color-gray-800);
		margin-bottom: var(--spacing-4);
	}
	
	.summary-points {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.summary-points li {
		padding: var(--spacing-2) 0;
		font-size: var(--font-size-sm);
	}
	
	.negative {
		color: #ef4444;
	}
	
	.positive {
		color: var(--color-secondary);
	}
	
	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@media (max-width: 768px) {
		.toggle-controls {
			flex-direction: column;
			align-items: center;
		}
		
		.toggle-btn {
			width: 100%;
			max-width: 200px;
		}
		
		.summary-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}
		
		.field {
			flex-direction: column;
		}
		
		.field-label {
			margin-bottom: var(--spacing-1);
		}
	}
</style>