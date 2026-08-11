import 'dotenv/config'
import { cache } from 'react'
import { Flotiq } from '@flotiq/flotiq-api-sdk'

async function fetchExamplesData() {
    const apiKey = process.env.FLOTIQ_API_KEY
    const api = new Flotiq(apiKey)
    return api.content.example.list()
}

// eslint-disable-next-line import/prefer-default-export
export const getExamplesData = cache(fetchExamplesData)
