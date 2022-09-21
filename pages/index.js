import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test API</title>
      </Head>
      <h1>Get student data</h1>
      <input type="text" id="student_id" placeholder="OM Azonosító"></input>
      <input type="date" id="student_dob" placeholder="Születési dátum"></input>
      <button
        onClick={() => {
          const $ = document.querySelector;
          $("#data").style.visibility = "visible";
        }}
      >
        Ok
      </button>

      <div style="visibility: hidden;" id="data">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
