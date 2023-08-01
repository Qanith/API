const http = require('https');

const options = {
    method: 'GET',
    hostname: 'weatherapi-com.p.rapidapi.com',
    port: null,
    path: '/current.json?q=53.1%2C-0.13',
    headers: {
        'X-RapidAPI-Key': '89c3cb9484msh8262e76e236c308p12b330jsn506f4fe415f9',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end(); 