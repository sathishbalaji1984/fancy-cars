import { Router } from 'express';
import pick from 'lodash/pick';
import sortBy from 'lodash/sortBy';
import merge from 'lodash/merge';
import axios from 'axios';
import Config from 'config/config-server'

const router = Router();

router.get('/', (request, response) => {
    response.send(`<html>
            <head>
            <meta charset="utf-8"></meta>
            <link href="/assets/client.css" type="text/css" rel="stylesheet">
            <title>Fancy Cars</title>
            </head>
            <body>
            <div id="root"></div>
            <script src="/assets/client.bundle.js"></script>
            </body>
        </html>`
    );
})


const getAvailabilityStatus = async ({ carsList }) => {
  const idList = carsList.map(function(car) {
    return pick(car, ['id']);
  });
  return axios.post(Config.API_GET_AVAILABILITY, 
    JSON.stringify(idList)).then((sucessResponse) => {
      const availabilityList = sortBy(sucessResponse.data.availability, ['id']);
      const sortedCarsList = sortBy(carsList, ['id']);
      const mergedList = merge(sortedCarsList, availabilityList);
      return mergedList;
    }
  ).catch((err) => {
      throw err;
  });
}

router.get('/cars', (request, response) => {
  axios.get(Config.API_GET_CARS).then((sucessResponse) => {
    try {
      getAvailabilityStatus(sucessResponse.data).then((resolvedData) => {
        response.status(200).send(JSON.stringify(resolvedData));
      });
    } catch(err) {
      response.status(500).send(err);
    }
  }).catch((err) => {
    response.status(500).send(err);
  });
});



export default router;
