import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ReportsForm from "../components/ReportsForm";

function Reports() {
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
        setUserClasses
    } = useOutletContext();
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/classes")
          .then(r => r.json())
          .then(data => setClasses(data));
        fetch("http://localhost:4000/students")
          .then(r => r.json())
          .then(data => setStudents(data));
      }, []);

    function handleChange(e, entry, index) {
        const data = [...formData];
        if (entry.isClass === true) {
            data[index].value = e.target.value;
        } else {
            data[index].value.report = e.target.value;
        }
        setFormData(data);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <>
            <main>
                <h1>Reports Page</h1>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Save</button>
                    <br />
                    {<ReportsForm {...{formData, setFormData, handleChange, userClasses, students}} />}
                    <button type="submit">Save</button>
                </form>
            </main>
        </>
    );
};

export default Reports;