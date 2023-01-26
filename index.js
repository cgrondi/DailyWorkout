const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('hi');
})


app.get('/workouts/:first', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + req.params.first,
        headers:{ 'X-Api-Key': process.env.REACT_APP_API_NINJAS_API_KEY}
    }
    axios.request(options).then((response)=>{
        res.json(response.data)
    }).catch((error)=>console.error(error))
});

app.post('/schedule', (req, res) =>{
    console.log(req.body);
})

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));