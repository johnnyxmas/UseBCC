<script>
	import { Shield, Mail, Users, ArrowRight } from 'lucide-svelte';
</script>

<section class="cta-section section">
	<div class="container">
		<div class="cta-container fade-in">
			<div class="cta-content">
				<div class="cta-icon">
					<Shield size={64} />
				</div>
				
				<h2>Start Protecting Privacy Today</h2>
				<p class="cta-subtitle">
					Join thousands of professionals who use BCC to protect recipient privacy and build trust in their communications.
				</p>
				
				<div class="cta-stats">
					<div class="stat">
						<div class="stat-icon">
							<Users size={24} />
						</div>
						<div class="stat-content">
							<div class="stat-number">1.64 Quadrillion+</div>
							<div class="stat-label">Protected Recipients</div>
						</div>
					</div>
					
					<div class="stat">
						<div class="stat-icon">
							<Mail size={24} />
						</div>
						<div class="stat-content">
							<div class="stat-number">32 Trillion+</div>
							<div class="stat-label">Private Emails Sent</div>
						</div>
					</div>
					
					<div class="stat">
						<div class="stat-icon">
							<Shield size={24} />
						</div>
						<div class="stat-content">
							<div class="stat-number">100%</div>
							<div class="stat-label">Privacy Protected</div>
						</div>
					</div>
				</div>
				
				<div class="cta-actions">
					<a href="#usage" class="btn btn-primary btn-large">
						<Mail size={20} />
						Learn How to Use BCC
						<ArrowRight size={20} />
					</a>
					<a href="#comparison" class="btn btn-outline btn-large">
						See the Comparison
					</a>
				</div>
				
				<div class="cta-promise">
					<p>
						<strong>Our Promise:</strong> Simple, practical guidance to help you protect privacy in every email you send.
					</p>
				</div>
			</div>
			
			<div class="cta-visual">
				<div class="privacy-illustration">
					<div class="email-stack">
						<div class="email-card protected">
							<div class="email-header">
								<Shield size={16} />
								<span>BCC Protected</span>
							</div>
							<div class="email-body">
								<div class="recipient-line">
									<span class="label">To:</span>
									<span class="value">team@company.com</span>
								</div>
								<div class="recipient-line">
									<span class="label">BCC:</span>
									<span class="value protected-text">
										<span class="shield-icon">🛡️</span>
										Hidden & Protected
									</span>
								</div>
							</div>
						</div>
						
						<div class="email-card exposed">
							<div class="email-header">
								<span class="warning">⚠️</span>
								<span>CC Exposed</span>
							</div>
							<div class="email-body">
								<div class="recipient-line">
									<span class="label">To:</span>
									<span class="value">team@company.com</span>
								</div>
								<div class="recipient-line">
									<span class="label">CC:</span>
									<span class="value exposed-text">
										alice@..., bob@..., charlie@...
									</span>
								</div>
							</div>
						</div>
					</div>
					
					<div class="privacy-benefits">
						<div class="benefit-item">
							<div class="benefit-icon">✅</div>
							<span>No spam risk</span>
						</div>
						<div class="benefit-item">
							<div class="benefit-icon">✅</div>
							<span>Privacy respected</span>
						</div>
						<div class="benefit-item">
							<div class="benefit-icon">✅</div>
							<span>Professional trust</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-section {
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		color: var(--color-white);
	}
	
	.cta-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-16);
		align-items: center;
	}
	
	.cta-content {
		text-align: center;
	}
	
	.cta-icon {
		margin-bottom: var(--spacing-6);
		opacity: 0.9;
	}
	
	.cta-container h2 {
		color: var(--color-white);
		font-size: var(--font-size-4xl);
		font-weight: 800;
		margin-bottom: var(--spacing-4);
		line-height: 1.1;
	}
	
	.cta-subtitle {
		font-size: var(--font-size-xl);
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: var(--spacing-10);
		line-height: 1.5;
	}
	
	.cta-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-10);
	}
	
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-4);
		background: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		backdrop-filter: blur(10px);
	}
	
	.stat-icon {
		color: rgba(255, 255, 255, 0.8);
	}
	
	.stat-number {
		font-size: var(--font-size-2xl);
		font-weight: 800;
		color: var(--color-white);
	}
	
	.stat-label {
		font-size: var(--font-size-sm);
		color: rgba(255, 255, 255, 0.8);
		text-align: center;
	}
	
	.cta-actions {
		display: flex;
		gap: var(--spacing-4);
		justify-content: center;
		margin-bottom: var(--spacing-8);
		flex-wrap: wrap;
	}
	
	.btn-large {
		padding: var(--spacing-4) var(--spacing-8);
		font-size: var(--font-size-lg);
		font-weight: 600;
	}
	
	.btn-primary {
		background: var(--color-white);
		color: var(--color-primary);
		border: 2px solid var(--color-white);
	}
	
	.btn-primary:hover {
		background: rgba(255, 255, 255, 0.9);
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	}
	
	.btn-outline {
		background: transparent;
		color: var(--color-white);
		border: 2px solid rgba(255, 255, 255, 0.5);
	}
	
	.btn-outline:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--color-white);
		transform: translateY(-2px);
	}
	
	.cta-promise {
		padding: var(--spacing-4);
		background: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		backdrop-filter: blur(10px);
	}
	
	.cta-promise p {
		margin: 0;
		color: rgba(255, 255, 255, 0.9);
		font-size: var(--font-size-sm);
	}
	
	.cta-promise strong {
		color: var(--color-white);
	}
	
	.cta-visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.privacy-illustration {
		max-width: 400px;
		width: 100%;
	}
	
	.email-stack {
		position: relative;
		margin-bottom: var(--spacing-8);
	}
	
	.email-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-4);
		margin-bottom: var(--spacing-4);
		box-shadow: var(--shadow-xl);
		transform: perspective(1000px) rotateY(-5deg);
		transition: transform var(--transition-normal);
	}
	
	.email-card:hover {
		transform: perspective(1000px) rotateY(0deg);
	}
	
	.email-card.protected {
		border: 2px solid var(--color-secondary);
		transform: perspective(1000px) rotateY(5deg) translateX(-10px);
		z-index: 2;
		position: relative;
	}
	
	.email-card.exposed {
		border: 2px solid #ef4444;
		transform: perspective(1000px) rotateY(-5deg) translateX(10px);
		margin-top: -20px;
		z-index: 1;
	}
	
	.email-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		font-size: var(--font-size-sm);
		font-weight: 600;
		margin-bottom: var(--spacing-3);
	}
	
	.protected .email-header {
		background: var(--color-green-50);
		color: var(--color-secondary);
	}
	
	.exposed .email-header {
		background: #fef2f2;
		color: #ef4444;
	}
	
	.email-body {
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: var(--font-size-xs);
	}
	
	.recipient-line {
		display: flex;
		margin-bottom: var(--spacing-2);
	}
	
	.label {
		font-weight: 600;
		color: var(--color-gray-700);
		min-width: 35px;
		margin-right: var(--spacing-2);
	}
	
	.value {
		color: var(--color-gray-600);
		flex: 1;
	}
	
	.protected-text {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
		color: var(--color-secondary);
		font-weight: 600;
	}
	
	.exposed-text {
		color: #ef4444;
		font-weight: 600;
	}
	
	.privacy-benefits {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}
	
	.benefit-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3);
		background: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-lg);
		color: var(--color-white);
		font-weight: 600;
		backdrop-filter: blur(10px);
	}
	
	.benefit-icon {
		font-size: var(--font-size-lg);
	}
	
	@media (max-width: 768px) {
		.cta-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-12);
			text-align: center;
		}
		
		.cta-container h2 {
			font-size: var(--font-size-3xl);
		}
		
		.cta-subtitle {
			font-size: var(--font-size-lg);
		}
		
		.cta-stats {
			grid-template-columns: 1fr;
			gap: var(--spacing-4);
		}
		
		.cta-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.btn-large {
			width: 100%;
			max-width: 300px;
		}
		
		.email-card {
			transform: none !important;
			margin-bottom: var(--spacing-3);
		}
		
		.email-card.protected {
			transform: none !important;
			margin-top: 0;
		}
		
		.email-card.exposed {
			transform: none !important;
			margin-top: var(--spacing-3);
		}
	}
</style>