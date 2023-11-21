const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5bc7655362msh2aad9c6ae214f8ap1d018ajsnc1bd00336bdd',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};


export { geoApiOptions, url };
