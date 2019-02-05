<template lang="pug">
main.main
    section.section
        .container
            app-book
    section.section
        .container
            .section__heading.section__heading--left
                h4.section__heading-title DINOSHOP
            .section__content
                .row
                    .col-lg-6.p-15
                        app-slider-single(:slides="slides")
                    .col-lg-6.p-15
                        .dino-desc
                            p.dino-desc__text
                                | Магазин Dinoshop в парке Сказка — увлекательный детский мир игрушек, одежды и настольных игр, о которых мечтает каждый ребенок. Теперь не нужно долго думать, что подарить на День Рождение или Новый год: все полезные, игровые, вкусные товары перед Вами, собраны на одном сайте.
                            p.dino-desc__text
                                | Наш магазин специализируется на продаже товаров тематики самых древних обитателей нашей планеты - динозавров. Динозавры, раскопки, артефакты — все то, что может заинтересовать ребенка в любом возрасте. Здесь Вы найдете более 1000 видов игр, книг про динозавров, мягких игрушек, пазлов для детей всех возрастов и пола. Играя с фигурками, малыш воспроизводит сюжеты из увиденных им мультиков и фильмов про динозавров, развивая фантазию.
                            nuxt-link.dino-desc__link.button.button--primary.button--medium(to="/catalog") Перейти в каталог
    section.section
        .container
            app-video-container(:content="dinoshopVideo")
    section.section.pb-n
        .container
            .row
                .col-md-4.p-15
                    .how-works.how-works--arrow
                        .how-works__image-wrapper
                            img(src="/img/checklist.svg")
                        .how-works__text Выбираете товыры из каталога и оставляете заявку
                .col-md-4.p-15
                    .how-works.how-works--arrow
                        .how-works__image-wrapper
                            img(src="/img/messages.svg")
                        .how-works__text Наши менеджеры свяжутся с Вами и обговорят детали заказа
                .col-md-4.p-15
                    .how-works
                        .how-works__image-wrapper
                            img(src="/img/delivery.svg")
                        .how-works__text Доставка будет осуществена до Вашей двери
    section.section--green
        .container
            .site-seo
                p.site-seo__text.site-seo__text--white
                    | Посетите наш магазин игрушек в самом большом динопарке Москвы Диносказке в парке Сказка — подарите ребенку праздник. Так же вы можете купить игрушки в нашем детском интернет магазине. Сайт предоставляет возможность выбирать товары, рассортированные по разделам для удобства поиска.
</template>

<script>
import AppBook from '~/components/pageComponents/index/AppBook';
import AppSliderSingle from '~/components/global/sliders/AppSliderSingle';
import AppVideoContainer from '~/components/global/others/AppVideoContainer';
export default {
	head: {
		title: "Главная | Dinoshop",
		meta: [{
			hid: "description",
			name: "description",
			content: "Магазин Dinoshop в парке Сказка — увлекательный детский мир игрушек, одежды и настольных игр."
		}]
	},
	components: {
		AppBook,
		AppSliderSingle,
		AppVideoContainer
	},
	data() {
		return {
			slides: [
				'/img/clients/dino-client-1.jpg',
				'/img/clients/dino-client-2.jpg',
				'/img/clients/dino-client-3.jpg',
				'/img/clients/dino-client-4.jpg',
				'/img/clients/dino-client-5.jpg',
				'/img/clients/dino-client-6.jpg',
				'/img/clients/dino-client-7.jpg',
				'/img/clients/dino-client-8.jpg',
				'/img/clients/dino-client-9.jpg',
				'/img/clients/dino-client-10.jpg',
				'/img/clients/dino-client-11.jpg',
				'/img/clients/dino-client-12.jpg',
				'/img/clients/dino-client-13.jpg',
				'/img/clients/dino-client-14.jpg',
				'/img/clients/dino-client-15.jpg',
				'/img/clients/dino-client-16.jpg',
				'/img/clients/dino-client-17.jpg',
				'/img/clients/dino-client-18.jpg',
				'/img/clients/dino-client-19.jpg',
				'/img/clients/dino-client-20.jpg',
				'/img/clients/dino-client-21.jpg',
				'/img/clients/dino-client-22.jpg',
				'/img/clients/dino-client-23.jpg',
				'/img/clients/dino-client-24.jpg',
			],
			dinoshopVideo: {
				overlay: '/img/dinoshop-overlay.jpg',
				videoSrc: '/video/main-video.mp4'
			}
		};
	}
}
</script>

<style lang="scss">
.dino-desc {
	padding-left: 60px;

	&__text {
		font-size: 14px;
		font-weight: 400;
		line-height: 1.75;
		margin-bottom: 30px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: 991px) {
		padding-left: 0;
	}
}

.how-works {
	text-align: center;
	max-width: 220px;
	margin: 0 auto;
	position: relative;

	&--arrow {
		&:after {
			content: "";
			position: absolute;
			width: 60px;
			height: 15px;
			background: url(/img/arrow.svg) no-repeat center/cover;
			right: -115px;
			top: 45px;
		}
	}

	&__image-wrapper {
		margin-bottom: 10px;
	}

	&__text {
		font-size: 14px;
		font-weight: 400;
		color: #4d4d4d;
	}

	@media screen and (max-width: 991px) {
		&:after {
			display: none;
		}
	}
}
</style>
