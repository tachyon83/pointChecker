const http = require('http');
const express = require('express');
const app = express();

app.use(express.json())
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', (req, res) => {
    req.app.render('index', (err, html) => {
        if (err) {
            res.end("<h1>EJS ERROR!</h1>");
            return;
        }
        res.end(html);
    })
})

app.use(function (req, res, next) {
    req.app.render('error', (err, html) => {
        if (err) {
            res.end("<h1>EJS ERROR!</h1>");
            return;
        }
        res.end(html);
    })
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});
