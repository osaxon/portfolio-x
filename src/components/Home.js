import React, { useState, useEffect }  from 'react';
import { Link } from "react-router-dom"
import sanityClient from "../client.js";
import sphere from "../sphere.svg";
import cube from "../cube.svg";
import square from "../square.svg";
import Parallax from 'react-rellax';



export default function Home() {
    const [projectData, setProject] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                _id,
                title,
                link,
                image{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setProject(data))
            .catch(console.error);
    })

    return (
        <main className="container mx-auto">
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8 z-10">
                <Parallax className="absolute" speed={10} onMove={{x: 10, y:-10}}>
                    <img className="sphere top-96 left-40" src={sphere} alt=""/>
                </Parallax>
                <Parallax className="z-10" onMove={{x: 10, y:-10}}>
                    <div className="flex-col w-80">
                        <h1 className="inflex-flex items-center py-6 px-3 cursive home-name text-purple-100">Full Stack Web Developer</h1>
                        <h2 className="text-xl px-3 text-purple-100">Scroll down to see my work! <span>&#128071;</span></h2>
                    </div>
                    </Parallax>
                <Parallax className="absolute left-10 bottom-40" speed={3} onMove={{x: -5, y:-10}}>
                    <img src={cube} alt=""/>
                </Parallax>
                <Parallax className="absolute" speed={-6} onMove={{x: -10, y: -20}}>
                    <img src={square} alt=""/>
                </Parallax>
                
            </section>
            
                <section className="container mx-auto p-12 z-20">
                    <h1 className="text-5xl flex justify-center cursive text-purple-100">Projects</h1>
                    <h2 className="text-lg text-purple-100 flex justify-center mb-12">Some of my work</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectData && projectData.map((project, index) => (
                        <article>
                            <Link to={project.link} key={project._id}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-400 opacity-75 hover:opacity-100" key={index}>
                                <img src={project.image.asset.url} alt={project.image.alt} className="w-full h-full rounded-r object-cover absolute" />
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-purple-100 text-lg font-bold py-2 px-2 opacity-90 bg-pink-600 text-pink-50 bg-opactivty-75 rounded">{project.title}</h3>
                                </span>
                            </span>
                            </Link>
                        </article>
                        ))}
                    </div>
                </section>
        
        </main>
    )
}
