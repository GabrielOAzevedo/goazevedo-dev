import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";

export default function ANewYearBegins() {
  return (
    <Layout>
      <Head>
        <title>A new Year Begins</title>
      </Head>
      <div className="mt-8">
        <h1 className="text-lg">
          So, a new year begins...
        </h1>
        <p className="text-justify">
          And what that brings to us? Well, to me I believe
          it brings more of the same, honestly, I was never
          one to live with the mysticism that surronds the
          new year's eve, and to me it was just another day.
        </p>
        <p>However...</p>
        <p>
          I believe that it is important to establish goals,
          not only that, but also devise a plan on how to
          achieve those goals. A goal without a plan is only
          a dream.
        </p>
        <p className="mt-4">
          So... go for it! Devise a plan, and I am sure you
          will achieve whatever you wish to achieve this
          year.
        </p>
        <p>That's it for today. Have a great year!</p>
      </div>
    </Layout>
  );
}
