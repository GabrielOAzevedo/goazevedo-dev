import Layout from "../components/layout";

export default function ProjectsPage(props) {
    return (
        <Layout>
            <div className="h-3/4 flex flex-col justify-center">
                <div>
                    <p>Whelp...</p>
                    <p>I will bring my projects here soon...</p>
                    <p>
                        Please follow me on&nbsp;
                        <a target="_blank" href="https://github.com/GabrielOAzevedo">
                            <span className="text-purple-600 underline">GitHub</span>
                        </a>
                        &nbsp;to get the latest updates
                    </p>
                </div>
            </div>
        </Layout>
    )
}