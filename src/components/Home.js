import React from 'react';
import image from "../boat.jpg";



export default function Home() {
    return (
        <main>
            <img src={image} alt="" className="absolute object-cover w-full h-full opacity-75"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-lg text-green-200 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm Oli.</h1>
            </section>
        </main>
    )
}
