import Layout from "../components/layout";

export default function ProjectsPage(props) {
    return (
        <Layout>
            <div className="h-3/4 flex flex-col justify-center">
                <div>
                    <a href="https://inspector.goazevedo.dev/">
                        <span className="text-purple-600 underline">React Component Inspector</span>
                    </a>
                    &nbsp;-&nbsp;
                    <a target="_blank" href="https://github.com/GabrielOAzevedo/component-inspector">
                        <span className="text-purple-600 underline">&lt;GitHub/&gt;</span>
                    </a>
                    <p>
                        This is the official repository of the best component inspector that I know of, 
                        and I know a total of one. Please feel free to clone, create new functionality, 
                        use it as your own or do whatever you want to do with this. This is a work in 
                        progress project (WIP) and I will try my best to save it from github limbo, a 
                        place where all personal projects eventually end.
                    </p>
                </div>
            </div>
            <div>
                <p>
                    Please follow me on&nbsp;
                    <a target="_blank" href="https://github.com/GabrielOAzevedo">
                        <span className="text-purple-600 underline">GitHub</span>
                    </a>
                    &nbsp;to get the latest updates
                </p>
            </div>
        </Layout>
    )
}