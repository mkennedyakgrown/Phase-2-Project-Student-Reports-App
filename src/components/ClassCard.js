import { useOutletContext } from "react-router-dom";

function ClassCard({ oneClass, context }) {
    function handleClick(e) {
        if (!context.userClasses.includes(oneClass)) {
            console.log(oneClass);
            console.log(context.userClasses);
            context.setUserClasses([...context.userClasses, oneClass]);
        };
    };

    return (
        <li key={oneClass.id} onClick={handleClick}>{oneClass.className}</li>
    )
};

export default ClassCard;