<script>
	import Background from '$lib/components/background.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main class="ml-[64px]">
	<slot />
</main>

<style lang="postcss">
	main {
        @apply md:px-10 md:pt-10 px-6 pt-6
	}
</style>
