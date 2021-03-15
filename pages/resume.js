import Layout from "../components/layout";

export default function ResumePage(props) {
    return (
        <Layout>
            <div className="h-3/4 flex flex-col justify-center">
                <div>
                    <p>Hey...</p>
                    <p>
                        I am working on a printable resume for this page, however...
                    </p>
                    <p>
                        I am not quite done with it yet. If you want to contact me
                        please send me a message on &nbsp;
                        <a target="_blank" href="https://www.linkedin.com/in/goazevedo/">
                            <span className="text-purple-600 underline">LinkedIn</span>
                        </a>
                        &nbsp; and I will be happy to talk to you.
                    </p>
                </div>
            </div>
        </Layout>
    )
}