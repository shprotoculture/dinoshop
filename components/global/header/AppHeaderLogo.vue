<template lang="pug">
	.header-logo
		nuxt-link.header-logo__link(to="/" title="Dinoshop")
			img.header-logo__img(src="/img/logo.png" alt="Магазин Dinoshop")
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-logo {
	max-width: 128px;
	flex: 0 0 128px;
	transition: 0.15s ease;
	&__link {
		display: inline-block;
	}

	@media screen and (max-width: 575px) {
		max-width: 96px;
		flex: 0 0 96px;
	}
}
</style>
