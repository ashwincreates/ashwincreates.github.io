<script lang="ts">
	import { onMount } from 'svelte';

	export let repo: any;

	onMount(() => {
		console.log(repo);
	});
</script>

<section
	class="py-5 relative min-h-[400px] flex text-white flex-col-reverse lg:flex-row lg:justify-between gap-4"
>
	<div>
		<span
			class="py-1 px-3 border border-zinc-500 w-max rounded-full align-middle uppercase text-xs text-zinc-200 font-['Poppins']"
			>{repo.title}</span
		>
		<div class="flex py-4 gap-4 align-center">
			{#if repo.homepage}
				<a href={repo.homepage} class="capitalize text-2xl font-['Unbounded'] hover:underline hover:cursor-pointer underline-offset-4">{repo.name}</a>
			{:else}
				<span class="capitalize text-2xl font-['Unbounded']">{repo.name}</span>
			{/if}
			<a href={repo.html_url} target="_blank" rel="noreferrer">
				<i class="devicon-github-original text-lg" />
			</a>
		</div>
		<p class="text-lg font-['Poppins'] text-zinc-400">{repo.description}</p>
		<hr class="absolute bottom-0 border-zinc-800 w-full" />
	</div>
	<img
		class="rounded-lg lg:object-cover lg:w-[700px]"
		src={`${repo.html_url}/blob/main/${repo.thumbnail}?raw=true`}
		alt="project preview"
	/>
</section>
