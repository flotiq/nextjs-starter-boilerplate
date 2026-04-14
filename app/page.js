import HomeContent from '../components/HomeContent'
import { getExamplesData } from '../lib/examples'
import replaceUndefinedWithNull from '../lib/sanitize'

export async function generateMetadata() {
    const dataPage = await getExamplesData()
    const examplesData = replaceUndefinedWithNull(dataPage.data)
    return {
        title: examplesData[0]?.title ?? 'Next.js',
    }
}

const Home = async () => {
    const dataPage = await getExamplesData()
    const examplesData = replaceUndefinedWithNull(dataPage.data)

    return <HomeContent examplesData={examplesData} />
}

export default Home
