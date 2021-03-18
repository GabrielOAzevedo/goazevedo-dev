import Layout from "../components/layout";
import { formatToString } from "../lib/dates";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const postsData = getSortedPostsData();
    return {
        props: {
            postsData
        }
    }
}

export default function BlogPage({ postsData }) {
    return (
        <Layout>
            <div className="mt-8 mb-4 md:mt-16 md:mb-8">
                <h1 className="font-bold text-2xl underline">Blog posts</h1>
            </div>
            <section className="">
                {postsData.map(({id, date, title}) => {
                    const formattedDate = formatToString(date);
                    return (
                        <div key={id}>
                            <a className="text-purple-600 font-bold underline" href={`/posts/${id}`}>{title}</a>
                            <p>{formattedDate}</p>
                            <hr></hr>
                        </div>
                    );
                })}
            </section>
        </Layout>
    )
}