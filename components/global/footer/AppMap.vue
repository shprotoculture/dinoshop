<template>
	<yandex-map
		:coords="[55.772153, 37.435232]"
		zoom="19"
		:controls="['trafficControl']"
		:placemarks="placemarks"
		map-type="map"
	>
		<ymap-marker marker-id="1" marker-type="placemark" :coords="[55.772153, 37.435232]"></ymap-marker>
	</yandex-map>
</template>

<script>
export default {
	data() {
		return {
			placemarks: [
				{
					coords: [55.772153, 37.435232],
					properties: {}, // define properties here
					options: {}, // define options here
					clusterName: "1",
					balloonTemplate: '<div>"Your custom template"</div>'
				}
			]
		}
	}
}
</script>

<style lang="scss">
.ymap-container {
	width: 100%;
	height: 265px;
}
</style>
