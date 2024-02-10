import { Input } from "semantic-ui-react";
import { Label } from "semantic-ui-react";

function ReportCard({ entry, index, handleChange }) {

  return (
    <>
      {entry.isClass ? <Label color="green" ribbon htmlFor={entry.label}>{`Class: ${entry.label}`}</Label> : <Label pointing="below" htmlFor={entry.label}>{entry.name}</Label>}
      <div>
        <Input
          key={entry.key}
          type="text"
          name={entry.label}
          value={entry.value || ""}
          onChange={(e) => handleChange(e, entry, index)}
          fluid
        />
      </div>
    </>
  );
}

export default ReportCard;
