<template lang="pug">
header.header
	.header__top
		.header__top-content.container
			app-header-burger
			app-header-contacts
			app-header-logo
			app-header-cart
	.header__bottom
		.header__bottom-content.container
			app-header-main-nav
</template>
<script>
import AppHeaderContacts from "~/components/global/header/AppHeaderContacts";
import AppHeaderLogo from "~/components/global/header/AppHeaderLogo";
import AppHeaderCart from "~/components/global/header/AppHeaderCart";
import AppHeaderMainNav from '~/components/global/header/AppHeaderMainNav';
import AppHeaderBurger from '~/components/global/header/AppHeaderBurger';
export default {
	components: {
		AppHeaderContacts,
		AppHeaderLogo,
		AppHeaderCart,
		AppHeaderMainNav,
		AppHeaderBurger
	}
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.header {
	position: absolute;
	z-index: 99;
	width: 100%;
	top: 0;
	left: 0;
	background: #fff;
	box-shadow: 0px 3px 7px rgba(#000, 0.07);
	min-width: 320px;
	&__top {
		padding: 10px 0;
		&-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	&__bottom {
		border-top: 1px solid #e5e5e5;
	}

	@media screen and (max-width: 991px) {
		position: fixed;
		&__bottom {
			display: none;
		}
	}
}
</style>
