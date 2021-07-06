import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    <NavLink className="inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-pink-200 text-4xl font-bold cursive tracking-widest" activeClassName="text-white" to="/" exact>
                        <h1 className="tracking-widest">Oli Saxon</h1>
                    </NavLink>
                    {/* <NavLink className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-200" activeClassName="bg-pink-200" to="/post">
                        Posts
                    </NavLink>
                    <NavLink className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-200" activeClassName="bg-pink-200" to="/project">
                        Projects
                    </NavLink>
                    <NavLink className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-200" activeClassName="bg-pink-200" to="/about">
                        About Me
                    </NavLink> */}
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/osaxon" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <a className="text-purple-100 hover:text-pink-200" href="https://docs.google.com/document/d/e/2PACX-1vRJ4sEpwHsNGa1aiO2EkLiVilmcbWHXAFmI-srckT-Sqdg8OHBIqnEiRjbeq5dR-ZOpMqOszmJPG5m3/pub" target="_blank">Resume</a>
                </div>
            </div>
        </header>
    )
}