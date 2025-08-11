<script>
	import { HelpCircle, ChevronDown, ChevronUp, Search, ExternalLink } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	
	let searchTerm = '';
	let openStates = {};
	
	const faqItems = [
		{
			id: 'reply-all-security',
			category: 'Email Security',
			question: 'How does BCC enhance reply-all email security?',
			answer: 'BCC provides crucial email security against reply-all disasters. Since BCC recipients can\'t see or reply to other hidden recipients, it prevents accidental exposure of email addresses and confidential responses. This email privacy feature is essential for preventing data leaks, maintaining professional communications, and ensuring anti-spam protection in group emails.'
		},
		{
			id: 'cc-vs-bcc-difference',
			category: 'CC vs BCC',
			question: 'What\'s the key difference between CC and BCC in email?',
			answer: 'CC (Carbon Copy) and BCC (Blind Carbon Copy) serve different purposes in email communication. CC makes all recipient addresses visible to everyone, suitable for transparent group discussions. BCC hides recipient addresses, ideal for email privacy and security. Use CC when recipients need to know who else received the email; use BCC for newsletters, announcements, and protecting email privacy.'
		},
		{
			id: 'recipients-know',
			category: 'Privacy',
			question: 'Will recipients know I used BCC?',
			answer: 'No, recipients cannot tell if you used BCC. They only see their own email address in the "To" field and cannot see who else received the email. This is the main privacy benefit of BCC for email security and anti-spam protection.'
		},
		{
			id: 'when-use-bcc',
			category: 'Usage',
			question: 'When should I use BCC instead of CC?',
			answer: 'Use BCC when email privacy and security are priorities. Perfect for newsletters, group announcements, client communications, and any mass email where anti-spam protection is important. BCC prevents email harvesting and protects recipient privacy. Use CC only when transparency about all recipients is necessary for the conversation and email security isn\'t a concern.'
		},
		{
			id: 'reply-all-bcc',
			category: 'Technical',
			question: 'Can BCC recipients reply to all?',
			answer: 'No, BCC recipients cannot reply to all other BCC recipients because they don\'t know who else received the email. They can only reply to the sender and any addresses in the "To" or "CC" fields that are visible to them.'
		},
		{
			id: 'all-email-clients',
			category: 'Technical',
			question: 'Does BCC work with all email clients?',
			answer: 'Yes, BCC is a standard email feature supported by all major email clients including Gmail, Outlook, Apple Mail, Yahoo Mail, and mobile email apps. The method to access BCC may vary slightly between clients.'
		},
		{
			id: 'downsides-bcc',
			category: 'Usage',
			question: 'Can BCC recipients collaborate?',
			answer: 'The main downside is that BCC recipients cannot collaborate or reply to the group. If you need group discussion, use CC or create a mailing list. Also, some people might feel excluded if they discover they were BCC\'d instead of CC\'d.'
		},
		{
			id: 'mix-to-bcc',
			category: 'Usage',
			question: 'Can I use "To," "CC" and "BCC" fields together?',
			answer: 'Yes, you can use these fields in the same email. Put the primary recipient(s) in "To" and/or "CC," and additional recipients who should remain hidden in "BCC". This is common for keeping supervisors informed while protecting other recipients\' privacy.'
		},
		{
			id: 'mobile-bcc',
			category: 'Technical',
			question: 'How do I access BCC on mobile devices?',
			answer: 'Most mobile email apps hide BCC by default. Look for a "+" button, arrow, or "Show more fields" option near the recipient area. Some apps have BCC in the compose settings or under a "Fields" menu.'
		},
		{
			id: 'spam-folder-bcc',
			category: 'Anti-Spam',
			question: 'Will using BCC cause emails to go to spam folders?',
			answer: 'Proper BCC usage actually helps with anti-spam compliance and shouldn\'t trigger spam filters. However, sending to many BCC recipients without a "To" address might look suspicious. For better email security and deliverability, add your own address to the "To" field when using BCC for groups. This maintains email privacy while following anti-spam best practices.'
		}
	];
	
	function toggleItem(id) {
		openStates[id] = !openStates[id];
		openStates = openStates; // Trigger reactivity
	}
	
	$: filteredItems = faqItems.filter(item => 
		item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
		item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
		item.category.toLowerCase().includes(searchTerm.toLowerCase())
	);
	
	$: categories = [...new Set(faqItems.map(item => item.category))];
