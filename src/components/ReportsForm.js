import { useEffect } from "react";
import ReportCard from "./ReportCard";

function ReportsForm({ formData, setFormData, handleChange, userClasses, students }) {
    const formEntries = [];
    useEffect(() => {
        userClasses?.forEach(oneClass => {
            formEntries.push({
                    key: oneClass.className + oneClass.id,
                    id: oneClass.id,
                    label: oneClass.className,
                    value: oneClass.report,
                    name: oneClass.className,
                    isClass: true
                });
            oneClass.classRoll.map(student => {
                const studentObj = students?.find(obj => obj.name === student);
                const studentReport = studentObj?.classes.find(obj => obj.className === oneClass.className);
                const label = oneClass.className + student;
                const name = student;
                formEntries.push({
                    key: label,
                    id: studentObj?.id,
                    label: label,
                    value: studentReport,
                    name: name,
                    isClass: false
                })
            })
        });
        setFormData(formEntries);
    }, [userClasses]);

    const reports = formData?.map((entry, index) => {
        return <ReportCard key={entry.key} {...{
            entry,
            index,
            handleChange
        }} />;
    })

    return (
        <>
            {reports}
        </>
    )
}

export default ReportsForm;