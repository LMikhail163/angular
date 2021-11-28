const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  const products = [
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },

        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch3',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch5',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 14000
        },
        
        { 
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch6',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 13000
        },
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch7',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },
        
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch8',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch9',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },
    ];
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});