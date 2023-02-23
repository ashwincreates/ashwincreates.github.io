<h1 class="capitalize py-8 text-5xl text-zinc-50 font-['Unbounded']">Contact</h1>
<div class="flex text-zinc-50 gap-8 flex-col lg:flex-row">
	<!-- description -->
	<section class="flex-grow text-3xl text-zinc-400 py-4 font-['Poppins']">
		"Contact me here, contact me there"
	</section>
	<!-- experience -->
	<section class="flex-grow flex flex-col">
		<div class="field">
			<input id="email" class=" w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4" />
			<label for="email">Email</label>
		</div>
		<div class="field">
			<textarea
				id="message"
				class="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 resize-none min-h-[300px]"
			/>
			<label for="message">Message</label>
		</div>
		<div>
			<button class="button">Pin me up!</button>
		</div>
	</section>
</div>

<style lang="postcss">
	.button {
		@apply px-10 py-3 bg-zinc-600 rounded-lg font-['Poppins'] mr-4 text-base hover:bg-zinc-800 border border-transparent hover:border-zinc-600 ease-in duration-75;
	}

	.field {
		@apply relative mb-12 overflow-hidden;
	}

	.field > input,
	.field > textarea {
		@apply outline-none focus:bg-zinc-800 border border-transparent focus:border-zinc-600 ease-in duration-75;
	}

	.field:focus-within > label {
		@apply -translate-x-[150%] ease-in duration-100;
	}

	.field > label {
		@apply absolute left-4 top-4 font-['Poppins'] text-zinc-500 translate-x-0 ease-in duration-100;
	}
</style>
