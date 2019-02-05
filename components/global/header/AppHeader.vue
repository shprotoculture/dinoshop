<template lang="pug">
	.nav-wrap
		app-header-content
		app-header-mobile-menu
		.placeholder
</template>

<script>
import AppHeaderContent from "~/components/global/header/AppHeaderContent";
import AppHeaderMobileMenu from '~/components/global/header/AppHeaderMobileMenu';
export default {
	components: {
		AppHeaderContent,
		AppHeaderMobileMenu
	}
};
</script>

<style lang="scss">
.placeholder {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 135px;

	@media screen and (max-width: 991px) {
		height: 84px;
	}
	@media screen and (max-width: 575px) {
		height: 70px;
	}
}
</style>
