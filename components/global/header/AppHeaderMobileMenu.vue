<template lang="pug">
    .mobile-menu(:class="{'mobile-menu--active': menuIsActive}")
        .mobile-menu__inner
            .container
                ul.mobile-menu__list
                    li.mobile-menu__item(v-for="(link, index) in navLinks" :key="index")
                        nuxt-link.mobile-menu__link(:to="link.to" exact) {{link.title}}
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			navLinks: state => state.header.navLinks,
			menuIsActive: state => state.header.menuIsActive
		})
	}
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.mobile-menu {
	position: fixed;
	z-index: 50;
	background: #fff;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
	transform: translate3d(-100%, 0, 0);
	min-width: 320px;
	display: none;
	&__inner {
		position: absolute;
		top: 84px;
		padding-top: 30px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
	&__link {
		display: block;
		padding: 15px 0;
		font-size: 14px;
		font-weight: 500;
		text-transform: uppercase;
		border-bottom: 1px solid #f2f2f2;
		&.nuxt-link-active {
			color: $c-green;
		}
	}
	&--active {
		transform: translate3d(0, 0, 0);
	}

	@media screen and (max-width: 991px) {
		display: block;
	}
	@media screen and (max-width: 575px) {
		&__inner {
			top: 70px;
		}
	}
}
</style>