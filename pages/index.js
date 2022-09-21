import Head from "next/head";

export default function Home() {
  let data = "";

  return (
    <div>
      <Head>
        <title>Test API</title>
      </Head>
      <h1>hi</h1>

      <h1>Get student data</h1>
      <input type="text" id="student_id" placeholder="OM Azonosító"></input>
      <input type="date" id="student_dob"></input>
      <button id="submit" onClick={(data = "hello")}>
        Ok
      </button>

      <div>{data}</div>
    </div>
  );
}
