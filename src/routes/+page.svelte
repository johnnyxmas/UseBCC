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
	<title>Use BCC - Protect Privacy in Group Emails</title>
	<meta name="description" content="Learn why using BCC instead of CC protects privacy in group emails. Discover the benefits of blind carbon copy for secure email communication." />
</svelte:head>

<Hero />
<ProblemSection />
<SolutionSection />
<ComparisonComponent />
<UsageGuide />
<FAQ />
<CallToAction />
<Footer />