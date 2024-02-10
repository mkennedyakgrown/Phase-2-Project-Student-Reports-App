import { useState } from "react";
import StudentClassReport from "./StudentClassReport";
import { Accordion, Card } from "semantic-ui-react";

function StudentCard({ student, classes }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const displayClasses = classes.filter(currClass => {
    return currClass.classRoll.some(obj => obj.name === student.name);
  }).map(currClass => {
    return (
        <StudentClassReport key={currClass.id} {...{ currClass, student }} />
    )
  });

  // const displayClasses = student.classes.map((currClass, index) => {
  //   return (
  //       <StudentClassReport key={index} {...{ currClass, classes }} />
  //   )
  // })

    return (
        <Card onClick={handleClick}>
          <Card.Content>
            <Card.Header>{student.name}</Card.Header>
            <Card.Meta>{student.email}</Card.Meta>
            <Card.Description>
              <Accordion>
                <Accordion.Title
                  active={isActive}
                  index={0}
                >
                  View Reports
                </Accordion.Title>
                <Accordion.Content active={isActive}>
                  {displayClasses}
                </Accordion.Content>
              </Accordion>
            </Card.Description>
          </Card.Content>
        </Card>
    )
}

export default StudentCard;