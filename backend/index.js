const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  const products = [
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch 1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },

        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch 2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch 3',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch 4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch 5',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 14000
        },
        
        { 
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch 6',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 13000
        },
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch 7',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },
        
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch 8',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch 9',
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