</script>

<section id="faq" class="section bg-gray-50">
	<div class="container">
		<div class="section-header text-center fade-in">
			<div class="section-icon">
				<HelpCircle size={48} />
			</div>
			<h2>Frequently Asked Questions</h2>
			<p class="section-subtitle">
				Common questions about email privacy and BCC usage
			</p>
		</div>
		
		<div class="faq-container">
			<div class="faq-search fade-in">
				<div class="search-box">
					<Search size={20} />
					<input 
						type="text" 
						placeholder="Search FAQ..." 
						bind:value={searchTerm}
						class="search-input"
					/>
				</div>
			</div>
			
			<div class="faq-categories fade-in">
				<div class="category-filters">
					<span class="filter-label">Filter by category:</span>
					{#each categories as category}
						<button 
							class="category-btn"
							on:click={() => searchTerm = searchTerm === category ? '' : category}
							class:active={searchTerm === category}
						>
							{category}
						</button>
					{/each}
					{#if searchTerm}
						<button 
							class="clear-btn"
							on:click={() => searchTerm = ''}
						>
							Clear
						</button>
					{/if}
				</div>
			</div>
			
			<div class="faq-list slide-in-left">
				{#if filteredItems.length === 0}
					<div class="no-results">
						<p>No questions found matching "{searchTerm}". Try a different search term.</p>
					</div>
				{:else}
					{#each filteredItems as item (item.id)}
						<div class="faq-item">
							<button 
								class="faq-question"
								on:click={() => toggleItem(item.id)}
								aria-expanded={openStates[item.id]}
							>
								<div class="question-content">
									<span class="category-tag">{item.category}</span>
									<span class="question-text">{item.question}</span>
								</div>
								<div class="question-icon">
									{#if openStates[item.id]}
										<ChevronUp size={20} />
									{:else}
										<ChevronDown size={20} />
									{/if}
								</div>
							</button>
							
							{#if openStates[item.id]}
								<div class="faq-answer" transition:slide={{ duration: 300 }}>
									<p>{item.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
			
			<div class="faq-cta slide-in-right">
				<div class="cta-card">
					<h3>Still have questions?</h3>
					<p>Email privacy is important, and we're here to help you understand how to protect it.</p>
					
					<div class="cta-actions">
						<a href="#usage" class="btn btn-primary">
							Learn How to Use BCC
						</a>
						<a href="#comparison" class="btn btn-outline">
							See BCC vs CC Comparison
						</a>
					</div>
					
					<div class="additional-resources">
						<h4>Additional Resources</h4>
						<ul class="resource-list">
							<li>
								<a href="https://support.google.com/mail/answer/6584" target="_blank" rel="noopener noreferrer">
									Gmail BCC Documentation
									<ExternalLink size={14} />
								</a>
							</li>
							<li>
								<a href="https://support.microsoft.com/en-us/office/add-and-use-bcc-in-email-messages-7c4e8e9b-7b8a-4b0a-8b0a-8b0a8b0a8b0a" target="_blank" rel="noopener noreferrer">
									Outlook BCC Guide
									<ExternalLink size={14} />
								</a>
							</li>
							<li>
								<a href="https://support.apple.com/guide/mail/send-emails-mlhl2e7c5a4d/mac" target="_blank" rel="noopener noreferrer">
									Apple Mail Help
									<ExternalLink size={14} />
								</a>
							</li>
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
	
	.section-icon {
		color: var(--color-accent);
		margin-bottom: var(--spacing-4);
		display: inline-block;
	}
	
	.section-subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-gray-600);
		max-width: 600px;
		margin: 0 auto;
	}
	
	.faq-container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--spacing-12);
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.faq-search {
		grid-column: 1 / -1;
		margin-bottom: var(--spacing-6);
	}
	
	.search-box {
		position: relative;
		max-width: 500px;
		margin: 0 auto;
	}
	
	.search-box :global(svg) {
		position: absolute;
		left: var(--spacing-4);
		top: 50%;
		transform: translateY(-50%);
		color: var(--color-gray-400);
	}
	
	.search-input {
		width: 100%;
		padding: var(--spacing-4) var(--spacing-4) var(--spacing-4) var(--spacing-12);
		border: 2px solid var(--color-gray-200);
		border-radius: var(--radius-lg);
		font-size: var(--font-size-base);
		background: var(--color-white);
		transition: border-color var(--transition-fast);
	}
	
	.search-input:focus {
		outline: none;
		border-color: var(--color-primary);
	}
	
	.faq-categories {
		grid-column: 1 / -1;
		margin-bottom: var(--spacing-8);
	}
	
	.category-filters {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-3);
		align-items: center;
		justify-content: center;
	}
	
	.filter-label {
		color: var(--color-gray-600);
		font-weight: 600;
		margin-right: var(--spacing-2);
	}
	
	.category-btn {
		padding: var(--spacing-2) var(--spacing-4);
		background: var(--color-white);
		border: 2px solid var(--color-gray-200);
		border-radius: var(--radius-full);
		color: var(--color-gray-600);
		font-size: var(--font-size-sm);
		font-weight: 600;
		cursor: pointer;
		transition: all var(--transition-fast);
	}
	
	.category-btn:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}
	
	.category-btn.active {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-white);
	}
	
	.clear-btn {
		padding: var(--spacing-2) var(--spacing-4);
		background: var(--color-accent);
		border: none;
		border-radius: var(--radius-full);
		color: var(--color-white);
		font-size: var(--font-size-sm);
		font-weight: 600;
		cursor: pointer;
		transition: all var(--transition-fast);
	}
	
	.clear-btn:hover {
		background: var(--color-accent-light);
	}
	
	.faq-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}
	
	.no-results {
		text-align: center;
		padding: var(--spacing-8);
		color: var(--color-gray-600);
		background: var(--color-white);
		border-radius: var(--radius-xl);
	}
	
	.faq-item {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-md);
		overflow: hidden;
		transition: box-shadow var(--transition-fast);
	}
	
	.faq-item:hover {
		box-shadow: var(--shadow-lg);
	}
	
	.faq-question {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-6);
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background-color var(--transition-fast);
	}
	
	.faq-question:hover {
		background: var(--color-gray-50);
	}
	
	.question-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-2);
		flex: 1;
	}
	
	.category-tag {
		display: inline-block;
		padding: var(--spacing-1) var(--spacing-3);
		background: var(--color-primary);
		color: var(--color-white);
		font-size: var(--font-size-xs);
		font-weight: 600;
		border-radius: var(--radius-full);
		width: fit-content;
	}
	
	.question-text {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-gray-900);
		line-height: 1.4;
	}
	
	.question-icon {
		color: var(--color-gray-400);
		transition: color var(--transition-fast);
	}
	
	.faq-question:hover .question-icon {
		color: var(--color-primary);
	}
	
	.faq-answer {
		padding: 0 var(--spacing-6) var(--spacing-6);
		overflow: hidden;
		display: block;
	}
	
	.faq-answer p {
		color: var(--color-gray-600);
		line-height: 1.6;
		margin-bottom: 0;
	}
	
	.faq-cta {
		position: sticky;
		top: var(--spacing-8);
		height: fit-content;
	}
	
	.cta-card {
		background: var(--color-white);
		padding: var(--spacing-8);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		text-align: center;
	}
	
	.cta-card h3 {
		color: var(--color-gray-900);
		margin-bottom: var(--spacing-4);
	}
	
	.cta-card p {
		color: var(--color-gray-600);
		margin-bottom: var(--spacing-6);
	}
	
	.cta-actions {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-8);
	}
	
	.additional-resources {
		text-align: left;
		padding-top: var(--spacing-6);
		border-top: 1px solid var(--color-gray-200);
	}
	
	.additional-resources h4 {
		color: var(--color-gray-800);
		margin-bottom: var(--spacing-4);
		font-size: var(--font-size-base);
	}
	
	.resource-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.resource-list li {
		margin-bottom: var(--spacing-2);
	}
	
	.resource-list a {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-primary);
		font-size: var(--font-size-sm);
		text-decoration: none;
		transition: color var(--transition-fast);
	}
	
	.resource-list a:hover {
		color: var(--color-primary-light);
	}
	
	
	@media (max-width: 768px) {
		.faq-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-8);
		}
		
		.category-filters {
			justify-content: flex-start;
		}
		
		.filter-label {
			width: 100%;
			margin-bottom: var(--spacing-2);
		}
		
		.question-content {
			gap: var(--spacing-1);
		}
		
		.question-text {
			font-size: var(--font-size-base);
		}
		
		.cta-actions {
			gap: var(--spacing-2);
		}
		
		.faq-cta {
			position: static;
		}
	}
</style>