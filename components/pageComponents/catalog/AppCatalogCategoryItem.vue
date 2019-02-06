<template lang="pug">
    .category-item
        a.category-item__link(
            href="#" 
            @click.prevent="changeCurrentCategory($event, categoryID)" 
            :class="{'category-item__link--active': currentCategory == categoryContain.id || subCategoryActive.length > 0}") {{categoryContain.name}}
        ul.category-item__sublist(v-if="subCategories.length > 0")
            li.category-item__sublist-item(v-for="subCategory in subCategories" :key="subCategory.id")
                a.category-item__sublist-link(
                    href="#" 
                    @click.prevent="changeCurrentCategory($event, subCategory.id)"
                    :class="{'category-item__sublist-link--active': subCategory.id == currentCategory}"
                    ) {{subCategory.name}}
</template>

<script>
import $ from 'jquery';
export default {
    props: ['categoryID'],
    computed: {
        currentCategory() {
            return this.$store.state.catalog.categories.currentCategory;
        },
        categoryContain () {
            return this.$store.state.catalog.categories.categories.filter(category => category.id == this.categoryID)[0];
        },
        subCategories () {
            return this.$store.state.catalog.categories.categories.filter(category => category.parentCategory == this.categoryID);
        },
        subCategoryActive () {
            return this.subCategories.filter((category) => {
                return category.id == this.currentCategory;
            });
        }
    },
    methods: {
        changeCurrentCategory(e, id) {
            this.$store.commit("changeCurrentCategory", id);
            $(e.currentTarget).siblings('.category-item__sublist').slideToggle(200);
            this.$store.commit('resetCurrentPage');
            this.$store.commit('changeCurrentKeyword', '');
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";
.category-item {
    &__link {
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        &--active {
            color: $color-main;
        }
    }
    &__sublist {
        padding-left: 15px;
        border-left: 1px dotted $color-main;
        display: none;
        &-item {
            margin-top: 10px;
        }
        &-link {
            color: #000;
            font-size: 13px;
            font-weight: 500;
            &--active {
                color: $color-main;
            }
        }
    }
}
</style>
