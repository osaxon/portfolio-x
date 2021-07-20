import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
import sanityClient from "../client.js";
import { ReactComponent as Sphere } from "../sphere.svg";
import { ReactComponent as Cube } from "../cube.svg";
import { ReactComponent as Square } from "../square.svg";
import Parallax from "react-rellax";

export default function Home() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
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
            }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  });

  return (
    <main className="container mx-auto">
      {/* HEADLINE */}
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8 z-10">
        <Parallax className="absolute" speed={6}>
          <Sphere className="sphere top-96 left-40" />
        </Parallax>
        <Parallax className="z-50">
          <div className="flex-col w-80">
            <h1 className="inflex-flex items-center py-6 px-3 cursive home-name text-purple-100">
              Full Stack Web Developer
            </h1>
            <h2 className="text-xl px-3 text-purple-100">
              Scroll down to see my work! <span>&#128071;</span>
            </h2>
          </div>
        </Parallax>
        <Parallax className="absolute left-10 bottom-40" speed={3}>
          <Cube />
        </Parallax>
        <Parallax className="absolute z-10" speed={-4}>
          <Square />
        </Parallax>
      </section>

      {/* PROJECTS SECTION */}

      <section id="projects" className="container mx-auto p-12 z-20">
        <h1 className="text-5xl flex justify-center cursive text-purple-100">
          Projects
        </h1>
        <h2 className="text-lg text-purple-100 flex justify-center mb-12">
          Some of my work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article>
                <a href={project.link} key={project._id}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-pink-400 opacity-75 hover:opacity-100"
                    key={index}
                  >
                    <img
                      src={project.image.asset.url}
                      alt={project.image.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-purple-100 text-lg font-bold py-2 px-2 opacity-90 bg-pink-600 text-pink-50 bg-opactivty-75 rounded">
                        {project.title}
                      </h3>
                    </span>
                  </span>
                </a>
              </article>
            ))}
        </div>
      </section>

      <section
        id=""
        className="container mx-auto p-12 border rounded shadow-lg bg-gray-50"
      >
        <h1 id="about" className="text-5xl flex justify-center cursive text-gray-600">
          About me
        </h1>
        <div className="container px-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deleniti quae vero velit at fugiat?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quas recusandae, similique ipsum quisquam optio, natus, autem aut ea
            quos quam! Eum blanditiis perspiciatis repellendus.
          </p>
          <br />
        </div>
      </section>

      <footer id="contact" className="container mx-auto p-12">
        <h1 className="text-5xl flex justify-center cursive text-purple-100">
          Contact
        </h1>

        <div className="container px-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deleniti quae vero velit at fugiat?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quas recusandae, similique ipsum quisquam optio, natus, autem aut ea
            quos quam! Eum blanditiis perspiciatis repellendus.
          </p>
          <br />
        </div>
      </footer>
    </main>
  );
}
