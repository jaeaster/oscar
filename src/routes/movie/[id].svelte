<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch, session, stuff }) => {
		const movie: Movie = await moviesApi.get(params.id);
		return {
			props: {
				movie
			}
		};
	};
</script>

<script lang="ts">
	import { dispatch } from '$lib/tauri';
	import moviesApi from '$lib/api/movies';
	import type { Movie } from '$lib/api/movies';
	import Player from '$lib/components/Player.svelte';

	export let movie: Movie;

	const startStream = () => {
		dispatch('start-stream', {
			videoId: movie.id
		});
	};
</script>

<div class="pt-10 px-8 flex space-x-4">
	<img
		src={movie.images.poster}
		alt={movie.title}
		class="w-1/3 object-cover shadow-inner rounded-md"
	/>
	<div class="w-2/3 flex flex-col space-y-3">
		<h1 class="text-3xl text-white">{movie.title}</h1>
		<span class="text-xs text-white">
			{movie.year}
			•
			{movie.runtime} min •
			{movie.genres.join(' / ')}
			•
			{movie.certification}
			•
			{movie.rating.percentage / 10} / 10
		</span>
		<p class="mr-10 text-sm text-white">{movie.synopsis}</p>
		<Player videoId={movie.trailer.split('=')[1]} />
		<button
			class="h-[40px] w-[150px] rounded-sm text-white bg-blue-900 transition hover:bg-blue-700"
			on:click={startStream}>Watch Now</button
		>
	</div>
</div>
