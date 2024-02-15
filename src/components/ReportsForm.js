import { useEffect } from "react";
import ReportCard from "./ReportCard";
import { Divider } from "semantic-ui-react";

// create form for report text entries, handle change and submit
function ReportsForm({
  formData,
  setFormData,
  handleChange,
  classes,
}) {
  const formEntries = [];

  // on page load or classes change, get and set form data from API
  useEffect(() => {
    classes?.forEach((oneClass) => {
      formEntries.push({
        key: oneClass.className + oneClass.id,
        id: oneClass.id,
        label: oneClass.className,
        value: oneClass.report,
        name: oneClass.className,
        isClass: true,
      });
      oneClass.classRoll.forEach((student, index) => {
        formEntries.push({
          key: `${oneClass.className}${student.name}`,
          label: `${oneClass.className}${student.name}`,
          id: index,
          parentClass: oneClass.id,
          value: student.report,
          name: student.name,
          isClass: false,
        });
      });
    });
    setFormData(formEntries);
  }, [classes]);

  const reports = formData?.map((entry, index) => {
    if (entry.isClass) {
      return (
        <>
          <Divider horizontal>{`Class: ${entry.label}`}</Divider>
          <ReportCard
            key={entry.key}
            {...{
              entry,
              index,
              handleChange,
            }}
          />
        </>
      );
    }
    return (
      <ReportCard
        key={entry.key}
        {...{
          entry,
          index,
          handleChange,
        }}
      />
    );
  });

  return <>{reports}</>;
}

export default ReportsForm;
