// create individual class card for class student is enrolled in

function ClassCard({ oneClass, context }) {
  function handleClick(e) {
    if (!context.userClasses.includes(oneClass)) {
      context.setUserClasses([...context.userClasses, oneClass]);
    }
  }

  return (
    <li key={oneClass.id} onClick={handleClick}>
      {oneClass.className}
    </li>
  );
}

export default ClassCard;
