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
	mounted() {
        this.$store.commit(
            "setProductsInCart",
            this.$cookies.get("products") || {}
        );
    }
};
</script>


<style lang="scss"></style>

