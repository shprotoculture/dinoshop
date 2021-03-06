export const header = {
    state: {
        menuIsActive: false,
        navLinks: [
            { title: 'Dinoshop', to: '/' },
            { title: 'Каталог', to: '/catalog' },
            // { title: 'Сертификаты', to: '/certificates' },
            { title: 'Подарок на день рождение', to: '/gift' },
            { title: 'Доставка', to: '/delivery' },
        ]
    },
    mutations: {
        toggleMenu(state) {
            state.menuIsActive = !state.menuIsActive;
        },
        closeMenu(state) {
            state.menuIsActive = false;
        }
    }
}