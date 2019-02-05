<template lang="pug">
    .book
        .row.align-items-center
            .col-lg-6.p-15
                .book-image
                    img(src="/img/book.png" alt="Книга Все о динозаврах")
            .col-lg-6.p-15
                .book-form
                    .book-form__heading
                        h4.book-form__heading-title ЗАПОЛНИТЕ ФОРМУ
                        p.book-form__heading-subtitle
                            | и получите бесплатно книгу с озвучкой
                            br
                            |  “Все о динозаврах”
                    .book-form__body
                        .p-15(v-for="(input, index) in formInputs" :key="index")
                            .input
                                input.input__field(:type="input.type" :placeholder="input.placeholder" :required="input.required")
                        .p-15
                            .checkbox
                                input.checkbox__input(type="checkbox" required id="policy")
                                label.checkbox__text(for="policy") Даю согласие на обработку персональных данных
                        .p-15
                            button.button.button--primary.button--fluid.button--uc(type="submit")
                                span.button__text Получить книгу
</template>

<script>
export default {
	data() {
		return {
			formInputs: [
				{ placeholder: 'Ваше имя *', type: 'text', required: true },
				{ placeholder: 'E-mail *', type: 'email', required: true },
				{ placeholder: 'Телефон *', type: 'text', required: true },
				{ placeholder: 'День рождения Вашего ребенка *', type: 'text', required: true },
				{ placeholder: 'Имя Вашего ребенка *', type: 'text', required: true },
			]
		}
	}
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.book {
	background: #f7f7f7;
	padding: 60px;
	&-image {
		text-align: center;
	}
	&-form {
		max-width: 450px;
		margin: 0 auto;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 0 25px rgba(#000, 0.07);
		&__heading {
			text-align: center;
			padding: 30px;
			border-bottom: 1px dotted #e5e5e5;
			&-title {
				font-size: 24px;
				font-weight: 300;
				text-transform: uppercase;
				margin-bottom: 5px;
			}
			&-subtitle {
				font-size: 16px;
				font-weight: 300;
			}
		}
		&__body {
			padding: 15px;
		}
	}

	@media screen and (max-width: 575px) {
		padding: 30px 15px;
		&-form {
			&__heading {
				padding: 30px 15px;
				&-title {
					font-size: 20px;
				}
				&-subtitle {
					font-size: 14px;
				}
			}
			br {
				display: none;
			}
			&__body {
				padding: 15px 0;
			}
		}
	}
}
</style>
