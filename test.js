import { createClient } from 'pexels'

const client = createClient('563492ad6f9170000100000144eaa09f28e94e348786a56aa851f4fe')

// All requests made with the client will be authenticated


import fetch from 'node-fetch';

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))


// fetch('https://api.pexels.com/v1/search?query=people', {
//     headers: {
//         Authorization: '563492ad6f9170000100000144eaa09f28e94e348786a56aa851f4fe'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json))


console.log('============')
const query = 'Nature';
client.photos.search({ query, per_page: 5, page: 1 })
.then(photos => console.log(photos))



// client.photos.curated({ per_page: 1 }).then(photos => {...});

// client.photos.search({ query, per_page: 1 })
// .then(photos => {...});
// client.photos.search('Cloud')