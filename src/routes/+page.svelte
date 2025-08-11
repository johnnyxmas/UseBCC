<script>
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProblemSection from '$lib/components/ProblemSection.svelte';
	import SolutionSection from '$lib/components/SolutionSection.svelte';
	import ComparisonComponent from '$lib/components/ComparisonComponent.svelte';
	import UsageGuide from '$lib/components/UsageGuide.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// Intersection Observer for scroll animations
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, observerOptions);

		// Observe all elements with animation classes
		const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
		animatedElements.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>BCC Email Privacy Guide 2024 - Anti-Spam & Security Settings | UseBCC</title>
	<meta name="description" content="Master email security with BCC settings. Comprehensive guide on email privacy, anti-spam protection, and the difference between BCC vs CC. Protect recipients from data breaches and email harvesting." />
	<meta name="keywords" content="email security, email privacy, anti-spam, BCC, CC, email settings, blind carbon copy, spam protection, email best practices, GDPR compliance" />
	
	<!-- Article metadata for SEO -->
	<meta property="article:published_time" content="2024-01-01T00:00:00Z" />
	<meta property="article:modified_time" content={new Date().toISOString()} />
	<meta property="article:section" content="Email Security" />
	<meta property="article:tag" content="Email Privacy" />
	<meta property="article:tag" content="Anti-Spam" />
	<meta property="article:tag" content="BCC" />
	<meta property="article:tag" content="Email Settings" />
	
	<!-- Additional Schema.org breadcrumb -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://usebcc.com/"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Email Privacy Guide",
				"item": "https://usebcc.com/#problem"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": "BCC vs CC Comparison",
				"item": "https://usebcc.com/#comparison"
			},
			{
				"@type": "ListItem",
				"position": 4,
				"name": "Email Settings Guide",
				"item": "https://usebcc.com/#usage"
			}
		]
	}
	</script>
</svelte:head>

<div id="hero">
	<Hero />
</div>
<div id="problem">
	<ProblemSection />
</div>
<div id="solution">
	<SolutionSection />
</div>
<div id="comparison">
	<ComparisonComponent />
</div>
<div id="usage">
	<UsageGuide />
</div>
<div id="faq">
	<FAQ />
</div>
<CallToAction />
<Footer />