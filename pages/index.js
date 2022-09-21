import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const $ = document.querySelector;

    $("#submit").addEventListener("click", () => console.log("hi"));
  });

  return (
    <div>
      <Head>
        <title>Test API</title>
      </Head>
      <h1>Get student data</h1>
      <input type="text" id="student_id" placeholder="OM Azonosító"></input>
      <input type="date" id="student_dob" placeholder="Születési dátum"></input>
      <button id="submit">Ok</button>

      <div style="visibility: hidden;" id="data">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
