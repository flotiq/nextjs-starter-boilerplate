import { Header } from 'flotiq-components-react'
import Head from 'next/head'
import Image from 'next/image'

const NotFoundPage = () => (
    <main className="plant-bg flex flex-col h-screen justify-center items-center">
        <Head>
            <title>Page not found</title>
        </Head>

        <div className="bg-dark-blue/80 h-full w-full grid grid-layout gap-2 p-10 lg:p-24">
            <Image
                src="/logo-white.svg"
                alt="Flotiq"
                width={300}
                height={85}
                className="w-60 2xl:w-72 mx-auto self-center md:self-end"
            />
            <Header
                level={1}
                className="text-3xl 2xl:text-5xl text-light-blue font-bold text-center mb-4 md:self-center"
            >
                Page not found, sorry
            </Header>
        </div>
    </main>
)

export default NotFoundPage;
