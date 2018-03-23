import express from 'express';
import router from './routes/homePage'

const port = 8000;
const app = express();
app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});
app.use('/assets', express.static('dist/client', { fallthrough: false }));
app.use('/', router);

app.listen(port, (err) => {
    if(err) {
        console.log('failed to start server');
    }
    console.log(`Server started on port ${port}`);
});
