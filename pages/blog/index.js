import Layout from "../../components/layout";
import styles from "./styles/blog.module.css";

export default function BlogPage(props) {
  return (
    <Layout>
      <div className="mt-8 h-3/4 flex flex-col justify-start">
        <div className="flex flex-col mt-4">
          <a href="./blog/new_year_begins">
            <h2 className={"underline " + styles.blogtitle}>
              1. A new year begins
            </h2>
            <p className={"text-sm " + styles.description}>
              <span className={"text-xs"}>03/01/2021</span>{" "}
              <br />{" "}
              <span>What changed in this past year?</span>
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
