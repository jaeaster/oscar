<script lang="ts">
	import { onMount } from 'svelte';
	import moviesApi from '$lib/api/movies';
	import type { Movie } from '$lib/api/movies';

	import MovieCard from '$lib/components/MovieCard.svelte';

	let movies: Movie[] = [];
	onMount(async () => {
		movies = await moviesApi.index();
		console.log(movies);
	});
</script>

<div class="p-1 grid grid-cols-6">
	{#each movies as movie}
		<MovieCard id={movie.id} title={movie.title} imgSrc={movie.images.poster} year={movie.year} />
	{/each}
</div>
