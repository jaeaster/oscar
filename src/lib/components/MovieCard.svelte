<script lang="ts">
	export let id: string;
	export let title: string;
	export let imgSrc: string;
	export let year: string;
</script>

<div class="p-3 flex flex-col justify-start">
	<a href={`/movie/${id}`}>
		<img
			src={imgSrc}
			alt={title}
			class="w-full h-48 object-cover shadow-inner rounded-md hover:cursor-pointer transition duration-300 border-2 border-transparent hover:border-blue-400 hover:opacity-50 "
		/>
	</a>
	<p class="text-white text-sm truncate ...">{title}</p>
	<p class="text-gray-500 text-xs">{year}</p>
</div>
