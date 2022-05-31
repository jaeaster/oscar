<script lang="ts">
	import { dispatch } from '$lib/tauri';

	let greeting = 'Hello, World!';
	let name = 'Jonathan';

	async function updateGreeting() {
		greeting = await dispatch<string>('greet', { name });
	}
</script>

<div class="p-6 mx-auto max-w-sm space-y-4 flex flex-col justify-center items-center">
	<h1 class="text-3xl text-center text-red-400">{greeting}</h1>
	<input
		type="text"
		class="form-input px-4 py-3 rounded-full"
		bind:value={name}
		on:input={updateGreeting}
	/>
</div>
