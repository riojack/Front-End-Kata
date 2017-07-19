let express = require('express'),
  app = express(),

  sendFileCfg = {
    root: __dirname
  };

const port = 9300;

app.get('/', (req, res) => {
  res.sendFile('./example/index.html', sendFileCfg);
});

app.get('/react.js', (req, res) => {
  res.sendFile('./node_modules/react/dist/react.js', sendFileCfg);
});

app.get('/react-dom.js', (req, res) => {
  res.sendFile('./node_modules/react-dom/dist/react-dom.js', sendFileCfg);
});

app.get('/application.js', (req, res) => {
  res.sendFile('./dist/application.js', sendFileCfg);
});

app.listen(port, () => console.log(`Started example server on port ${port}.\nVisit http://localhost:${port}/ in your browser.`));
