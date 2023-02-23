<script lang="ts">
	import ProjectCard from '$lib/components/project_card.svelte';

	export let data: any;
</script>

<h1 class="capitalize py-8 text-5xl text-zinc-50 font-['Unbounded']">Projects</h1>
{#each data.repos as repo}
	<ProjectCard {repo} />
{/each}
