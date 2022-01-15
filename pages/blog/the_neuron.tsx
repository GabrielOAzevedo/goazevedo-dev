import { request } from "https";
import Head from "next/head";
import React, { useRef } from "react";
import Canvas from "../../components/canvas";
import Layout from "../../components/layout";

function drawMembrane(ctx: CanvasRenderingContext2D) {
  drawMockMembrane(ctx);
  drawText(ctx);
}

function drawMockMembrane(ctx: CanvasRenderingContext2D) {
  ctx.canvas.width = 480;
  ctx.canvas.height = 360;

  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#95b0e8";
  ctx.lineWidth = 16;
  ctx.moveTo(-200, 200);
  ctx.quadraticCurveTo(ctx.canvas.width / 2, 0, ctx.canvas.width + 200, 200);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#a9dbb6";
  ctx.lineWidth = 16;
  ctx.moveTo(-350, 350);
  ctx.quadraticCurveTo(ctx.canvas.width / 2, 0, ctx.canvas.width + 350, 350);
  ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
  ctx.lineTo(0, ctx.canvas.height);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

function drawText(ctx: CanvasRenderingContext2D) {
  const extraCellText = "Extracellular Fluid";
  const membText = "Cell Membrane";
  const intraCellText = "Cytoplasm";

  ctx.font = "24px Calibri";
  ctx.textAlign = "center";
  ctx.fillStyle = "#000000";
  ctx.fillText(extraCellText, ctx.canvas.width / 2, 50);
  ctx.fillText(membText, ctx.canvas.width / 2, 140);
  ctx.fillText(intraCellText, ctx.canvas.width / 2, 250);
}

function drawTransmembrane(ctx: CanvasRenderingContext2D) {
  drawMockMembrane(ctx);
  const frame = Math.floor(new Date().getMilliseconds() / 500);
  const frame2 = Math.floor(new Date().getMilliseconds() / 250) + 1;
  ctx.font = "24px Calibri";
  ctx.textAlign = "center";
  ctx.fillStyle = "#000000";
  ctx.fillText("K+", 100, 80 + frame * 70);
  ctx.fillText("K+", 180, 60 + frame * 70);
  ctx.fillText("K+", 260, 70 + frame * 70);
  ctx.fillText("K+", 340, 60 + frame * 70);
  ctx.fillText("Na+", 120, 140 - frame * 70);
  ctx.fillText("Na+", 200, 150 - frame * 70);
  ctx.fillText("Na+", 280, 130 - frame * 70);
  ctx.fillText("Na+", 360, 140 - frame * 70);
}

export default function ANewYearBegins() {
  return (
    <Layout>
      <Head>
        <title>The Neuron</title>
      </Head>
      <div className="mt-8 flex flex-col">
        <h1 className="text-lg mb-8">We are going to talk biology here.</h1>
        <P>
          The Neuron, or the nerve cell, as it is commonly called, is a type of cell that works by emitting electrical
          and chemical pulses to other cells, and well, mostly, other neurons, and those pulses function as a mens to
          tell other body parts what to do, as an example, muscle contraction happens because our muscle is connected to
          a type of nervous cell, that emits an electrical pulse, which in turn activates a protein chain, making the
          muscle contract and exerting force when we are lifting weights in the gym, for example. But how does that
          work? And why is it important? We will discuss that in a second, but first, lets learn a bit more about
          biology.
        </P>
        <P>
          Biological structures are mostly composed of four main types of organic macromolecules: Polysaccharides,
          Proteins, Lipids and Nucleic Acids. Polysaccharides or polycarbohydrates are the main source of energy for our
          cells, and I mean not only electrical energy, but mainly chemical energy, we won't go into detail here, but
          the carbohydrates are used to regenerate ADP into ATP, which is the principal energy component of the cell.
          Nucleic acids are used in information storage, such as in the format of DNA and RNA, you may think of DNA as a
          hard drive, where information is stored for longer periods of time, while the RNA stores information in a more
          short term much like the RAM in computers.
        </P>
        <P>
          The last two biopolymers, lipids and proteins, are what we are going to focus here, mostly because they
          compose a very important structure, that, while present in all living cells, is going to be important for our
          understanding of how the neurons communicate, electrically, and chemically. The name of that structure is{" "}
          <span className="underline" style={{ color: "rgb(124, 58, 237)" }}>
            The Plasma Membrane
          </span>
          .
        </P>
        <Canvas className="mt-8 mb-8" drawFunction={drawMembrane}></Canvas>
        <P>
          The plasma membrane, is a structure which its main function is to delimiter a cell perimeter, as it separates
          what composes the cell, from what is the intracellular medium. This separation occours mainly due to the
          hydrophobic nature of the membrane, which separates two highly aqueous, and very different mediums: the
          extracellular fluid and the cytoplasm. While the extracellular fluid hosts a plethora of biochemicals and
          other molecules, the cytoplasm is a much more controlled environment, as all the organelles are distributed in
          there, alongside a much different array of organic and non-organic molecules in comparison with the
          extracellular medium.
        </P>
        <P>
          As noted, the plasma membrane serves the purpose of a great filter, preventing molecules from outside the cell
          from infiltrating the cytoplasm (and possibly causing havoc inside it), however there are a handful of
          different proteins that allows the flow of specific small molecules, and sometimes, atoms. These proteins are
          called transmembrane proteins.
        </P>
        <P>
          Most transmembrane proteins function as an specific gate to a chemical, and just like a gate, it can be found
          at two different states, open and closed. If the gate is open, it will allow controlled flow of a chemical
          (most likely, an Ion, such as potassium and sodium) from one side to the other, while at the closed state, no
          ion can cross the membrane. This kind of transmembrane proteins allow controlled flow of these molecules from
          inside-out, and outside-in to the cytoplasm, and that is very very important, because it allows the cell to
          control the osmotic pressure between the different environments (intra and extracellular). This osmotic
          pressure difference also means that there is possibly a voltage difference between the same environments,
          caused by the difference of ions inside and outside the cell, and that control of the voltage difference is
          what enable the neurons to fire electrical pulses!
        </P>
        <Canvas className="mt-8 mb-8" drawFunction={drawTransmembrane}></Canvas>
        <P>
          That oscillating pattern gives the neuron a voltaic charge, that pulses somewhat uniformly along the membrane,
          in a structure called the axon. That charge keeps going until it finds another neuron, and that neuron decides
          chemically, if it should or not excite its own membrane, creating another pulse, and that keeps going until an
          neuron acts as an insulator, preventing the charge from going forward. This pattern of activation/deactivation
          is what have inspired the artificial neuron networks of nowadays, but that's an story for another day.
        </P>
        <p className="mt-8">Hope you enjoyed this story, and please stay tuned for others. See ya.</p>
      </div>
    </Layout>
  );
}

function P({ children }) {
  return <p className="mt-2 text-justify">{children}</p>;
}
