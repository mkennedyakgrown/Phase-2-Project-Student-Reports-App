import { Input } from "semantic-ui-react";
import { Label } from "semantic-ui-react";

function ReportCard({ entry, index, handleChange }) {
  let value = "";

  if (entry.isClass === true) {
    value = entry.value;
  } else {
    value = entry.value.report;
  }

  return (
    <>
      {entry.isClass ? <Label color="green" ribbon htmlFor={entry.label}>{`Class: ${entry.label}`}</Label> : <Label pointing="below" htmlFor={entry.label}>{entry.name}</Label>}
      <div>
        <Input
          key={entry.key}
          type="text"
          name={entry.label}
          value={value || ""}
          onChange={(e) => handleChange(e, entry, index)}
          fluid
        />
      </div>
    </>
  );
}

export default ReportCard;
