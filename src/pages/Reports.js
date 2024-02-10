import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ReportsForm from "../components/ReportsForm";

function Reports() {
  const {
    login,
    isLoggedIn,
    setIsLoggedIn,
    classes,
    setClasses,
    students,
    setStudents,
    user,
    setUser,
    userClasses,
    setUserClasses,
    url,
  } = useOutletContext();
  const [formData, setFormData] = useState([]);

  function handleChange(e, entry, index) {
    const data = [...formData];
    if (entry.isClass === true) {
      data[index].value = e.target.value;
    } else {
      data[index].value = e.target.value;
    }
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    formData.forEach((obj) => {
      if (obj.isClass === true) {
        const id = obj.id;
        makeClassPatchRequest(obj, formData, id);
      }
    });
  }

  function makeClassPatchRequest(obj, formData, id) {
    // get classRoll from formData
    const classRoll = formData.filter(obj => {
      return obj.isClass === false && obj.parentClass === id;
    }).map(student => {
      return {
        name: student.name,
        report: student.value
      }
    })
    // make patch request to update class
    fetch(`${url}classes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        report: obj.value,
        classRoll: classRoll,
      }),
    })
      .then((r) => r.json())
      .then((body) => console.log(body));
  }

  return (
    <>
      <main>
        <h1>Reports Page</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">Save</button>
          <br />
          {
            <ReportsForm
              {...{
                formData,
                setFormData,
                handleChange,
                classes,
                students,
              }}
            />
          }
          <button type="submit">Save</button>
        </form>
      </main>
    </>
  );
}

export default Reports;
