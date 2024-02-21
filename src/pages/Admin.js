import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import AdminSearchStudent from "../components/AdminSearchStudent";
import AddStudentForm from "../components/AddStudentForm";
import { Divider } from "semantic-ui-react";

// create admin page for adding students, searching students, and viewing students' reports
function Admin() {
    const {
        classes,
        setClasses,
        students,
        setStudents,
        url
    } = useOutletContext();
    const [searchName, setSearchName] = useState("");

    // filter students for search
    const studentCards = students.filter(student => {
      if (student.name !== undefined) {
        return student.name.toLowerCase().includes(searchName.toLowerCase());
      } else {
        return false;
      }
    });

    // create cards for students
    const displayStudents = studentCards.map((student, index) => {
      return <StudentCard key={index} {...{student, classes}}/>;
    });
    
    return (
        <>
          <Divider horizontal style={{textAlign: "center"}} >Add a Student</Divider>
          <AddStudentForm {...{classes, setClasses, students, setStudents, url}} />
          <Divider horizontal style={{textAlign: "center"}} >Search Students</Divider>
          <AdminSearchStudent {...{searchName, setSearchName}} />
          <Divider />
          {displayStudents}
        </>
    )
}

export default Admin