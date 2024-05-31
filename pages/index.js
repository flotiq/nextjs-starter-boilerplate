import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from 'flotiq-components-react';
import { getExamplesData } from '../lib/examples';
import replaceUndefinedWithNull from '../lib/sanitize';

const Home = ({ examplesData }) => (
    <main className="flex flex-col h-screen justify-center items-center">
        <Head>
            <title>{examplesData[0].title}</title>
        </Head>
        <div className="m-5">
            <Image
                src="/Logo.svg"
                height={85}
                width={300}
                alt="Flotiq logo"
                className="mx-auto"
            />
        </div>
        <Header
            additionalClasses={['m-24 !text-5xl text-light-blue']}
            alignment="center"
        >
            {examplesData[0].header}
        </Header>
        <p className="text-center text-4xl text-light-blue">
            You can learn more about Flotiq in the
            {' '}
            <a
                href="https://flotiq.com/docs/"
                target="_blank"
                rel="noreferrer"
                className="underline"
            >
                documentation
            </a>
        </p>
    </main>
);

export default Home;

export async function getStaticProps() {
    const dataPage = await getExamplesData();
    return {
        props: {
            examplesData: replaceUndefinedWithNull(dataPage.data),
        },
    };
}
