// Environment
import * as dotenv from 'dotenv'
dotenv.config()

// Pexels Client
import { createClient } from 'pexels';
const client = createClient(process.env.API_KEY)

// Global Params
const resultsPerPage = 10

// params: page
export const getCurated = async (req, res) => {
    try {
        const photos = await client.photos.curated({
            per_page: resultsPerPage,
            page: req.params.page
        })
        res.status(200).json({ message: "success", payload: photos })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// params: query, page
export const getSearch = async (req, res) => {
    try {
        const photos = await client.photos.search({
            query: req.params.query,
            per_page: resultsPerPage,
            page: req.params.page
        })
        res.status(200).json({ message: "success", payload: photos })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}