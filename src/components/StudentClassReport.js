import { Card, CardHeader } from 'semantic-ui-react';

// create report for each class, combining class report and student report for that class
function StudentClassReport({ currClass, student }) {
    const studentReport = currClass.classRoll.find(obj => obj.name === student.name);

    return (
        <Card>
            <Card.Content>
                <CardHeader>{currClass.className}</CardHeader>
                <Card.Description>
                    {currClass.report ? currClass.report : "No Class Report Written"}
                    <br/>
                    {studentReport.report ? studentReport.report : "No Report Written"}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default StudentClassReport;
