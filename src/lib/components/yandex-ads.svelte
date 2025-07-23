<script module>
	import { onMount } from 'svelte';

	onMount(() => {
		window.yaContextCb.push(() => {
			Ya.Context.AdvManager.render({
				blockId: 'R-A-16381240-1',
				type: 'floorAd',
				platform: 'desktop'
			});
		});
	});
</script>
