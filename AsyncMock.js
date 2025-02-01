const Items = [
    {
        id: 1,
        title: 'Cabaña vidriada',
        price: '20000usd',
        category: 'cabañas',
        description: 'Cabañas de madera, con amplias zonas vidriadas para una mejor visión',
        image:"./src/assets/ImgItems/Cabaña1.jpg",
    },
    {
        id: 2,
        title: 'Cabaña triangular',
        price: '10000usd',
        category: 'cabañas',
        description: 'Cabaña en forma triangular, sencilla, acogedora, economica y de rapido montaje',
        image:'./src/assets/ImgItems/Cabaña2.jpg',
    },
    {
        id: 3,
        title: 'Cabaña grande',
        price: '24000usd',
        category: 'cabañas',
        description: 'Cabaña de madera de 3 ambientes, bastante amplia y reforzada',
        image:'./src/assets/ImgItems/Cabaña3.jpg',
    },

    {
        id: 4,
        title: 'Edificio Estilo artistico',
        price: '300000usd',
        category: 'edificios',
        description: 'Edificación perfecta para exposiciones de arte y demas',
        image:
        './src/assets/ImgItems/Edificio1.jpg',
    },

    {
        id: 5,
        title: 'Edificio largo de 2 pisos',
        price: '280000usd',
        category: 'edificios',
        description: 'Edificacion de 2 pisos de altura, diseño alargado',
        image:
        './src/assets/ImgItems/Edificio2.jpg',
    },

    {
        id: 6,
        title: 'Edificio enorme',
        price: '450000usd',
        category: 'edificios',
        description: 'edificio de 4 pisos, con grandes dimensiones',
        image:
        './src/assets/ImgItems/Edificio3.jpg',
    },

    {
        id: 7,
        title: 'Casa Estilo urbana con todas las comodidades',
        price: '150000usd',
        category: 'modernas',
        description: 'casa moderna con cochera, amplio patio y todas las comodidades',
        image:
        './src/assets/ImgItems/CasaModerna1.png',
    },

    {
        id: 8,
        title: 'Casa de campo',
        price: '195000usd',
        category: 'modernas',
        description: 'Casa quinta ideal para pasar los findes de semana, cuenta con quincho para parrilladas y muchas cosas mas',
        image:
        './src/assets/ImgItems/CasaModerna2.png',
    },

    {
        id: 9,
        title: 'Casa moderna en media luna',
        price: '186000usd',
        category: 'modernas',
        description: 'casa con forma de maedia luna, cuneta con todas las comodidades',
        image: 
        './src/assets/ImgItems/CasaModerna3.png',
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