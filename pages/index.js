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
      <input type="button" id="submit" onClick={() => console.log("Hi")}>
        Ok
      </input>
    </div>
  );
}
