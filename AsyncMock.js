const Items = [
    {
        id: 1,
        title: 'Cabaña vidriada',
        price: '20000usd',
        category: 'cabañas',
        description: 'Cabañas de madera, con amplias zonas vidriadas para una mejor visión',
        image:"https://images.pexels.com/photos/17722641/pexels-photo-17722641/free-photo-of-madera-cielo-casas-nubes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        title: 'Cabaña triangular',
        price: '10000usd',
        category: 'cabañas',
        description: 'Cabaña en forma triangular, sencilla, acogedora, economica y de rapido montaje',
        image:'https://images.pexels.com/photos/8241741/pexels-photo-8241741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 3,
        title: 'Cabaña grande',
        price: '24000usd',
        category: 'cabañas',
        description: 'Cabaña de madera de 3 ambientes, bastante amplia y reforzada',
        image:'https://images.pexels.com/photos/13897373/pexels-photo-13897373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 4,
        title: 'Edificio artistico',
        price: '300000usd',
        category: 'edificios',
        description: 'Edificación perfecta para exposiciones de arte y demas',
        image:
        'https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 5,
        title: 'Edificio amplio de 2 pisos',
        price: '280000usd',
        category: 'edificios',
        description: 'Edificacion de 2 pisos de altura, diseño alargado',
        image:
        'https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 6,
        title: 'Edificio enorme',
        price: '450000usd',
        category: 'edificios',
        description: 'edificio de 21 pisos, con grandes dimensiones, espacio para 4 departamentos chicos-medianos por piso o 2 medianos-grandes',
        image:
        'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 7,
        title: 'Casa Estilo urbana clasica',
        price: '150000usd',
        category: 'modernas',
        description: 'casa moderna con cochera, amplio patio y todas las comodidades',
        image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 8,
        title: 'Casa de campo',
        price: '195000usd',
        category: 'modernas',
        description: 'Casa quinta ideal para pasar los findes de semana, cuenta con quincho para parrilladas y muchas cosas mas',
        image:
        'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        id: 9,
        title: 'Casa moderna estilo unico',
        price: '226000usd',
        category: 'modernas',
        description: 'casa con 2 pisos y cochera, diseño unico y tridimensional',
        image: 
        'https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

];

export const getItems = () => {
    return new Promise ((resolve) => {
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
        }, 2000);
    });
};