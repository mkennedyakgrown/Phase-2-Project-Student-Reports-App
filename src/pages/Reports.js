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
                obj.value.classReport = formData.find(entry => entry.label === obj.value.className).value;
                // const report = combineReports(obj, formData);
                // console.log(report);
                makePatchRequest(obj, id);
            };
        })
    };

    function makePatchRequest(obj, id) {
        fetch(`${url}students/${id}`)
            .then(r => r.json())
            .then(data => {
                let currClass = data.classes.find(oneClass => oneClass.className === obj.value.className);
                currClass.report = obj.value.report;
                currClass.classReport = obj.value.classReport;
                console.log(data);
                fetch(`${url}students/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then(r => r.json())
                    .then(body => console.log(body));
            });
    }

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