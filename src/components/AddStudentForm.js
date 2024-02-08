import { useState, useEffect } from "react";
import { Checkbox } from "semantic-ui-react";

function AddStudentForm({ classes, students, setStudents, url }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [classOptions, setClassOptions] = useState([
        {
            id: 0,
            label: "",
            checked: false
        }
    ]);

    useEffect(() => {
        const options = classes.map((currClass) => ({
            id: currClass.id,
            label: currClass.className,
            checked: false
        }));
        setClassOptions(options);
    }, [classes])

    const classCheckboxes = classOptions.map((option) => {
        return (
            <Checkbox
                key={option.id}
                label={option.label}
                checked={option.checked}
                onChange={() => handleClassesChange(option.id)}
            />
        );
    });
    

    function handleNameChange(e) {
        setFormData({
            ...formData,
            name: e.target.value,
        });
    }

    function handleEmailChange(e) {
        setFormData({
            ...formData,
            email: e.target.value,
        });
    }

    function handleClassesChange(optionId) {
        setClassOptions([
            ...classOptions.slice(0, optionId),
            {
                ...classOptions[optionId],
                checked: !classOptions[optionId].checked
            },
            ...classOptions.slice(optionId + 1),
        ])
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newClasses = classOptions.filter(option => {
                if (option.checked === true) {
                    return {
                        className: option.label
                    }
                }
            });
        const newStudent = {
            name: formData.name,
            email: formData.email,
            classes: newClasses.map(oneClass => {
                return {
                    className: oneClass.label,
                    classReport: classes[oneClass.id].report,
                    report: ""
                }
            })
        }

        fetch(`${url}students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then(r => r.json())
            .then(data => {
                console.log(data);
                setStudents([...students, data]);
                setFormData({
                    name: "",
                    email: "",
                });
                setClassOptions(classOptions.map(option => {
                    return {
                        ...option,
                        checked: false
                    }
                }));
            });
    }

    return (
        <>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <div>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleNameChange}
                    />
                </div>
                <label htmlFor="email">Email</label>
                <div>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleEmailChange}
                    />
                </div>
                <label htmlFor="classes">Classes</label>
                <div>
                    {classCheckboxes}
                </div>
                <button type="submit">Add Student</button>
            </form>
        </>
    );
}

export default AddStudentForm;