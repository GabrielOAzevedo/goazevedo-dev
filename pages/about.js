import Image from "next/image";
import Layout from "../components/layout";

export default function AboutPage(props) {
    return (
        <Layout>
            <div className="overflow-auto h-3/4 flex flex-row flex-wrap justify-around items-center">
                <h1 className="block md:hidden mt-8 underline text-purple-600 text-3xl">Trying to pass the turing test...</h1>
                <div className="w-full md:w-1/2 mt-8">
                    <div className="flex items-center justify-center">
                        <div className="border-4 border-purple-600 rounded-full p-2">
                            <div className="rounded-full overflow-hidden">
                                <img className="h-32 md:h-64" alt="myself" src="./images/gabs.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="hidden md:block md:mt-0 underline text-purple-600 text-4xl">Trying to pass the turing test...</h1>
                    <p className="mt-8 text-justify">
                        Hi! My name is Gabriel Azevedo and 
                        I am full-stack developer based in Brazil.
                        I mostly develop web apps using React.js
                        and Node.js as the backend.
                        I enjoy using other tech such as Firebase
                        and Google's App Engine.
                    </p>
                    <p className="mt-4 text-justify">
                        In my free time I enjoy playing video games
                        in the computer, as I've been doing so since
                        my teenage days. I am very eclectic about games,
                        ranging from CS:GO, to League of Legends, to 
                        Tower Defense games like Bloons TD.
                    </p>
                </div>
            </div>
        </Layout>
    )
}