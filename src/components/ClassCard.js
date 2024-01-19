import { useOutletContext } from "react-router-dom";

function ClassCard({ oneClass, context }) {
    function handleClick(e) {
        console.log(`${oneClass.className} was clicked`);
    };

    return (
        <li key={oneClass.id} onClick={handleClick}>{oneClass.className}</li>
    )
};

export default ClassCard;