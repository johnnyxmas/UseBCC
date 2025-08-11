<script>
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<ThemeToggle />

<main>
	<slot />
</main>

<style>
	main {
		min-height: 100vh;
		width: 100%;
	}
</style>