import additionalsAndComplements from "./additionalsAndComplements"

const items: any = {
    'Pizza de Frango': {
        name: 'Pizza de Frango',
        description: 'Ingredientes: frango, catupiry, muçarela e tomate.',
        imgLink: 'https://img.freepik.com/free-photo/georgian-cheese-khachapuri-imeruli-georgian-traditional-food-hot-khachapuri_114579-140.jpg?t=st=1720803917~exp=1720807517~hmac=62b936c934f1119938bafd74b725187107537d643ee350c726281244ccdae5e3&w=360',
        basePrice: 64.99,
        actPrice: 54.99,
        complements: {
            avaible: false,
            items: []
        },
        additionals: {
            avaible: true,
            items: ['Provolone', 'Borda de Catupiry', 'Borda de Cheddar']
        },
    },

    'Pizza de Bacon': {
        name: 'Pizza de Bacon',
        description: 'Ingredientes: Bacon, catupiry, muçarela, tomate e azeitona.',
        imgLink: 'https://i.pinimg.com/736x/cd/f6/d6/cdf6d6ab93c825406285afa8924437c0.jpg',
        basePrice: 64.99,
        actPrice: 64.99,
        complements: {
            avaible: false,
            items: []
        },
        additionals: {
            avaible: true,
            items: ['Provolone', 'Borda de Catupiry', 'Borda de Cheddar']
        },
    },

    'Napolitana': {
        name: 'Napolitana',
        description: 'Ingredientes: tomate pelado, alho, manjericão e queijo grana padano.',
        imgLink: 'https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=720&height=503&smart=true',
        basePrice: 64.99,
        actPrice: 64.99,
        complements: {
            avaible: false,
            items: []
        },
        additionals: {
            avaible: true,
            items: ['Provolone', 'Borda de Catupiry', 'Borda de Cheddar']
        },
    },

    'Pizza de brócolis': {
        name: 'Pizza de brócolis',
        description: 'Ingredientes: Brócolis, muçarela, catupiry e bacon.',
        imgLink: 'https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=720&height=503&smart=true',
        basePrice: 64.99,
        actPrice: 64.99,
        complements: {
            avaible: false,
            items: []
        },
        additionals: {
            avaible: true,
            items: ['Provolone', 'Borda de Catupiry', 'Borda de Cheddar']
        },
    },

}

export default items