import Head from "next/head";
import { SITE_TITLE } from "../constants/constants";
import MyHeader from "./header";

const name = "Gabriel Azevedo";

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a blog that I made after flollowing"
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <title>{SITE_TITLE}</title>
      </Head>
      <main className="h-screen flex flex-col ml-8 mr-8 mt-8 mb-8 md:ml-20 md:mr-20">
        <MyHeader></MyHeader>
        {children}
      </main>
    </div>
  );
}

interface ILayoutProps {
  children?: any;
}
