let express = require('express'),
    app = express();

const port = 9300;

app.get('/', (req, res) => {
    res.sendFile('./example/index.html', {root: __dirname});
});

app.listen(port, () => console.log(`Started example server on port ${port}.\nVisit http://localhost:${port}/ in your browser.`));