<template lang="pug">
    .catalog__sidebar
        .catalog__sidebar-block
            .catalog__sidebar-block-title Категории
            app-catalog-categories
</template>

<script>
import AppCatalogCategories from "~/components/pageComponents/catalog/AppCatalogCategories";
export default {
    components: {
        AppCatalogCategories
    }
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog__sidebar {
    &-block {
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
        &-title {
            font-size: 18px;
            font-weight: 500;
            color: $color-main;
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 767px) {
        &-block {
            &-title {
                display: none;
            }
        }
    }
}
</style>
