<script>
	import { Book, Mail, Monitor, Smartphone, ChevronRight, ExternalLink } from 'lucide-svelte';
	
	let activeClient = 'gmail';
	
	const emailClients = {
		gmail: {
			name: 'Gmail',
			icon: '📧',
			steps: [
				'Click "Compose" to start a new email',
				'Click "BCC" next to the "To" field (or press Ctrl+Shift+B)',
				'Add recipient email addresses in the BCC field',
				'Write your email subject and message',
				'Click "Send" - recipients won\'t see each other\'s addresses'
			],
			tips: [
				'You can use both "To" and "BCC" fields together',
				'BCC recipients cannot see each other or reply to all',
				'Consider adding yourself to "To" if using only BCC'
			]
		},
		outlook: {
			name: 'Outlook',
			icon: '📮',
			steps: [
				'Click "New Email" to create a message',
				'Click "Options" tab, then "Show Fields" > "BCC"',
				'Enter email addresses in the BCC field',
				'Compose your subject and message',
				'Click "Send" to protect recipient privacy'
			],
			tips: [
				'BCC field stays visible for future emails once enabled',
				'Use "To" field for primary recipient, BCC for others',
				'Recipients in BCC cannot see who else received the email'
			]
		},
		apple: {
			name: 'Apple Mail',
			icon: '📬',
			steps: [
				'Click "New Message" or press Cmd+N',
				'Click "View" menu and select "BCC Address Field"',
				'Add email addresses to the BCC field',
				'Write your subject and email content',
				'Click "Send" to maintain recipient privacy'
			],
			tips: [
				'BCC field can be permanently enabled in preferences',
				'Great for mailing lists and group announcements',
				'Recipients cannot reply to all when using BCC'
			]
		},
		mobile: {
			name: 'Mobile Apps',
			icon: '📱',
			steps: [
				'Open your email app and tap "Compose"',
				'Tap the "+" or arrow next to recipient fields',
				'Select "BCC" from the options',
				'Add email addresses to the BCC field',
				'Send your email with protected recipient privacy'
			],
			tips: [
				'Most mobile email apps support BCC',
				'Look for "Show BCC" or similar options',
				'Swipe or tap to reveal additional fields'
			]
		}
	};
	
	$: currentClient = emailClients[activeClient];
</script>

