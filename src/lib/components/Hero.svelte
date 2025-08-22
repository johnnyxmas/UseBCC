<script>
	import { Mail, Shield, Eye, EyeOff, Info } from 'lucide-svelte';
</script>

<section class="hero section bg-gradient">
	<div class="container">
		<div class="hero-content text-center">
			<div class="hero-icon fade-in">
				<Shield size={64} />
			</div>
			
			<h1 class="hero-title fade-in">
				BCC, not CC:<br>
				Protect Privacy,<br>
				<span class="text-primary">Stop Reply-All Spam</span>
			</h1>
			
			<div class="hero-subtitle fade-in" style="text-align: left; max-width: 600px; margin: 0 auto;">
				<ul style="color: var(--color-text-secondary); font-size: var(--font-size-xl); line-height: 1.8; list-style: none; padding: 0; margin: 0;">
					<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 12px;">
						<span style="color: var(--color-secondary); font-weight: bold; font-size: 20px; margin-top: 2px;">•</span>
						<span><strong>BCC recipients cannot see other BCC recipients</strong></span>
					</li>
					<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 12px;">
						<span style="color: var(--color-secondary); font-weight: bold; font-size: 20px; margin-top: 2px;">•</span>
						<span><strong>CC recipients can see other CC recipients</strong></span>
					</li>
					<li style="margin-bottom: 12px; display: flex; align-items: flex-start; gap: 12px;">
						<span style="color: var(--color-red-600); font-weight: bold; font-size: 20px; margin-top: 2px;">•</span>
						<span><strong>BCC cannot reply all</strong></span>
					</li>
				</ul>
			</div>
			
			<div class="hero-demo fade-in">
				<div class="email-preview">
					<div class="email-header">
						<div class="email-field">
							<span class="field-label">To:</span>
							<span class="field-value">you@company.com</span>
						</div>
						<div class="email-field cc-field">
							<span class="field-label">CC:</span>
							<span class="field-value exposed">
								<Eye size={16} />
								alice@company.com, bob@company.com, charlie@company.com...
							</span>
						</div>
						<div class="email-field bcc-field">
							<span class="field-label">BCC:</span>
							<span class="field-value protected">
								<EyeOff size={16} />
								Hidden and protected
							</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="hero-actions fade-in">
				<a href="#usage" class="btn btn-primary" aria-label="Learn BCC email settings">
					<Info size={20} />
					Configure BCC Email Settings
				</a>
				<a href="#problem" class="btn btn-primary" aria-label="Email security guide">
					<Mail size={20} />
					Email Security & Privacy Guide
				</a>
				<a href="#comparison" class="btn btn-outline" aria-label="BCC vs CC comparison">
					BCC vs CC: See the Difference
				</a>
			</div>
			
			<div class="seo-keywords fade-in">
				<p class="keywords-text">
					Trusted guide for: <strong>BCC best practices that enhance email security</strong>, <strong>email privacy</strong>,
					<strong>and anti-spam measures</strong>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
	}
	
	.bg-gradient {
		background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg) 100%);
	}
	
	.hero-content {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-8) 0;
	}
	
	.hero-icon {
		color: var(--color-primary);
		margin-bottom: var(--spacing-6);
		display: inline-block;
	}
	
	.hero-title {
		font-size: var(--font-size-5xl);
		font-weight: 800;
		margin-bottom: var(--spacing-6);
		line-height: 1.1;
	}
	
	.hero-subtitle {
		font-size: var(--font-size-xl);
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-10);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.hero-demo {
		margin-bottom: var(--spacing-10);
	}
	
	.email-preview {
		background: var(--color-bg);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
		padding: var(--spacing-6);
		max-width: 500px;
		margin: 0 auto;
		text-align: left;
		border: 1px solid var(--color-border);
	}
	
	.email-header {
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: var(--font-size-sm);
	}
	
	.email-field {
		display: flex;
		align-items: center;
		margin-bottom: var(--spacing-3);
		gap: var(--spacing-2);
	}
	
	.field-label {
		font-weight: 600;
		color: var(--color-text-secondary);
		min-width: 40px;
	}
	
	.field-value {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		flex: 1;
	}
	
	.exposed {
		color: var(--color-red-600);
		background: var(--color-red-50);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-red-200);
	}
	
	.protected {
		color: var(--color-secondary);
		background: var(--color-green-50);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-green-200);
	}
	
	/* Dark mode adjustments for status indicators */
	@media (prefers-color-scheme: dark) {
		:global(:root:not(.light)) .exposed {
			background: rgba(220, 38, 38, 0.1);
			border-color: rgba(220, 38, 38, 0.3);
		}
		
		:global(:root:not(.light)) .protected {
			background: rgba(16, 185, 129, 0.1);
			border-color: rgba(16, 185, 129, 0.3);
		}
	}
	
	/* Manual dark mode adjustments */
	:global(:root.dark) .exposed {
		background: rgba(220, 38, 38, 0.1);
		border-color: rgba(220, 38, 38, 0.3);
	}
	
	:global(:root.dark) .protected {
		background: rgba(16, 185, 129, 0.1);
		border-color: rgba(16, 185, 129, 0.3);
	}
	
	.hero-actions {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: var(--spacing-6);
	}
	
	.seo-keywords {
		margin-top: var(--spacing-8);
		padding-top: var(--spacing-8);
		border-top: 1px solid var(--color-border);
	}
	
	.keywords-text {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.keywords-text strong {
		color: var(--color-text);
		font-weight: 600;
	}
	
	@media (max-width: 768px) {
		.hero-title {
			font-size: var(--font-size-4xl);
		}
		
		.hero-subtitle {
			font-size: var(--font-size-lg);
		}
		
		.email-preview {
			padding: var(--spacing-4);
		}
		
		.hero-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			width: 100%;
			max-width: 280px;
		}
	}
</style>