'use client'

import Image from 'next/image'
import { Header } from 'flotiq-components-react'

const HomeContent = ({ examplesData }) => (
    <main className="plant-bg flex flex-col md:flex-row h-screen">
        <div className="h-full bg-dark-blue/70 grid grid-layout gap-2 p-10 md:w-1/2 lg:p-24 lg:w-3/5">
            <Image
                src="/logo.svg"
                height={85}
                width={300}
                alt="Flotiq logo"
                className="w-60 2xl:w-72 mx-auto self-center md:self-end"
            />
            <div className="md:self-center">
                <Header
                    level={1}
                    className="text-3xl 2xl:text-5xl text-light-blue font-bold text-center mb-6 2xl:mb-10"
                >
                    {examplesData[0].header}
                </Header>
                <p className="text-center text-xl lg:text-2xl text-light-blue">
                    You can learn more about Flotiq in the{' '}
                    <a
                        href="https://flotiq.com/docs/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        documentation
                    </a>
                </p>
            </div>
        </div>

        <div className="hidden bg-dark-blue/50 h-full p-24 md:flex justify-center items-center md:w-1/2 md:order-first lg:w-2/5">
            <Image
                src="/page.png"
                height={850}
                width={730}
                alt="Page preview"
                className="mx-auto max-w-full"
            />
        </div>
    </main>
)

export default HomeContent
