<template lang="pug">
	#app
		app-header
		transition(name="page" @after-enter="afterPageEnter")
			nuxt
		app-footer
</template>

<script>
import AppHeader from "~/components/global/header/AppHeader";
import AppFooter from '~/components/global/footer/AppFooter';
export default {
	components: {
		AppHeader,
		AppFooter
	},
	methods: {
		afterPageEnter() {
			this.$store.commit("closeMenu");
		}
	},
};
</script>


<style lang="scss"></style>

