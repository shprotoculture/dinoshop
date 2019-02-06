<template lang="pug">
    .catalog
        .row
            .col-12.p-15
                app-catalog-search
            .col-md-3.p-15
                app-catalog-sidebar
            .col-md-9.p-15
                app-catalog-list
            

    
</template>

<script>
import AppCatalogSearch from "~/components/pageComponents/catalog/AppCatalogSearch";
import AppCatalogSidebar from "~/components/pageComponents/catalog/AppCatalogSidebar";
import AppCatalogList from "~/components/pageComponents/catalog/AppCatalogList";
export default {
    components: {
        AppCatalogSearch,
        AppCatalogSidebar,
        AppCatalogList
    }
};
</script>

<style lang="scss">
</style>
