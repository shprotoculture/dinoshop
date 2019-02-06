<template lang="pug">
    .catalog__products
        .catalog__list
            .catalog__list-empty(v-if="products.length <= 0") Ничего не найдено
            app-catalog-item(v-for="(product, index) in filtredProducts" :key="product.id" :productID="product.id")
        .catalog__pagination(v-if="paginationButtons > 1")
            button.catalog__pagination-button(type="button" @click="prevPage")
                i.fal.fa-chevron-left
            ul.catalog__pagination-list
                li.catalog__pagination-item(v-for="(paginationButton, i) in paginationButtons" :key="i")
                    button.catalog__pagination-button.catalog__pagination-page(type="button" @click="selectPage(i + 1)" :class="{'catalog__pagination-page--active': currentPage == i + 1}") {{i + 1}}
            button.catalog__pagination-button(type="button" @click="nextPage")
                i.fal.fa-chevron-right
</template>

<script>
import $ from 'jquery';

import AppCatalogItem from "~/components/pageComponents/catalog/AppCatalogItem";
export default {
    components: {
        AppCatalogItem
    },
    data() {
        return {
            pageSize: 10,
        }
    },
    computed: {
        currentPage () {
            return this.$store.state.catalog.currentPage;
        },
        currentCategory() {
            return this.$store.state.catalog.categories.currentCategory;
        },
        currentKeyword() {
            return this.$store.state.catalog.categories.currentKeyword;
        },
        products() {
            let filtredProducts = this.$store.state.catalog.products.products.filter(
                item => {
                    let catID = item.categoryID.filter(product => {
                        return product == this.currentCategory;
                    });

                    return catID.length > 0 && item.show;
                }
            );

            let searchProducts = this.$store.state.catalog.products.products.filter(
                item => {
                    let result = item.keywords.filter(product => {
                        return product
                            .toLowerCase()
                            .includes(this.currentKeyword.toLowerCase());
                    });
                    return item.show && result.length > 0;
                }
            );

            return this.currentKeyword.trim() == ""
                ? filtredProducts
                : searchProducts;
        },
        filtredProducts() {
            return this.products.filter((row, index) => {
                let start = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                if (index >= start && index < end) return true;
            });
        },
        paginationButtons() {
            let buttonsCounter = this.products.length / this.pageSize;
            return Math.ceil(buttonsCounter);
        }
    },
    methods: {
        nextPage() {
            if ((this.currentPage * this.pageSize) < this.products.length) {
                this.$store.commit('changeCurrentPage', this.currentPage + 1);
                this.goTop();
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.$store.commit('changeCurrentPage', this.currentPage - 1);
                this.goTop();
            }
        },
        selectPage(i) {
            this.$store.commit('changeCurrentPage', i);
            this.goTop();
        },
        goTop () {
            let top = $('.catalog__products').offset().top;
            $('html, body').animate({scrollTop: top - 100}, 500)
        }
    },
    mounted() {
        this.$store.commit('changeCurrentKeyword', '');
    }
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog__list {
    &-empty {
        text-align: center;
        font-size: 24px;
        font-weight: 400;
    }
}

.catalog__pagination {
    display: flex;
    align-items: center;
    padding: 30px 15px;
    &-list {
        display: flex;
        align-items: center;
        padding: 0 5px;
    }
    &-item {
        margin: 0 5px;
    }
    &-button {
        display: inline-block;
        width: 30px;
        height: 30px;
        flex: 0 0 30px;
        border-radius: 100%;
        border: none;
        background: $color-main;
        color: #fff;
    }
    &-page {
        background: none;
        color: #4d4d4d;
        &--active {
            background: $color-main;
            color: #fff;
        }
    }

    @media screen and (max-width: 575px) {
        justify-content: space-between;
        padding: 30px 0;
        &-list {
            display: none;
        }
    }
}
</style>
