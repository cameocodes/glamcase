const express = require('express');
const bodyParser = require('body-parser')
const caseRouter = require('./cases/caseRouter')
const cors = require('cors');

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  })
);

app.get('/', (req, res) => {
    res.redirect('/cases')
})

app.use('/cases', caseRouter)

app.listen(3000, () => {
    console.log("Express server listening on port 3000 :D");
});