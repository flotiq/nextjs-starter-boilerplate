import Head from 'next/head'
import Image from 'next/image'

const NotFoundPage = () => (
    <main className="plant-bg flex flex-col h-screen justify-center items-center">
        <Head>
            <title>Page not found</title>
        </Head>

        <div className="bg-dark-blue/80 h-full w-full flex flex-col justify-center items-center">
            <div className="relative">
                <Image
                    src="/logo-white.svg"
                    alt="Flotiq"
                    width={300}
                    height={85}
                    className="logo w-60 2xl:w-72 mx-auto"
                />
                <h1 className="text-3xl 2xl:text-5xl text-light-blue font-bold text-center mb-4">
                    Page not found, sorry
                </h1>
            </div>
        </div>
    </main>
)

export default NotFoundPage;
