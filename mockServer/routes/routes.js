import { Router } from 'express';
import carsList from 'test/mockData/cars.json';
import availability from 'test/mockData/availability.json';

const router = Router();

router.get('/cars', (request, response) => {
  response.send(carsList);
})

router.post('/availability', (request, response) => {
  response.send(availability);
})

export default router;
