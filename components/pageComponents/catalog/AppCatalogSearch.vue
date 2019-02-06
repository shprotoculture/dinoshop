<template lang="pug">
    .catalog-search
        .input
            input.input__field(type="text" placeholder="Поиск" @input="changeCurrentKeyword")
</template>

<script>
export default {
    methods: {
        changeCurrentKeyword(e) {
            let query = e.target.value.trim();
            let search = [
                "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
                "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
                "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"
            ];
            let replace = [
                "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "\\[", "\\]",
                "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
                "z", "x", "c", "v", "b", "n", "m", ",", "\\."
            ];
            function autoChangeLang(str) {

                for (var i = 0; i < replace.length; i++) {
                    var reg = new RegExp(replace[i], 'mig');
                    str = str.replace(reg, function (a) {
                        return a == a.toLowerCase() ? search[i] : search[i].toUpperCase();
                    });
                }

                return str;

            }

            if (! /^[а-яё ]*$/i.test(search)) {
                query = autoChangeLang(query);
            }

            this.$store.commit("changeCurrentKeyword", query);
            this.$store.commit('resetCurrentPage');
        }
    }
};
</script>

<style lang="scss">
</style>
