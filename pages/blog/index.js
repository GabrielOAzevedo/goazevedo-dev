import Layout from "../../components/layout";
import styles from "./styles/blog.module.css";

export default function BlogPage(props) {
  return (
    <Layout>
      <div className="h-3/4 flex flex-col justify-start">
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
          <a className="mt-4" href="./blog/the_neuron">
            <h2 className={"underline " + styles.blogtitle}>
              2. An important pulse
            </h2>
            <p className={"text-sm " + styles.description}>
              <span className={"text-xs"}>13/01/2021</span>{" "}
              <br />{" "}
              <span>
                How a membrane and a couple atoms define the
                most advanced biological structure?
              </span>
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
