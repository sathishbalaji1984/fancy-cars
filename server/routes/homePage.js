import { Router } from 'express';
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

router.get('/cars', (request, response) => {
  console.log(Config.API_GET_CARS);
  axios.get(Config.API_GET_CARS).then((data) => {
    response.status(200).send(JSON.stringify(data.data));
  }).catch((err) => {
    response.status(500).send(err);
  });
});

export default router;
