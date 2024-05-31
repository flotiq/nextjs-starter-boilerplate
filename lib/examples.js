import 'dotenv/config';
import { FlotiqApi } from '../flotiqApi';

// eslint-disable-next-line import/prefer-default-export
export async function getExamplesData() {
    const apiKey = process.env.FLOTIQ_API_KEY;
    const api = new FlotiqApi(apiKey);
    return api.ExampleAPI.list();
}
