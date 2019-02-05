<template lang="pug">
    button.burger(type="button" @click.prevent="toggleMenu" :class="{'burger--active': menuIsActive}")
        span.burger__line.burger__line--f
        span.burger__line.burger__line--s
        span.burger__line.burger__line--t
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState({
			menuIsActive: state => state.header.menuIsActive
		}),
	},
	methods: {
		...mapMutations({
			toggle: 'toggleMenu',
			close: 'closeMenu'
		}),
		toggleMenu() {
			this.toggle();
		}
	}
}
</script>

<style lang="scss">
.burger {
	width: 50px;
	height: 50px;
	border: none;
	background: none;
	position: relative;
	margin-left: -15px;
	display: none;
	&__line {
		display: block;
		position: absolute;
		width: 20px;
		height: 2px;
		background: #000;
		left: 15px;
		top: 50%;
		transition: 0.15s 0.15s ease margin, 0.15s ease transform;
		&--f {
			margin-top: -7px;
		}
		&--s {
			margin-top: -1px;
		}
		&--t {
			margin-top: 5px;
		}
	}
	&--active {
		.burger {
			&__line {
				transition: 0.15s ease margin, 0.15s 0.15s ease transform;
				&--f,
				&--s {
					margin-top: -1px;
					transform: rotate(-45deg);
				}
				&--t {
					margin-top: -1px;
					transform: rotate(45deg);
				}
			}
		}
	}

	@media screen and (max-width: 991px) {
		display: block;
	}
}
</style>
