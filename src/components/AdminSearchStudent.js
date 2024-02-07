import { useState } from "react";
import { Form, FormField, Button } from "semantic-ui-react";

function AdminSearchStudent({ searchName, setSearchName }) {
    return (
        <Form>
            <FormField>
                <label>Search for Student</label>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            </FormField>
            <Button type="button" onClick={() => setSearchName("")}>Clear</Button>
        </Form>
    );
}

export default AdminSearchStudent;