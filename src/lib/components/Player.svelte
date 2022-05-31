<script lang="ts">
	import { Player, Youtube, DefaultUi, usePlayerStore } from '@vime/svelte';
	type Player = InstanceType<typeof Player>;

	export let videoId: string;

	let player: Player;

	const { paused } = usePlayerStore(() => player);

	const onPlaybackReady = async () => {
		// ...
	};
</script>

<Player on:vmPlaybackReady={onPlaybackReady} bind:this={player}>
	<Youtube {videoId} showFullscreenControl={true} />
	<DefaultUi />
</Player>
