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
    const [formData, setFormData] = useState([
        {
            id: 0,
            label: "Name",
            value: "",
            isClass: false
        }
    ]);

    const formEntries = [];
    useEffect(() => {
        setFormData(
            userClasses?.map(oneClass => {
                formEntries.push({
                        key: oneClass.className + oneClass.id,
                        id: oneClass.id,
                        label: oneClass.className,
                        value: "",
                        isClass: true
                    });
                oneClass.classRoll.map(student => {
                    const studentObj = students?.find(obj => obj.name === student);
                    const studentReport = studentObj?.classes.find(obj => obj.className === oneClass.className);
                    const label = oneClass.className + student;
                    formEntries.push({
                        key: label,
                        id: studentObj?.id,
                        label: label,
                        value: studentReport,
                        isClass: false
                    })
                })
                return formEntries;
            })
        );
    }, [userClasses]);

    const reports = formData?.map(entry => {
        return <ReportsForm key={entry.key} {...{
            entry,
            handleChange
        }} />;
    })

    function handleChange(e, index) {
        const data = [...formData];
        data[index].value = e.target.value;
        setFormData(data);
    };

    function handleSubmit(e) {
        console.log("Submitted");
    };

    return (
        <>
            <main>
                <h1>Reports Page</h1>
                <form>
                    {reports}
                </form>
            </main>
        </>
    );
};

export default Reports;