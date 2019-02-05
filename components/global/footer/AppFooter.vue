<template lang="pug">
footer.footer
    .footer-content
        .footer-content__top
            .container
                .row
                    .col-lg-6.p-15
                        .footer-contacts
                            .footer-contacts__title Контакты
                            .footer-contacts__list
                                .footer-contacts__item
                                    i.fal.fa-map.footer-contacts__item-icon
                                    p.footer-contacts__item-text г. Москва, ул. Крылатская, д. 18, территория парка Сказка
                                .footer-contacts__item
                                    i.fal.fa-phone-volume.footer-contacts__item-icon
                                    a.footer-contacts__item-link(href="tel:+79660326666") +7 (966) 032 - 66 - 66
                                .footer-contacts__item
                                    i.fal.fa-comment.footer-contacts__item-icon
                                    a.footer-contacts__item-link(href="#" target="_blank") Telegram 
                                    span.footer-contacts__item-sep /
                                    a.footer-contacts__item-link(href="#" target="_blank") Whatsapp
                        .footer-social
                            ul.footer-social__list
                                li.footer-social__item
                                    a.footer-social__link(href="#" target="_blank")
                                        i.fab.fa-instagram
                                li.footer-social__item
                                    a.footer-social__link(href="#" target="_blank")
                                        i.fab.fa-vk
                    .col-lg-6.p-15
                        no-ssr
                            app-map
        .footer-content__btm
            .container
                .row
                    .col-lg-6.p-15
                        .footer-policy
                            nuxt-link.footer-policy__link(to="/policy") Политика конфеденциальности
                            span.footer-policy__sep /
                            nuxt-link.footer-policy__link(to="/oferta") Договор оферты
                    .col-lg-6.p-15
                        .footer-company-info
                            | ООО «МЕДИА ГРУПП» ИНН 7704370811. Юридический адрес: 119121 г. Москва, ул. Бурденко, дом №16/12, цок. этаж, пом.1П. Производственный адрес: г. Москва,м. Строгино, ул. Кулакова 20
</template>

<script>
import AppMap from '~/components/global/footer/AppMap'
export default {
	components: {
		AppMap
	}
}
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.footer {
	&-content {
		&__top {
			padding: 30px 0;
		}

		&__btm {
			border-top: 1px solid #e5e5e5;
		}
	}

	&-contacts {
		margin-bottom: 30px;

		&__title {
			font-size: 24px;
			font-weight: 300;
			margin-bottom: 30px;
		}

		&__item {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			margin-bottom: 30px;

			&:last-child {
				margin-bottom: 0;
			}

			&-icon {
				font-size: 24px;
				color: $c-green;
				margin-right: 10px;
				flex: 0 0 auto;
			}

			&-text {
				font-size: 16px;
				font-weight: 400;
			}

			&-link {
				font-size: 16px;
				font-weight: 400;
				text-decoration: underline;
				transition: 0.25s ease;

				&:hover {
					color: $c-green;
				}
			}

			&-sep {
				display: inline-block;
				padding: 0 3px;
			}
		}
	}

	&-social {
		&__list {
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}

		&__item {
			margin-right: 30px;
		}

		&__link {
			display: block;
			width: 45px;
			height: 45px;
			border-radius: 100%;
			text-align: center;
			line-height: 47px;
			background: $c-green;
			color: #fff;
			font-size: 18px;
			transition: 0.25s ease;

			&:hover {
				background: $c-green--h;
			}
		}
	}

	&-company-info {
		font-size: 12px;
		font-weight: 300;
		color: #b5b5b5;
		line-height: 1.6;
	}

	&-policy {
		&__link {
			font-size: 14px;
			font-weight: 500;
			transition: 0.25s ease;
			&:hover {
				color: $c-green;
			}
		}

		&__sep {
			display: inline-block;
			padding: 0 3px;
		}
	}

	@media screen and (max-width: 991px) {
	}
}
</style>
