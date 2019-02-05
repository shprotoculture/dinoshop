<template lang="pug">
    .main-nav
        ul.main-nav__list
            li.main-nav__item(
                v-for="(link, index) in navLinks" 
                :key="index" 
                :style="{'max-width': (100 / navLinks.length) + '%', flex: '0 0 ' + (100 / navLinks.length) + '%'}")
                nuxt-link.main-nav__link(:to="link.to" exact) {{link.title}}
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			navLinks: state => state.header.navLinks
		})
	}
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.main-nav {
	&__list {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	&__link {
		display: block;
		text-align: center;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-transform: uppercase;
		transition: 0.25s ease;
		font-size: 12px;
		font-weight: 500;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: 3px;
			background: $c-green;
			bottom: 0;
			left: 0;
			transition: 0.25s ease;
			transform: scaleX(0);
		}
		&.nuxt-link-active {
			color: $c-green;
			&:after {
				transform: scaleX(1);
			}
		}
	}
}
</style>
