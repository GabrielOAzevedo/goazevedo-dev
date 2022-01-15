import Head from "next/head";
import React, { useRef } from "react";
import Canvas from "../../components/canvas";
import Layout from "../../components/layout";

export default function ANewYearBegins() {
  return (
    <Layout>
      <Head>
        <title>The Neuron</title>
        <style scoped>
          {`p {
              text-align: justify;
            }`}
        </style>
      </Head>
      <div className="mt-8 flex flex-col">
        <h1 className="text-lg mb-8">
          We are going to talk biology here.
        </h1>
        <p className="text-justify">
          The Neuron, or the nerve cell, as it is commonly
          called, is a type of cell that works by emitting
          electrical and chemical pulses to other cells, and
          well, mostly, other neurons, and those pulses
          function as a mens to tell other body parts what
          to do, as an example, muscle contraction happens
          because our muscle is connected to a type of
          nervous cell, that emits an electrical pulse,
          which in turn activates a protein chain, making
          the muscle contract and exerting force when we are
          lifting weights in the gym, for example. But how
          does that work? And why is it important? We will
          discuss that in a second, but first, lets learn a
          bit more about biology.
        </p>
        <p>
          Biological structures are mostly composed of four
          main types of organic macromolecules:
          Polysaccharides, Proteins, Lipids and Nucleic
          Acids. Polysaccharides or polycarbohydrates are
          the main source of energy for our cells, and I
          mean not only electrical energy, but mainly
          chemical energy, we won't go into detail here, but
          the carbohydrates are used to regenerate ADP into
          ATP, which is the principal energy component of
          the cell. Nucleic acids are used in information
          storage, such as in the format of DNA and RNA, you
          may think of DNA as a hard drive, where
          information is stored for longer periods of time,
          while the RNA stores information in a more short
          term much like the RAM in computers.
        </p>
        <p>
          The last two biopolymers, lipids and proteins, are
          what we are going to focus here, mostly because
          they compose a very important structure, that,
          while present in all living cells, is going to be
          important for our understanding of how the neurons
          communicate, electrically, and chemically. The
          name of that structure is{" "}
          <span
            className="underline"
            style={{ color: "rgb(124, 58, 237)" }}
          >
            The Plasma Membrane
          </span>
          .
        </p>
        <Canvas></Canvas>
        <p>
          The plasma membrane, is a structure which its main
          function is to delimiter a cell perimeter, as it
          separates what composes the cell, from what is the
          intracellular medium, which is sometimes, a little
          bit hostile to the cell well-being. But most
          importantly, this separation provided by the
          plasma membrane is what enables the electrical
          pulses in the neuron, by a process that I will try
          to explain next.
        </p>
      </div>
    </Layout>
  );
}
