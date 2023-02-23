<h1 class="capitalize py-8 text-5xl text-zinc-50 font-['Unbounded']">About</h1>
<div class="flex text-zinc-50 gap-8 flex-col lg:flex-row">
	<!-- description -->
	<section class="flex-grow text-3xl text-zinc-400 py-4 font-['Poppins']">
		"I m ashwin heheh"
	</section>
	<!-- experience -->
	<section class="flex-grow">
		<ul>
			<li class="item">
				<div>
					SDE at Enquero Global - A Genpact Company
					<div class="period">June 2023 - Current</div>
					<ol>
						<li class="sub-item">Did blablabla blabla</li>
						<li class="sub-item">Did blablabla blabla</li>
					</ol>
				</div>
			</li>
			<li class="item">
				<div>
					Intern at Enquero Global - A Genpact Company
					<div class="period">March - June 2023</div>
					<ul>
						<li class="sub-item">Did blablabla blabla</li>
						<li class="sub-item">Did blablabla blabla</li>
					</ul>
				</div>
			</li>
			<li class="item">
				<div>
					Shri Ram Institute of Technology, Jabalpur
					<div class="period">B.Tech, Computer Science</div>
					<div class="period">2019 - 2023</div>
				</div>
			</li>
		</ul>
	</section>
</div>

<style lang="postcss">
	.item {
		@apply py-3 text-lg font-['Unbounded'] flex relative;
	}

	.sub-item {
		@apply py-1 text-base text-zinc-400 font-['Poppins'] flex items-center relative;
	}

	.sub-item::before {
		content: '';
		@apply h-[6px] w-[6px] bg-zinc-600 rotate-45 mr-2 skew-x-12;
	}

	.item:before {
		content: '';
		@apply rounded-full max-h-[12px] min-h-[12px] max-w-[12px] min-w-[12px] bg-zinc-400 block mr-4 mt-[12px];
	}

	.item:nth-child(-n + 2):after {
		content: '';
		@apply h-[100%] w-[2px] bg-zinc-400 absolute left-[5px] top-[24px];
	}

	.period {
		@apply text-sm font-['Poppins'] text-zinc-400;
	}
</style>
