<template lang="pug">
    .catalog__item
        .catalog__item-image-wrapper.p-15
            span.catalog__item-sale-label(v-if="product.isSale && product.saleValue > 20") -{{product.saleValue}}%
            a.catalog__item-image-link(:href="product.img" data-fancybox)
                img.catalog__item-image(:src="product.preview")
                
        .catalog__item-content.p-15
            h4.catalog__item-content-title {{product.name}}
            p.catalog__item-content-desc {{product.desc}}
        .catalog__item-price
            span.catalog__item-price--old(v-if="product.isSale") {{product.price.toFixed(2)}}
            span.catalog__item-price--current {{currentPrice || product.price.toFixed(2)}}
            span.sup руб
        .catalog__item-actions.p-15
            .catalog__item-add
                button.catalog__item-add-button(type="button" @click="addProductToCart(product.id)")
                    transition(name="catalog__item-add-button-icon" mode="out-in")
                        i.fal.fa-shopping-cart.catalog__item-add-button-icon(v-if="!productsInCart[id]" key="cart")
                        i.fal.fa-plus.catalog__item-add-button-icon(v-else key="plus")
            .catalog__item-qty
                app-product-qty-input(:currentQty="productsInCart[id] || 0" @qty-changed="changeQty")
        .catalog__item-vars.p-15(v-if="product.variables")
            .catalog__item-vars-row(v-for="(variable, i) in product.variables" :key="i")
                .catalog__item-vars-row-title {{variable.title}}:
                .catalog__item-vars-row-select
                    button.catalog__item-vars-row-option(
                        type="button" 
                        v-for="(option, j) in variable.options" 
                        :key="j"
                        :class="{'catalog__item-vars-row-option--active': option.prodID == id}"
                        @click="changeID(option.prodID)"
                        ) {{option.val}}
</template>

<script>
import AppProductQtyInput from "~/components/global/others/AppProductQtyInput";
export default {
    components: {
        AppProductQtyInput
    },
    props: ["productID"],
    data() {
        return {
            id: this.productID
        };
    },
    computed: {
        product() {
            return this.$store.state.catalog.products.products.filter(
                item => item.id == this.id
            )[0];
        },
        currentPrice() {
            let currentPrice =
                this.product.price -
                this.product.price * (this.product.saleValue / 100);

            return this.product.isSale ? currentPrice.toFixed(2) : false;
        },
        productsInCart() {
            return this.$store.state.cart.productsInCart;
        }
    },
    methods: {
        changeID(id) {
            this.id = id;
        },
        addProductToCart(id) {
            let qty = 1;
            if (!this.productsInCart[id]) {
                this.$store.commit("addProductToCart", { id, qty });
                this.$cookies.set("products", this.productsInCart, 7);
            } else {
                this.$store.commit("addProductToCart", {
                    id,
                    qty: this.productsInCart[id] + 1
                });
                this.$cookies.set("products", this.productsInCart, 7);
            }
        },
        changeQty(e) {
            if (e <= 0 || !e) {
                this.$store.commit("removeProductFromCart", this.id);
                this.$cookies.set("products", this.productsInCart, 7);
            } else {
                this.$store.commit("addProductToCart", { id: this.id, qty: e });
                this.$cookies.set("products", this.productsInCart, 7);
            }
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.catalog__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid #f2f2f2;
    border-bottom: none;
    position: relative;
    &:last-child {
        border-bottom: 1px solid #f2f2f2;
    }
    &-sale-label {
        background: #3a54eb;
        border-radius: 3px;
        color: #fff;
        display: inline-block;
        font-size: 10px;
        padding: 3px;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    &-image-wrapper {
        max-width: 20%;
        flex: 0 0 20%;
    }
    &-content {
        max-width: 40%;
        flex: 0 0 40%;
        &-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        &-desc {
            font-size: 12px;
            font-weight: 400;
            line-height: 1.6;
            color: #4d4d4d;
        }
    }
    &-price {
        max-width: 20%;
        flex: 0 0 20%;
        font-size: 14px;
        text-align: center;
        &--old {
            color: #9a9a9a;
            display: inline-block;
            padding-right: 5px;
            text-decoration: line-through;
        }
    }
    &-actions {
        max-width: 20%;
        flex: 0 0 20%;
        text-align: center;
    }
    &-add {
        margin-bottom: 10px;
        &-button {
            background: $color-main;
            border: none;
            border-radius: 20px;
            color: #fff;
            display: inline-block;
            font-size: 16px;
            width: 90px;
            height: 30px;
            overflow: hidden;
            position: relative;
            &-icon {
                transition: 0.1s ease-out;
                &-enter {
                    transform: translate3d(0, 100%, 0);
                }
                &-leave-to {
                    transform: translate3d(0, -100%, 0);
                }
            }
        }
    }
    &-vars {
        max-width: 100%;
        flex: 0 0 100%;
        border-top: 1px solid #f2f2f2;
        &-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            &-title {
                font-size: 13px;
                font-weight: 500;
            }
            &-select {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            &-option {
                background: none;
                border: none;
                border-radius: 60px;
                display: inline-block;
                font-size: 10px;
                font-weight: 500;
                margin-left: 15px;
                padding: 3px 5px;
                &--active {
                    background: #e9e9e9;
                }
            }
        }
    }

    @media screen and (max-width: 991px) {
        &-image-wrapper {
            max-width: 40%;
            flex: 0 0 40%;
        }
        &-content {
            max-width: 60%;
            flex: 0 0 60%;
        }
        &-price {
            max-width: 50%;
            flex: 0 0 50%;
        }
        &-actions {
            max-width: 50%;
            flex: 0 0 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &-add {
            order: 2;
        }
    }

    @media screen and (max-width: 575px) {
        &-image-wrapper {
            max-width: 100%;
            flex: 0 0 100%;
            text-align: center;
        }
        &-content {
            max-width: 100%;
            flex: 0 0 100%;
        }
        &-price {
            max-width: 100%;
            flex: 0 0 100%;
            text-align: left;
            padding: 15px;
        }
        &-actions {
            max-width: 100%;
            flex: 0 0 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &-add {
            order: 2;
        }
    }
}
</style>
