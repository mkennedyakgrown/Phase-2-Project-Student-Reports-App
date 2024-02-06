
import { Card, CardHeader } from 'semantic-ui-react';

function StudentClassReport({ currClass }) {

    return (
        <Card>
            <Card.Content>
                <CardHeader>{currClass.className}</CardHeader>
                <Card.Description>
                    {currClass.classReport ? currClass.classReport : "No Class Report Written"}
                    <br/>
                    {currClass.report ? currClass.report : "No Report Written"}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default StudentClassReport;
