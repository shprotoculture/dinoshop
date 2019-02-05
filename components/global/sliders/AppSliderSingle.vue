<template lang="pug">
div(v-swiper:swiperSingle="swiperSingleOpt")
    .swiper-wrapper
        .swiper-slide(v-for="(slide, i) in slides" :key="i")
            .dino-swiper__tile
                a.dino-swiper__tile-link(data-fancybox :href="slide")
                    img(:src="slide")
    .swiper-controls.swiper-controls--center.swiper-controls--green
        .swiper-control.swiper-control--prev
            i.fal.fa-long-arrow-left
        .swiper-control-frac
        .swiper-control.swiper-control--next
            i.fal.fa-long-arrow-right
</template>

<script>
export default {
	props: ['slides'],
	data() {
		return {
			swiperSingleOpt: {
				slidesPerView: 1,
				navigation: {
					nextEl: '.swiper-control--next',
					prevEl: '.swiper-control--prev',
				},
				pagination: {
					el: '.swiper-control-frac',
					type: 'fraction'
				}
			},
		}
	}
}
</script>

<style lang="scss">
</style>
