<script>
	import { Shield, Mail, Github, Twitter, ExternalLink, Heart } from 'lucide-svelte';
	import { base } from '$app/paths';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<div class="brand-logo">
					<Shield size={32} />
					<span class="brand-name">UseBCC</span>
				</div>
				<p class="brand-description">
					Protecting privacy in group emails, one BCC at a time. Simple guidance for better email practices.
				</p>
				<div class="social-links">
					<a href="https://github.com" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
						<Github size={20} />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
						<Twitter size={20} />
					</a>
					<a href="mailto:hello@usebcc.com" class="social-link" aria-label="Email">
						<Mail size={20} />
					</a>
				</div>
			</div>
			
			<div class="footer-links">
				<div class="link-group">
					<h4>Learn</h4>
					<ul>
						<li><a href="#problem">Why BCC Matters</a></li>
						<li><a href="#solution">Privacy Benefits</a></li>
						<li><a href="#comparison">CC vs BCC</a></li>
						<li><a href="#usage">How to Use BCC</a></li>
					</ul>
				</div>
				
				<div class="link-group">
					<h4>Resources</h4>
					<ul>
						<li><a href="#faq">FAQ</a></li>
						<li>
							<a href="https://support.google.com/mail/answer/6584" target="_blank" rel="noopener">
								Gmail Guide
								<ExternalLink size={14} />
							</a>
						</li>
						<li>
							<a href="https://support.microsoft.com/en-us/office/add-and-use-bcc-in-email-messages" target="_blank" rel="noopener">
								Outlook Guide
								<ExternalLink size={14} />
							</a>
						</li>
						<li>
							<a href="https://support.apple.com/guide/mail/send-emails-mlhl2e7c5a4d/mac" target="_blank" rel="noopener">
								Apple Mail Guide
								<ExternalLink size={14} />
							</a>
						</li>
					</ul>
				</div>
				
				<div class="link-group">
					<h4>About</h4>
					<ul>
						<li><a href="#hero">About UseBCC</a></li>
						<li><a href="#faq">Frequently Asked</a></li>
						<li><a href="mailto:hello@usebcc.com">Contact Us</a></li>
						<li><a href="https://github.com/yourusername/UseBCC" target="_blank" rel="noopener">
							Source Code
							<ExternalLink size={14} />
						</a></li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="footer-bottom">
			<div class="footer-stats">
				<div class="stat-item">
					<span class="stat-number">10,000+</span>
					<span class="stat-label">Protected Recipients</span>
				</div>
				<div class="stat-item">
					<span class="stat-number">50,000+</span>
					<span class="stat-label">Private Emails</span>
				</div>
				<div class="stat-item">
					<span class="stat-number">100%</span>
					<span class="stat-label">Privacy Focus</span>
				</div>
			</div>
			
			<div class="footer-divider"></div>
			
			<div class="footer-meta">
				<div class="copyright">
					<p>
						© 2024 UseBCC. Made with 
						<Heart size={16} class="heart-icon" />
						for email privacy.
					</p>
				</div>
				
				<div class="footer-note">
					<p>
						<strong>Remember:</strong> When in doubt, choose BCC to protect recipient privacy.
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-gray-900);
		color: var(--color-gray-300);
		padding: var(--spacing-16) 0 var(--spacing-8);
	}
	
	.footer-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--spacing-16);
		margin-bottom: var(--spacing-12);
	}
	
	.footer-brand {
		max-width: 350px;
	}
	
	.brand-logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-4);
	}
	
	.brand-logo :global(svg) {
		color: var(--color-primary-light);
	}
	
	.brand-name {
		font-size: var(--font-size-xl);
		font-weight: 800;
		color: var(--color-white);
	}
	
	.brand-description {
		color: var(--color-gray-400);
		line-height: 1.6;
		margin-bottom: var(--spacing-6);
	}
	
	.social-links {
		display: flex;
		gap: var(--spacing-4);
	}
	
	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: var(--color-gray-800);
		color: var(--color-gray-400);
		border-radius: var(--radius-lg);
		transition: all var(--transition-fast);
		text-decoration: none;
	}
	
	.social-link:hover {
		background: var(--color-primary);
		color: var(--color-white);
		transform: translateY(-2px);
	}
	
	.footer-links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-8);
	}
	
	.link-group h4 {
		color: var(--color-white);
		font-size: var(--font-size-lg);
		font-weight: 600;
		margin-bottom: var(--spacing-4);
	}
	
	.link-group ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.link-group li {
		margin-bottom: var(--spacing-2);
	}
	
	.link-group a {
		color: var(--color-gray-400);
		text-decoration: none;
		font-size: var(--font-size-sm);
		transition: color var(--transition-fast);
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
	}
	
	.link-group a:hover {
		color: var(--color-primary-light);
	}
	
	.footer-bottom {
		border-top: 1px solid var(--color-gray-800);
		padding-top: var(--spacing-8);
	}
	
	.footer-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-6);
		margin-bottom: var(--spacing-8);
	}
	
	.stat-item {
		text-align: center;
		padding: var(--spacing-4);
		background: var(--color-gray-800);
		border-radius: var(--radius-lg);
	}
	
	.stat-number {
		display: block;
		font-size: var(--font-size-xl);
		font-weight: 800;
		color: var(--color-primary-light);
		margin-bottom: var(--spacing-1);
	}
	
	.stat-label {
		font-size: var(--font-size-xs);
		color: var(--color-gray-400);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	
	.footer-divider {
		height: 1px;
		background: var(--color-gray-800);
		margin: var(--spacing-6) 0;
	}
	
	.footer-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-4);
	}
	
	.copyright p {
		color: var(--color-gray-500);
		font-size: var(--font-size-sm);
		margin: 0;
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
	}
	
	.copyright :global(.heart-icon) {
		color: #ef4444;
		animation: heartbeat 2s ease-in-out infinite;
	}
	
	.footer-note p {
		color: var(--color-gray-400);
		font-size: var(--font-size-sm);
		margin: 0;
		text-align: right;
	}
	
	.footer-note strong {
		color: var(--color-primary-light);
	}
	
	@keyframes heartbeat {
		0%, 50%, 100% {
			transform: scale(1);
		}
		25%, 75% {
			transform: scale(1.1);
		}
	}
	
	@media (max-width: 768px) {
		.footer {
			padding: var(--spacing-12) 0 var(--spacing-6);
		}
		
		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
		
		.footer-links {
			grid-template-columns: 1fr;
			gap: var(--spacing-6);
		}
		
		.footer-stats {
			grid-template-columns: 1fr;
			gap: var(--spacing-3);
		}
		
		.footer-meta {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-3);
		}
		
		.footer-note p {
			text-align: center;
		}
		
		.social-links {
			justify-content: center;
		}
	}
	
	@media (max-width: 480px) {
		.footer-stats {
			grid-template-columns: 1fr;
		}
		
		.stat-item {
			padding: var(--spacing-3);
		}
		
		.stat-number {
			font-size: var(--font-size-lg);
		}
	}
</style>