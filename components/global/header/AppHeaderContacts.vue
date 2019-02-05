<template lang="pug">
    .header-contacts
        a.header-contacts__link(href="tel:+79660326666") + 7 (966) 032-66-66
        br
        a.header-contacts__link(href="mailto:info@dinoshop.msk.ru") info@dinoshop.msk.ru
        p.header-contacts__time
            | Пн - Сб
            span.header-contacts__time-nums 10:00 - 21:00
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/global/vars";

.header-contacts {
	flex: 0 0 auto;
	&__link {
		color: #000;
		font-size: 12px;
		font-weight: 600;
		margin-top: 4px;
		text-decoration: underline;
		transition: 0.15s ease;
		&:hover {
			color: $c-green;
		}
	}
	&__time {
		color: #000;
		font-size: 12px;
		font-weight: 600;
		margin-top: 4px;
		&-nums {
			display: inline-block;
			margin-left: 10px;
		}
	}

	@media screen and (max-width: 991px) {
		display: none;
	}
}
</style>
