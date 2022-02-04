const { Router } = require('express');
const productsRepository = require('../repositories/products.repository');

const router = new Router();

router.post('/', async (request, response) => {
    response.json(await productsRepository.add(request.body));
});

router.delete('/delete', async (request, response) => {
    await productsRepository.delete(request.body);
    response.json();
});

module.exports = router;