import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import AdminSearchStudent from "../components/AdminSearchStudent";

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

    const studentCards = students.filter(student => {
      if (student.name !== undefined) {
        return student.name.toLowerCase().includes(searchName.toLowerCase());
      }
    });

    const displayStudents = studentCards.map((student, index) => {
      console.log(student);
      return <StudentCard key={index} {...{student}}/>;
    });
    
    return (
        <>
          <AdminSearchStudent {...{searchName, setSearchName}} />
          {displayStudents}
        </>
    )
}

export default Admin