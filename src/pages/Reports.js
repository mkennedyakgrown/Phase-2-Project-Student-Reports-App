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
        setUserClasses,
        url
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
    };

    function handleSubmit(e) {
        e.preventDefault();
        patchRequest();
        console.log("Submitted");
    };

    function patchRequest() {
        console.log(formData);
        formData.forEach(obj => {
            if (obj.isClass === false) {
                const id = obj.id;
                console.log(obj.name);
                const report = combineReports(obj, formData);
                console.log(report);
            };
        })
    };

    function combineReports(obj, formData) {
        const studentReport = obj.value.report;
        const currClass = obj.value.className;
        const classReport = formData.find(entry => entry.label === currClass).value;
        const combinedReport = `\t${classReport}\n\t${studentReport}`;
        return combinedReport;
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