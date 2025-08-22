<script>
	import { AlertTriangle, Users, Eye, Mail } from 'lucide-svelte';
</script>

<section id="problem" class="section bg-gray-50">
	<div class="container">
		<div class="section-header text-center fade-in">
			<div class="section-icon">
				<AlertTriangle size={48} />
			</div>
			<h2>The Hidden Problem with CC</h2>
			<p class="section-subtitle">
				When you use CC for group emails, you're unknowingly exposing everyone's privacy
			</p>
		</div>
		
		<div class="problem-grid">
			<div class="problem-demo slide-in-left">
				<div class="email-mockup">
					<div class="email-header">
						<div class="email-title">
							<Mail size={20} />
							Team Meeting Update
						</div>
					</div>
					<div class="email-fields">
						<div class="field">
							<span class="label">To:</span>
							<span class="value">team-lead@company.com</span>
						</div>
						<div class="field cc-exposed">
							<span class="label">CC:</span>
							<div class="exposed-emails">
								<span class="email-item">alice.johnson@company.com</span>
								<span class="email-item">bob.smith@company.com</span>
								<span class="email-item">charlie.brown@company.com</span>
								<span class="email-item">diana.wilson@company.com</span>
								<span class="email-item">evan.davis@company.com</span>
								<div class="exposure-indicator">
									<Eye size={16} />
									<span>All visible to everyone</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="problem-issues slide-in-right">
				<div class="issue-card">
					<div class="issue-icon">
						<Users size={24} />
					</div>
					<h3>Privacy Breach</h3>
					<p>Every recipient can see everyone else's email address, potentially violating privacy policies and personal preferences.</p>
				</div>
				
				<div class="issue-card">
					<div class="issue-icon">
						<Mail size={24} />
					</div>
					<h3>Spam Risk</h3>
					<p>Exposed email addresses can be harvested by malicious actors, leading to increased spam and phishing attempts.</p>
				</div>
				
				<div class="issue-card">
					<div class="issue-icon">
						<AlertTriangle size={24} />
					</div>
					<h3>Professional Concerns</h3>
					<p>Accidentally revealing client or partner email addresses can damage business relationships and trust.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		margin-bottom: var(--spacing-16);
	}
	
	.section-icon {
		color: #ef4444;
		margin-bottom: var(--spacing-4);
		display: inline-block;
	}
	
	.section-subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-gray-600);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.problem-grid {
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
	}
	
	.email-header {
		background: var(--color-gray-100);
		padding: var(--spacing-4);
		border-bottom: 1px solid var(--color-gray-200);
	}
	
	.email-title {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-weight: 600;
		color: var(--color-gray-800);
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
		min-width: 30px;
		margin-right: var(--spacing-3);
	}
	
	.value {
		color: var(--color-gray-600);
	}
	
	.cc-exposed {
		flex-direction: column;
		align-items: flex-start;
	}
	
	.exposed-emails {
		margin-left: 42px;
		margin-top: var(--spacing-2);
	}
	
	.email-item {
		display: block;
		color: var(--color-orange-600);
		background: var(--color-orange-50);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--radius-sm);
		margin-bottom: var(--spacing-2);
		font-size: var(--font-size-xs);
		border: 1px solid var(--color-orange-200);
	}
	
	.exposure-indicator {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-orange-600);
		font-size: var(--font-size-xs);
		font-weight: 600;
		margin-top: var(--spacing-3);
		padding: var(--spacing-2);
		background: var(--color-orange-50);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-orange-200);
	}
	
	.problem-issues {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}
	
	.issue-card {
		background: var(--color-white);
		padding: var(--spacing-6);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-md);
		border-left: 4px solid #ef4444;
	}
	
	.issue-icon {
		color: var(--color-orange-600);
		margin-bottom: var(--spacing-3);
	}
	
	.issue-card h3 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-2);
		font-size: var(--font-size-lg);
	}
	
	.issue-card p {
		color: var(--color-gray-600);
		margin-bottom: 0;
		line-height: 1.6;
	}
	
	@media (max-width: 768px) {
		.problem-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
		
		.exposed-emails {
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