<template lang="pug">
    .video
        a.video__link(data-fancybox :href="content.videoSrc")
            .video__overlay
                img(:src="content.overlay")
</template>

<script>
export default {
	props: ['content']
}
</script>

<style lang="scss">
.video {
	&__link {
		display: block;
	}
	&__overlay {
		position: relative;
		&:after {
			content: "";
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(#000, 0.5);
			transition: 0.45s ease;
			opacity: 0;
		}
		&:before {
			content: "";
			position: absolute;
			width: 60px;
			height: 60px;
			display: block;
			background: url(/img/play-icon.svg) no-repeat center/cover;
			z-index: 2;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: 0.45s ease;
			opacity: 0;
		}
		&:hover {
			&:before,
			&:after {
				opacity: 1;
			}
		}
	}
}
</style>
