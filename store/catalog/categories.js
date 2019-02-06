export const categories = {
    state: {
        currentCategory: 1,
        currentKeyword: '',
        categories: [
            {
                id: 1,
                name: 'Хит продаж'
            },
            {
                id: 2,
                name: 'Аксессуары'
            },
            {
                id: 3,
                name: 'Все для дома, путешествий и игр в ванной',
            },
            {
                id: 4,
                name: 'Игры',
            },
            {
                id: 5,
                name: 'Книги и канцелярия',
            },
            {
                id: 6,
                name: 'Кости и метеориты',
            },
            {
                id: 7,
                name: 'Мягкие игрушки',
            },
            {
                id: 8,
                name: 'Одежда',
            },
            {
                id: 9,
                name: 'Раскопки',
            },
            {
                id: 10,
                name: 'Роботы',
            },
            {
                id: 11,
                name: 'Сладости',
            },
            {
                id: 12,
                name: 'Сувениры Dinoshop',
            },
            {
                id: 13,
                name: 'Фигурки динозавров',
            },
            {
                id: 14,
                name: 'Все для творчества',
                parentCategory: 4
            },
            {
                id: 15,
                name: 'Дино лизуны и антистрессы',
                parentCategory: 4
            },
            {
                id: 16,
                name: 'Железные дороги, машинки и пистолеты',
                parentCategory: 4
            },
            {
                id: 17,
                name: 'Конструкторы Динозавров, пазлы',
                parentCategory: 4
            },
            {
                id: 18,
                name: 'Мыльные пузыри',
                parentCategory: 4
            },
            {
                id: 19,
                name: 'Мячики',
                parentCategory: 4
            },
            {
                id: 20,
                name: 'Настольные игры',
                parentCategory: 4
            },
            {
                id: 21,
                name: 'Яйца, капсулы и растущие динозавры',
                parentCategory: 4
            },
            {
                id: 22,
                name: 'Канцелярия',
                parentCategory: 5
            },
            {
                id: 23,
                name: 'Книги',
                parentCategory: 5
            },
            {
                id: 24,
                name: 'Раскраски и альбомы',
                parentCategory: 5
            },
            {
                id: 25,
                name: 'Аксессуары',
                parentCategory: 8
            },
            {
                id: 26,
                name: 'Головные уборы',
                parentCategory: 8
            },
            {
                id: 27,
                name: 'Зимние товары',
                parentCategory: 8
            },
            {
                id: 28,
                name: 'Зонты и дождевики',
                parentCategory: 8
            },
            {
                id: 29,
                name: 'Карнавальные костюмы, маски и все для Дня рождения',
                parentCategory: 8
            },
            {
                id: 30,
                name: 'Костюмы',
                parentCategory: 8
            },
            {
                id: 31,
                name: 'Куртки и жилетки',
                parentCategory: 8
            },
            {
                id: 32,
                name: 'Обувь',
                parentCategory: 8
            },
            {
                id: 33,
                name: 'Рюкзаки',
                parentCategory: 8
            },
            {
                id: 34,
                name: 'Футболки и свитшоты',
                parentCategory: 8
            },
            {
                id: 35,
                name: 'Роботы на радиоуправлении',
                parentCategory: 10
            },
            {
                id: 36,
                name: 'Роботы-трансформеры',
                parentCategory: 10
            },
            {
                id: 37,
                name: 'Ходящие и летающие динозавры',
                parentCategory: 10
            },
            {
                id: 38,
                name: 'Фигурки динозавров',
                parentCategory: 13
            },
            {
                id: 39,
                name: 'Резиновые динозавры',
                parentCategory: 13
            },
            {
                id: 40,
                name: 'Заводные динозавры',
                parentCategory: 13
            },
        ]
    },



    mutations: {
        changeCurrentCategory(state, payload) {
            state.currentCategory = payload;
        },
        changeCurrentKeyword(state, payload) {
            state.currentKeyword = payload;
        }
    }
}