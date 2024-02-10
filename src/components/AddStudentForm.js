import { useState, useEffect } from "react";
import { Checkbox } from "semantic-ui-react";

function AddStudentForm({ classes, setClasses, students, setStudents, url }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [classOptions, setClassOptions] = useState([
        {
            id: 0,
            label: "",
            checked: false
        }
    ]);

    // on load and when classes change, set classOptions
    useEffect(() => {
        const options = classes.map((currClass) => ({
            id: currClass.id,
            label: currClass.className,
            checked: false
        }));
        setClassOptions(options);
    }, [classes])

    // render class checkboxes
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
    

    function handleFirstNameChange(e) {
        setFormData({
            ...formData,
            firstName: e.target.value,
        });
    };

    function handleLastNameChange(e) {
        setFormData({
            ...formData,
            lastName: e.target.value,
        });
    };
    

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
        const studentName = `${formData.firstName} ${formData.lastName}`;

        if (students.some((student) => student.name === studentName)) {
            alert("Student with that name already exists");
            return
        } else if (!classOptions.some(option => option.checked === true)) {
            alert("Must select at least one class");
            return
        } else {

            const newClasses = classOptions.filter(option => {
                    if (option.checked === true) {
                        return {
                            className: option.label
                        }
                    }
                });
            const newStudent = {
                name: studentName,
                email: formData.email
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
                    setStudents([...students, data]);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                    });
                    setClassOptions(classOptions.map(option => {
                        return {
                            ...option,
                            checked: false
                        }
                    }));
                    console.log(data);
                });

            newClasses.forEach(oneClass => {
                console.log(oneClass);
                const classToPatch = classes.find(currClass => currClass.className === oneClass.label);
                console.log(classToPatch);
                fetch(`${url}classes/${classToPatch.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        classRoll: [...classToPatch.classRoll, {
                            name: studentName,
                            report: "",
                        }]
                    })
                })
                    .then(r => r.json())
                    .then(data => {
                        console.log(data);
                        setClasses(classes.map(currClass => {
                            if (currClass.id === classToPatch.id) {
                                return data
                            } else {
                                return currClass
                            }
                        }))
                    });
            });
        }
    };

    return (
        <>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name</label>
                <div>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <label htmlFor="lastName"> Last Name</label>
                <div>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleLastNameChange}
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
                <div id="classes">
                    {classCheckboxes}
                </div>
                <button type="submit">Add Student</button>
            </form>
        </>
    );
}

export default AddStudentForm;