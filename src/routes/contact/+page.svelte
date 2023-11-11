<script lang="ts">
	import * as yup from 'yup';

	const schema = yup.object().shape({
		email: yup.string().required('Please provide a email').email('Please provide a valid email'),
		content: yup.string().required('Please provide a message')
	});

	let field: { email: HTMLInputElement | null } = { email: null };

	let email = '';
	let content = '';

	async function onSubmit() {
		try {
			await schema.validate({ email, content });
		} catch (err: any) {
			let errors = extractErrors(err);
			console.log(errors);
		}
	}

	function extractErrors(err: yup.ValidationError) {
        console.log(err)
		return err.inner
			.map((e: yup.ValidationError) => ({ [e.path as string]: e.message }))
	}
</script>

<h1 class="capitalize py-8 text-5xl text-zinc-50 font-['Unbounded']">Contact</h1>
<div class="flex text-zinc-50 gap-8 flex-col lg:flex-row">
	<!-- description -->
	<section class="flex-grow text-3xl text-zinc-400 py-4 font-['Poppins']">
		"Contact me here, contact me there"
	</section>
	<!-- experience -->
	<section class="flex-grow flex flex-col">
		<div class="field">
			<input
				bind:this={field.email}
				bind:value={email}
				id="email"
				class=" w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4"
			/>
			<label class:hidden={email != ''} for="email">Email</label>
		</div>
		<div class="field">
			<textarea
				bind:value={content}
				id="message"
				class="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 resize-none min-h-[300px]"
			/>
			<label class:hidden={content != ''} for="message">Message</label>
		</div>
		<div class="flex gap-4 md:flex-row flex-col mb-10">
			<button on:click={() => onSubmit()} class="button">Pin me up!</button>
			<a href="mailto:ashwin200113@gmail.com" class="button">Email</a>
		</div>
	</section>
</div>

<style lang="postcss">
	.button {
		@apply px-10 py-3 bg-zinc-600 rounded-lg min-w-[200px] justify-center flex font-['Poppins'] text-base hover:bg-zinc-800 border border-transparent hover:border-zinc-600 ease-in duration-75;
	}

	.field {
		@apply relative flex flex-col mb-12 overflow-hidden z-20;
	}

	.error {
		@apply font-['Poppins'];
	}

	.tooltip {
		@apply ease-in duration-100 absolute right-2 p-4;
	}

	.field > input,
	.field > textarea {
		@apply outline-none focus:bg-zinc-800 border font-['Poppins'] border-transparent focus:border-zinc-600 ease-in duration-75;
	}

	.field:focus-within > label {
		@apply -translate-x-[150%] ease-in duration-100;
	}

	.field > label {
		@apply absolute left-4 top-4 font-['Poppins'] text-zinc-500 translate-x-0 ease-in duration-100;
	}
</style>
