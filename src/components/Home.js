import React from 'react';
import image from "../shapes_background.svg";



export default function Home() {
    return (
        <main className="container mx-auto">
            <div alt="" className="absolute object-cover mt-12 mx-8 lg:mx-12 w-full h-full opacity-75 background-shapes"></div>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-lg text-green-200 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm Oli.</h1>
            </section>
        </main>
    )
}
