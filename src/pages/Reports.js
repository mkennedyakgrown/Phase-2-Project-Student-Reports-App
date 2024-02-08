import { useState, useEffect } from "react";
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
      data[index].value.report = e.target.value;
    }
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    patchRequest();
    console.log("Submitted");
  }

  function patchRequest() {
    formData.forEach((obj) => {
      if (obj.isClass === false) {
        const id = obj.id;
        obj.value.classReport = formData.find(
          (entry) => entry.label === obj.value.className
        ).value;
        makeStudentPatchRequest(obj, id);
      }
      if (obj.isClass === true) {
        const id = obj.id;
        console.log(obj);
        makeClassPatchRequest(obj, id);
      }
    });
  }

  function makeClassPatchRequest(obj, id) {
    fetch(`${url}classes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        report: obj.value,
      }),
    })
      .then((r) => r.json())
      .then((body) => console.log(body));
  }

  function makeStudentPatchRequest(obj, id) {
    const currStudent = students.find(student => student.id === id);
    let currClass = currStudent.classes.find(
      (oneClass) => oneClass.className === obj.value.className
    );
    currClass.report = obj.value.report;
    currClass.classReport = obj.value.classReport;
    fetch(`${url}students/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currStudent),
    })
      .then((r) => r.json())
      .then((body) => console.log(body));
  }

  // function makeStudentPatchRequest(obj, id) {
  //   fetch(`${url}students/${id}`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       let currClass = data.classes.find(
  //         (oneClass) => oneClass.className === obj.value.className
  //       );
  //       currClass.report = obj.value.report;
  //       currClass.classReport = obj.value.classReport;
  //       console.log(data);
  //       fetch(`${url}students/${id}`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       })
  //         .then((r) => r.json())
  //         .then((body) => console.log(body));
  //     });
  // }

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
                userClasses,
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
