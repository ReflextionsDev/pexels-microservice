// 'use strict';



import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000144eaa09f28e94e348786a56aa851f4fe');


export const doSomething = async (req, res) => {
    try {


        const foundUser = 420


        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // res.status(200).json({ message: "Current user", payload: foundUser });


        // client.photos.search({ query: 'nature', per_page: 5, page: 1 })
        // .then(photos => console.log(photos))


        const photos = await client.photos.search({ query: 'nature', per_page: 5, page: 1 })


        res.status(200).json({ message: "Current user", payload: photos });


    } catch (error) {
        res.status(500).json({ error: error });
    }
}

