<template lang="pug">
    div
        .catalog-cat-toggle(:class="{'catalog-cat-toggle--active': catIsActive}" @click="toggleCat")
            span.catalog-cat-toggle__text Категории
            i.fal.fa-plus.catalog-cat-toggle__icon
        .catalog__categories
            ul.catalog__categories-list
                li.catalog__categories-item(v-for="category in categories" :key="category.id")
                    app-catalog-category-item(:categoryID="category.id")
</template>

<script>
import $ from 'jquery';
import AppCatalogCategoryItem from '~/components/pageComponents/catalog/AppCatalogCategoryItem';
export default {
    components: {
        AppCatalogCategoryItem
    },
    data () {
        return {
            catIsActive: false
        }
    },
    computed: {
        categories() {
            return this.$store.state.catalog.categories.categories.filter(category => !category.parentCategory);
        }
    },
    methods: {
        toggleCat(e) {
            this.catIsActive = !this.catIsActive;
            $(e.currentTarget).siblings('.catalog__categories').slideToggle(200);
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog__categories {
    &-item {
        margin-bottom: 15px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 767px) {
        display: none;
        background: #f7f7f7;
        padding: 15px;
    }
}

.catalog-cat-toggle {
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: $c-green;
    border: 1px solid #f2f2f2;
    cursor: pointer;
    &__icon {
        transition: .15s ease;
    }
    &--active {
        .catalog-cat-toggle__icon {
            transform: rotate(45deg);
        }
    }
    @media screen and (max-width: 767px) {
        display: flex;
    }
}
</style>
