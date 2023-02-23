<script>
	import Logo from '../../logo.svg';
	import { page } from '$app/stores';
</script>

<nav>
	<div>
		<a class="nav-logo" href="/"><img src={Logo} alt="logo" class="h-[28px] w-[28px]" /></a>
		<a class="nav-item" class:active={$page.url.href.includes('/projects')} href="/projects"
			>Projects</a
		>
		<a class="nav-item" class:active={$page.url.href.includes('/about')} href="/about">About</a>
		<a class="nav-item" class:active={$page.url.href.includes('/contact')} href="/contact"
			>Contact</a
		>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply max-w-[64px] w-full bg-zinc-800 fixed h-full top-0 left-0 border-zinc-700 border-r text-white;
	}

	nav > div {
		@apply relative flex flex-col gap-12 justify-start;
	}

	.nav-item {
		@apply font-['Unbounded'] -rotate-90 uppercase text-xs text-zinc-400 hover:text-zinc-50 ease-in-out;
	}

	.nav-logo {
		@apply h-[64px] w-[64px] flex justify-center items-center
	}

	.nav-item {
		@apply h-[64px] flex justify-center items-center;
	}

	.nav-item.active {
		@apply text-zinc-50;
	}

	.nav-item.active::after {
		content: '';
		@apply w-[10px] h-[10px] bg-zinc-900 absolute bottom-[-5px] rotate-45 border-t-zinc-700 border-l-zinc-700 border-t border-l;
	}
</style>
