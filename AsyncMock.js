const Items = [
    {
        id: 1,
        title: '',
        price: '15000usd',
        category: 'cabañas',
        description: 'talles: XL, L, M, S, XS',
        image:
        '',
    },
    {
        id: 2,
        title: '',
        price: '20000usd',
        category: 'cabañas',
        description: 'talles: 38, 40, 42, 44, 50, 52',
        image:
        '',
    },
    {
        id: 3,
        title: '',
        price: '24000usd',
        category: 'cabañas',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 4,
        title: '',
        price: '3000',
        category: 'edificios',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 5,
        title: '',
        price: '3000',
        category: 'edificios',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 6,
        title: '',
        price: '3000',
        category: 'edificios',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 7,
        title: '',
        price: '3000',
        category: 'modernas',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 8,
        title: '',
        price: '3000',
        category: 'modernas',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

    {
        id: 9,
        title: '',
        price: '3000',
        category: 'modernas',
        description: 'Colores: rojo, azul y verde',
        image:
        '',
    },

];

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Items);
        }, 2000);
    });
};

export const getItem = (id) => {
    return Items.find((Item) => Item.id == id);
};

export const getCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Items.filter((Item) => Item.category === category));
        }, 1000);
    });
};