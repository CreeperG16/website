import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test API</title>
      </Head>
      <h1>Get student data</h1>
      <input type="text" id="student_id" placeholder="OM Azonosító"></input>
      <label for="student_dob">Születési dátum</label>
      <input type="date" id="student_dob" name="student_dob"></input>
      <input
        type="button"
        id="submit"
        onClick={() => {
          console.log();
        }}
      >
        Go
      </input>

      {/* <div id="content" style="visibility: hidden;">
        <h1>hi</h1>
      </div> */}
    </div>
  );
}
