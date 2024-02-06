//Create an Admin page that loads a card for each student, using the StudentCard component
//and a form to create new classes and add students to them.
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import StudentCard from "../components/StudentCard";

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

    const displayStudents = students.map((student, index) => {
        return (
            <StudentCard key={index} {...{student}}/>
        )
    })
    
    return (
        <>
            {displayStudents}
        </>
    )
}

export default Admin