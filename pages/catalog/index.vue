<template lang="pug">
    main.main
        section.section
            .container
                .row
                    .col-lg-3.p-15
                        app-catalog-categories
                    .col-lg-9.p-15
</template>

<script>
import AppCatalogCategories from '~/components/pageComponents/catalog/AppCatalogCategories';
export default {
	components: {
		AppCatalogCategories
	}
}
</script>

<style lang="scss">
</style>