<section id="usage" class="section">
	<div class="container">
		<div class="section-header text-center fade-in">
			<div class="section-icon">
				<Book size={48} />
			</div>
			<h2>How to Use BCC</h2>
			<p class="section-subtitle">
				Step-by-step instructions for protecting privacy in your favorite email client
			</p>
		</div>
		
		<div class="usage-container">
			<div class="client-selector fade-in">
				<h3>Choose your email client:</h3>
				<div class="client-buttons">
					{#each Object.entries(emailClients) as [key, client]}
						<button 
							class="client-btn {activeClient === key ? 'active' : ''}"
							on:click={() => activeClient = key}
						>
							<span class="client-icon">{client.icon}</span>
							<span class="client-name">{client.name}</span>
						</button>
					{/each}
				</div>
			</div>
			
			<div class="usage-content slide-in-left">
				<div class="client-guide">
					<div class="guide-header">
						<h3>
							<span class="client-icon-large">{currentClient.icon}</span>
							Using BCC in {currentClient.name}
						</h3>
					</div>
					
					<div class="steps-container">
						<h4>Step-by-step instructions:</h4>
						<ol class="steps-list">
							{#each currentClient.steps as step, index}
								<li class="step-item">
									<div class="step-number">{index + 1}</div>
									<div class="step-content">{step}</div>
								</li>
							{/each}
						</ol>
					</div>
					
					<div class="tips-container">
						<h4>💡 Pro Tips:</h4>
						<ul class="tips-list">
							{#each currentClient.tips as tip}
								<li class="tip-item">{tip}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
			
			<div class="best-practices slide-in-right">
				<div class="practices-card">
					<h3>Best Practices</h3>
					
					<div class="practice-item">
						<div class="practice-icon">✅</div>
						<div class="practice-content">
							<h4>When to use BCC</h4>
							<p>Group announcements, newsletters, notifications... any email where recipients don't need to know each other!</p>
						</div>
					</div>
					
					<div class="practice-item">
						<div class="practice-icon">⚠️</div>
						<div class="practice-content">
							<h4>When to use CC</h4>
							<p>Only when recipients need to know who else is included and transparency is required for the conversation.</p>
						</div>
					</div>
					
					<div class="practice-item">
						<div class="practice-icon">🛡️</div>
						<div class="practice-content">
							<h4>Privacy first</h4>
							<p>When in doubt, choose BCC. It's better to protect privacy than accidentally expose email addresses.</p>
						</div>
					</div>
					
					<div class="practice-item">
						<div class="practice-icon">📝</div>
						<div class="practice-content">
							<h4>Clear communication</h4>
							<p>Let recipients know if they're receiving a BCC email and explain why you're protecting their privacy.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="quick-reference fade-in">
			<h3>Quick Reference</h3>
			<div class="reference-grid">
				<div class="reference-item">
					<div class="reference-header">
						<Monitor size={20} />
						<span>Desktop Shortcuts</span>
					</div>
					<ul class="shortcut-list">
						<li><strong>Gmail:</strong> Ctrl+Shift+B (Cmd+Shift+B on Mac)</li>
						<li><strong>Outlook:</strong> Alt+B or Options > Show Fields > BCC</li>
						<li><strong>Apple Mail:</strong> View > BCC Address Field</li>
					</ul>
				</div>
				
				<div class="reference-item">
					<div class="reference-header">
						<Smartphone size={20} />
						<span>Mobile Access</span>
					</div>
					<ul class="shortcut-list">
						<li><strong>Most apps:</strong> Tap "+" or arrow near recipient fields</li>
						<li><strong>Look for:</strong> "Show BCC", "Add BCC", or "More fields"</li>
						<li><strong>Enable:</strong> BCC option in compose settings</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		margin-bottom: var(--spacing-12);
	}
	
	.section-icon {
		color: var(--color-primary);
		margin-bottom: var(--spacing-4);
		display: inline-block;
	}
	
	.section-subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-gray-600);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.usage-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-12);
		margin-bottom: var(--spacing-16);
	}
	
	.client-selector {
		grid-column: 1 / -1;
		margin-bottom: var(--spacing-8);
	}
	
	.client-selector h3 {
		text-align: center;
		margin-bottom: var(--spacing-6);
		color: var(--color-gray-800);
	}
	
	.client-buttons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-4);
		max-width: 800px;
		margin: 0 auto;
	}
	
	.client-btn {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-4) var(--spacing-6);
		background: var(--color-white);
		border: 2px solid var(--color-gray-200);
		border-radius: var(--radius-lg);
		cursor: pointer;
		transition: all var(--transition-fast);
		font-weight: 600;
		color: var(--color-gray-700);
	}
	
	.client-btn:hover {
		border-color: var(--color-primary);
		background: var(--color-gray-50);
	}
	
	.client-btn.active {
		border-color: var(--color-primary);
		background: var(--color-primary);
		color: var(--color-white);
	}
	
	.client-icon {
		font-size: var(--font-size-xl);
	}
	
	.client-name {
		font-size: var(--font-size-base);
	}
	
	.client-guide {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-lg);
		height: fit-content;
	}
	
	.guide-header {
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-4);
		border-bottom: 2px solid var(--color-gray-100);
	}
	
	.guide-header h3 {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		color: var(--color-gray-900);
		margin-bottom: 0;
	}
	
	.client-icon-large {
		font-size: var(--font-size-2xl);
	}
	
	.steps-container {
		margin-bottom: var(--spacing-8);
	}
	
	.steps-container h4 {
		color: var(--color-gray-800);
		margin-bottom: var(--spacing-4);
		font-size: var(--font-size-lg);
	}
	
	.steps-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.step-item {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-4);
		padding: var(--spacing-4);
		background: var(--color-gray-50);
		border-radius: var(--radius-lg);
	}
	
	.step-number {
		background: var(--color-primary);
		color: var(--color-white);
		width: 32px;
		height: 32px;
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: var(--font-size-sm);
		flex-shrink: 0;
	}
	
	.step-content {
		color: var(--color-gray-700);
		line-height: 1.6;
	}
	
	.tips-container h4 {
		color: var(--color-gray-800);
		margin-bottom: var(--spacing-4);
		font-size: var(--font-size-lg);
	}
	
	.tips-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.tip-item {
		padding: var(--spacing-3);
		margin-bottom: var(--spacing-2);
		background: var(--color-accent-light);
		background: #fef3c7;
		color: var(--color-gray-700);
		border-radius: var(--radius-md);
		border-left: 4px solid var(--color-accent);
		font-size: var(--font-size-sm);
		line-height: 1.5;
	}
	
	.practices-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-8);
		box-shadow: var(--shadow-lg);
		height: fit-content;
	}
	
	.practices-card h3 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-6);
		text-align: center;
	}
	
	.practice-item {
		display: flex;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-6);
		padding-bottom: var(--spacing-4);
		border-bottom: 1px solid var(--color-gray-100);
	}
	
	.practice-item:last-child {
		border-bottom: none;
		margin-bottom: 0;
	}
	
	.practice-icon {
		font-size: var(--font-size-xl);
		flex-shrink: 0;
	}
	
	.practice-content h4 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-2);
		font-size: var(--font-size-base);
	}
	
	.practice-content p {
		color: var(--color-gray-600);
		font-size: var(--font-size-sm);
		line-height: 1.5;
		margin-bottom: 0;
	}
	
	.quick-reference {
		background: var(--color-gray-50);
		padding: var(--spacing-8);
		border-radius: var(--radius-2xl);
	}
	
	.quick-reference h3 {
		text-align: center;
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-6);
	}
	
	.reference-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-8);
	}
	
	.reference-item {
		background: var(--color-white);
		padding: var(--spacing-6);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-md);
	}
	
	.reference-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-gray-800);
		font-weight: 600;
		margin-bottom: var(--spacing-4);
	}
	
	.shortcut-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.shortcut-list li {
		padding: var(--spacing-2) 0;
		color: var(--color-gray-600);
		font-size: var(--font-size-sm);
		border-bottom: 1px solid var(--color-gray-100);
	}
	
	.shortcut-list li:last-child {
		border-bottom: none;
	}
	
	.shortcut-list strong {
		color: var(--color-gray-800);
	}
	
	@media (max-width: 768px) {
		.usage-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
		
		.client-buttons {
			grid-template-columns: 1fr 1fr;
		}
		
		.reference-grid {
			grid-template-columns: 1fr;
		}
		
		.step-item {
			flex-direction: column;
			text-align: center;
		}
		
		.practice-item {
			flex-direction: column;
			text-align: center;
		}
	}
</style>