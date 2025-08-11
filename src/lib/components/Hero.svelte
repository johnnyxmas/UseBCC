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
				Protect Privacy in <span class="text-primary">Group Emails</span>
			</h1>
			
			<p class="hero-subtitle fade-in">
				Stop exposing everyone's email addresses! Protect user privacy and stop the dreaded "Reply-All Problem." Learn why BCC is the privacy-conscious choice for group communications.
			</p>
			
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
				<a href="#usage" class="btn btn-primary">
					<Info size={20} />
					How to use BCC
				</a>
				<a href="#problem" class="btn btn-primary">
					<Mail size={20} />
					Learn Why BCC Matters
				</a>
				<a href="#comparison" class="btn btn-outline">
					See the Difference
				</a>
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
		background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%);
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
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-10);
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.hero-demo {
		margin-bottom: var(--spacing-10);
	}
	
	.email-preview {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
		padding: var(--spacing-6);
		max-width: 500px;
		margin: 0 auto;
		text-align: left;
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
		color: var(--color-gray-700);
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
	
	.hero-actions {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		flex-wrap: wrap;
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