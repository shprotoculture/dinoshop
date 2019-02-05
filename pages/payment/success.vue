<template lang="pug">
    main.main
        section.section
            .container
                .payment-status.payment-status--good
                    .payment-status__image
                        img(src="/img/smile-good.svg")
                    p.payment-status__text Спасибо за покупку! С вами свяжется курьер для уточнения времени доставки Вашего заказа.
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";
.payment-status {
	text-align: center;
	padding: 30px;
	&__image {
		margin-bottom: 30px;
		img {
			max-width: 150px;
		}
	}
	&__text {
		font-size: 18px;
		font-weight: 500;
		color: #fff;
	}
	&--good {
		background: $c-green;
	}
}
</style>
