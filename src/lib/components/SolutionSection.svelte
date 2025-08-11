<script>
	import { Shield, EyeOff, Lock, CheckCircle, Users, Zap } from 'lucide-svelte';
</script>

<section id="solution" class="section">
	<div class="container">
		<div class="section-header text-center fade-in">
			<div class="section-icon">
				<Shield size={48} />
			</div>
			<h2>The BCC Solution</h2>
			<p class="section-subtitle">
				Blind Carbon Copy protects everyone's privacy while maintaining professional communication
			</p>
		</div>
		
		<div class="solution-grid">
			<div class="solution-demo slide-in-left">
				<div class="email-mockup">
					<div class="email-header">
						<div class="email-title">
							<Shield size={20} />
							Team Meeting Update (Protected)
						</div>
					</div>
					<div class="email-fields">
						<div class="field">
							<span class="label">To:</span>
							<span class="value">team-lead@company.com</span>
						</div>
						<div class="field bcc-protected">
							<span class="label">BCC:</span>
							<div class="protected-info">
								<div class="privacy-shield">
									<EyeOff size={16} />
									<span>Recipients hidden and protected</span>
								</div>
								<div class="recipient-count">
									<Users size={14} />
									<span>5 recipients (private)</span>
								</div>
							</div>
						</div>
					</div>
					<div class="privacy-badge">
						<Lock size={16} />
						<span>Privacy Protected</span>
					</div>
				</div>
			</div>
			
			<div class="solution-benefits slide-in-right">
				<div class="benefit-card">
					<div class="benefit-icon">
						<EyeOff size={24} />
					</div>
					<h3>Complete Privacy</h3>
					<p>Recipients cannot see each other's email addresses, maintaining confidentiality and respecting privacy preferences.</p>
				</div>
				
				<div class="benefit-card">
					<div class="benefit-icon">
						<Shield size={24} />
					</div>
					<h3>Spam Protection</h3>
					<p>Hidden email addresses cannot be harvested by malicious actors, reducing spam and phishing risks for everyone.</p>
				</div>
				
				<div class="benefit-card">
					<div class="benefit-icon">
						<CheckCircle size={24} />
					</div>
					<h3>Professional Trust</h3>
					<p>Demonstrates respect for privacy and builds trust with clients, partners, and team members.</p>
				</div>
			</div>
		</div>
		
		<div class="comparison-highlight fade-in">
			<div class="highlight-grid">
				<div class="highlight-item cc-bad">
					<div class="highlight-header">
						<span class="highlight-label">CC (Carbon Copy)</span>
						<span class="highlight-status bad">❌ Exposed</span>
					</div>
					<ul class="highlight-list">
						<li>All email addresses visible</li>
						<li>Privacy compromised</li>
						<li>Spam risk increased</li>
						<li>Professional concerns</li>
					</ul>
				</div>
				
				<div class="highlight-item bcc-good">
					<div class="highlight-header">
						<span class="highlight-label">BCC (Blind Carbon Copy)</span>
						<span class="highlight-status good">✅ Protected</span>
					</div>
					<ul class="highlight-list">
						<li>Email addresses hidden</li>
						<li>Privacy maintained</li>
						<li>Spam protection</li>
						<li>Professional trust</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="solution-cta text-center fade-in">
			<h3>Ready to protect your recipients' privacy?</h3>
			<p>Learn how to use BCC in your favorite email client</p>
			<a href="#usage" class="btn btn-secondary">
				<Zap size={20} />
				See Usage Guide
			</a>
		</div>
	</div>
</section>

<style>
	.section-header {
		margin-bottom: var(--spacing-16);
	}
	
	.section-icon {
		color: var(--color-secondary);
		margin-bottom: var(--spacing-4);
		display: inline-block;
	}
	
	.section-subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-gray-600);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.solution-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-12);
		align-items: start;
		margin-bottom: var(--spacing-16);
	}
	
	.email-mockup {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		border: 2px solid var(--color-secondary-light);
	}
	
	.email-header {
		background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
		padding: var(--spacing-4);
		color: var(--color-white);
	}
	
	.email-title {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-weight: 600;
	}
	
	.email-fields {
		padding: var(--spacing-6);
	}
	
	.field {
		display: flex;
		margin-bottom: var(--spacing-4);
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: var(--font-size-sm);
	}
	
	.label {
		font-weight: 600;
		color: var(--color-gray-700);
		min-width: 40px;
		margin-right: var(--spacing-3);
	}
	
	.value {
		color: var(--color-gray-600);
	}
	
	.bcc-protected {
		flex-direction: column;
		align-items: flex-start;
	}
	
	.protected-info {
		margin-left: 52px;
		margin-top: var(--spacing-2);
	}
	
	.privacy-shield {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-secondary);
		background: var(--color-green-50);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		margin-bottom: var(--spacing-2);
		font-size: var(--font-size-xs);
		font-weight: 600;
		border: 1px solid var(--color-green-200);
	}
	
	.recipient-count {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-gray-600);
		font-size: var(--font-size-xs);
	}
	
	.privacy-badge {
		background: var(--color-secondary);
		color: var(--color-white);
		padding: var(--spacing-2) var(--spacing-4);
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-size: var(--font-size-xs);
		font-weight: 600;
	}
	
	.solution-benefits {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}
	
	.benefit-card {
		background: var(--color-white);
		padding: var(--spacing-6);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-md);
		border-left: 4px solid var(--color-secondary);
	}
	
	.benefit-icon {
		color: var(--color-secondary);
		margin-bottom: var(--spacing-3);
	}
	
	.benefit-card h3 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-2);
		font-size: var(--font-size-lg);
	}
	
	.benefit-card p {
		color: var(--color-gray-600);
		margin-bottom: 0;
		line-height: 1.6;
	}
	
	.comparison-highlight {
		margin-bottom: var(--spacing-16);
	}
	
	.highlight-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-6);
	}
	
	.highlight-item {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-6);
		box-shadow: var(--shadow-md);
	}
	
	.cc-bad {
		border-left: 4px solid #ef4444;
	}
	
	.bcc-good {
		border-left: 4px solid var(--color-secondary);
	}
	
	.highlight-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--spacing-4);
	}
	
	.highlight-label {
		font-weight: 600;
		color: var(--color-gray-900);
	}
	
	.highlight-status {
		font-size: var(--font-size-sm);
		font-weight: 600;
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--radius-md);
	}
	
	.bad {
		background: #fef2f2;
		color: #ef4444;
	}
	
	.good {
		background: var(--color-green-50);
		color: var(--color-secondary);
	}
	
	.highlight-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.highlight-list li {
		padding: var(--spacing-2) 0;
		color: var(--color-gray-600);
		font-size: var(--font-size-sm);
		border-bottom: 1px solid var(--color-gray-100);
	}
	
	.highlight-list li:last-child {
		border-bottom: none;
	}
	
	.solution-cta {
		background: var(--color-gray-50);
		padding: var(--spacing-8);
		border-radius: var(--radius-2xl);
	}
	
	.solution-cta h3 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-2);
	}
	
	.solution-cta p {
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-6);
	}
	
	@media (max-width: 768px) {
		.solution-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
		
		.highlight-grid {
			grid-template-columns: 1fr;
		}
		
		.protected-info {
			margin-left: 0;
		}
		
		.field {
			flex-direction: column;
		}
		
		.label {
			margin-bottom: var(--spacing-1);
		}
	}
</style>