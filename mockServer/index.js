import express from 'express';
import router from './routes/routes'

const port = 4000;
const app = express();
app.use('/', router);

app.listen(port, (err) => {
    if(err) {
        console.log('failed to start server');
    }
    console.log(`Server started on port ${port}`);
});
