import 'dotenv/config'
import { cache } from 'react'
import { FlotiqApi } from '../flotiqApi'

async function fetchExamplesData() {
    const apiKey = process.env.FLOTIQ_API_KEY
    const api = new FlotiqApi(apiKey)
    return api.ExampleAPI.list()
}

// eslint-disable-next-line import/prefer-default-export
export const getExamplesData = cache(fetchExamplesData)
