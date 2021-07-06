import React from 'react';
import sphere from "../sphere.svg";
import cube from "../cube.svg";
import square from "../square.svg";
import Parallax from 'react-rellax';



export default function Home() {
    return (
        <main className="container mx-auto bg-gray-50">
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <Parallax className="absolute" speed={-1}>
                    <img className="sphere top-96 left-40" src={sphere} alt=""/>
                </Parallax>
                <Parallax className="z-10">
                    <div className="flex-col w-80">
                        <h1 className="inflex-flex items-center py-6 px-3 cursive home-name text-gray-800">Full Stack Web Developer</h1>
                        <h2 className="text-gray-800">Scroll down to see my work! <span>&#128071;</span></h2>
                    </div>
                    </Parallax>
                <Parallax className="absolute md:left-40 top-80" speed={-3}>
                    <img src={cube} alt=""/>
                </Parallax>
                <Parallax className="absolute right-56">
                    <img src={square} alt=""/>
                </Parallax>
                
            </section>
        </main>
    )
}
