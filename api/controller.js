// 'use strict';



import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000144eaa09f28e94e348786a56aa851f4fe');


export const doSomething = async (req, res) => {
    try {
        const foundUser = 420


        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        const query = 'Nature';
        client.photos.search({ query, per_page: 1, page: 1 })

            .then(response => response.json())
            .then(json => console.log(json))

        // res.status(200).json({ message: "Current user", payload: foundUser });
    } catch (error) {
        res.status(500).json({ error: errorHandler(error) });
    }
}

