import Head from "next/head";
import Layout from "../../components/layout";
import { formatToString } from "../../lib/dates";
import { getAllPostIds, getPostData } from "../../lib/posts";


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <section>
                <div>
                    <div className="mt-8 mb-4 md:mt-16 md:mb-8">
                        <h1 className="text-purple-700 font-bold text-2xl underline">{postData.title}</h1>
                    <p>{formatToString(postData.date)}</p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.htmlContent}}></div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}