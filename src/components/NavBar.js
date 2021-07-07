import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink className="inflex-flex items-center py-6 px-6 mr-4 my-1 text-purple-100 hover:text-pink-200 text-4xl font-bold cursive tracking-widest" activeClassName="text-white" to="/" exact>
                        <h1 className="tracking-widest">Oli Saxon</h1>
                    </NavLink>
                    <a className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-200" href="#projects">
                        Projects
                    </a>
                    <a className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-200" href="#about">
                        About Me
                    </a>
                    <div className="inline-flex items-center py-3 px-3 my-6">
                        <SocialIcon url="https://github.com/osaxon" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    </div>
                    
                </nav>
            </div>
        </header>
    )
}