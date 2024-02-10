import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import AdminSearchStudent from "../components/AdminSearchStudent";
import AddStudentForm from "../components/AddStudentForm";

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
      }
    });

    const displayStudents = studentCards.map((student, index) => {
      return <StudentCard key={index} {...{student, classes}}/>;
    });
    
    return (
        <>
          <AddStudentForm {...{classes, setClasses, students, setStudents, url}} />
          <AdminSearchStudent {...{searchName, setSearchName}} />
          {displayStudents}
        </>
    )
}

export default Admin