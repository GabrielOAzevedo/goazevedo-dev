import { useState } from "react";

export default function MyHeader(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function changeMenu() {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }

    return (
        <header className="flex flex-row w-full md:justify-between items-center">
            <div className="md:hidden flex items-end mr-8" onClick={($event) => { setMenuOpen(true) }}>
                <img src="/images/menu.svg"/>
            </div>
            <div className="w-2/4">
                <a href="/">
                    <p style={{
                            textDecorationColor: 'rgb(124, 58, 237)', 
                            textDecorationThickness: '2px', 
                            textUnderlineOffset: '2px'
                        }} 
                        className="text-xl text-black-600 underline"
                    >
                        <span className="text-purple-600">{'<'}</span>
                        <span>{'Goazevedo.dev'}</span>
                        <span className="text-purple-600">{'/>'}</span>
                    </p>
                </a>
            </div>
            <div className="w-2/4 hidden md:flex h-full flex-row items-center justify-around">
                <a className="text-purple-600" href="./about">About</a>
                <a className="text-purple-600" href="./blog">Blog</a>
                <a className="text-purple-600" href="./projects">Projects</a>
                <a className="text-purple-600" href="./resume">Resume</a>
            </div>
            <div className={(menuOpen ? "flex" : "hidden") + " absolute left-0 top-0 h-screen w-screen z-10 md:hidden"}>
                <div className="flex flex-col w-1/2 bg-white p-8">
                    <a className="mt-2 text-purple-600" href="./about">About</a>
                    <a className="mt-2 text-purple-600" href="./blog">Blog</a>
                    <a className="mt-2 text-purple-600" href="./projects">Projects</a>
                    <a className="mt-2 text-purple-600" href="./resume">Resume</a>
                </div>
                <div onClick={($event) => { changeMenu() }} className="w-1/2 bg-black opacity-60"></div>
            </div>
        </header>
    )
}