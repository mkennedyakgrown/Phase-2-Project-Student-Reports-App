import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import ClassCard from "../components/ClassCard";

function Classes() {
  const url = "http://localhost:4000/classes";
  const context = useOutletContext();

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => context.setClasses(data))
      .catch((error) => console.error(error));
  }, []);

  const classesList = context.classes.map((oneClass) => {
    return <ClassCard key={oneClass.id} {...{ oneClass, context }} />;
  });

  const userClassList = context.userClasses.map((oneClass) => {
    return <li key={oneClass.id}>{oneClass.className}</li>;
  });

  return (
    <>
      <main>
        <h1>Classes Page</h1>
        <ul>{classesList}</ul>
        <h2>User's Classes</h2>
        <ul>{userClassList}</ul>
      </main>
    </>
  );
}

export default Classes;
