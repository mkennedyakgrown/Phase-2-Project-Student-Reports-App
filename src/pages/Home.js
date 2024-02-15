import { Outlet, useOutletContext } from "react-router-dom";
import { Header } from "semantic-ui-react";

function Home() {
  const context = useOutletContext();

  return (
    <>
      <main>
        <br />
        <Header as="h1" textAlign="center">Welcome to the Classroom! Use the NavBar above to navigate.</Header>
        <Header as="h2" textAlign="center" href="/admin">Admin:</Header>
        <Header as="h4" textAlign="center">Add new students and search students' progress reports</Header>
        <Header as="h2" textAlign="center" href="/reports">Reports:</Header>
        <Header as="h4" textAlign="center">Write and save progress reports for students by class</Header>
      </main>
    </>
  );
}

export default Home;
