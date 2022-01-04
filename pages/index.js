import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <section className="flex flex-col h-3/4 justify-center">
        <div className="ml-2">
          <p>Hi! I am</p>
          <h1 className="text-purple-600 underline text-xl">
            Gabriel Azevedo
          </h1>
          <p>and I am someone that likes to write code.</p>
        </div>
        <div className="flex flex-row mt-4">
          <a
            target="_blank"
            href="https://github.com/GabrielOAzevedo"
          >
            <Image
              src="/images/github.svg"
              alt="my github"
              width={64}
              height={48}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/gaaoliveir/"
          >
            <Image
              src="/images/instagram.svg"
              alt="my instagram"
              width={64}
              height={48}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/goazevedo/"
          >
            <Image
              src="/images/linkedin.svg"
              alt="my github"
              width={64}
              height={48}
            />
          </a>
        </div>
      </section>
    </Layout>
  );
}
