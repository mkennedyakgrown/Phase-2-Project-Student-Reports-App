import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import AdminSearchStudent from "../components/AdminSearchStudent";
import AddStudentForm from "../components/AddStudentForm";

function Admin() {
    const {
        login,
        isLoggedIn,
        classes,
        setClasses,
        students,
        setStudents,
        user,
        setUser,
        userClasses,
        setUserClasses,
        url
    } = useOutletContext();
    const [searchName, setSearchName] = useState("");

    console.log(students);
    const studentCards = students.filter(student => {
      if (student.name !== undefined) {
        return student.name.toLowerCase().includes(searchName.toLowerCase());
      }
    });

    const displayStudents = studentCards.map((student, index) => {
      return <StudentCard key={index} {...{student}}/>;
    });
    
    return (
        <>
          <AddStudentForm {...{classes, students, setStudents, url}} />
          <AdminSearchStudent {...{searchName, setSearchName}} />
          {displayStudents}
        </>
    )
}

export default Admin