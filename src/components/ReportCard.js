function ReportCard({ entry, index, handleChange }) {
    let value = "";

    if (entry.isClass === true) {
        value = entry.value;
    } else {
        value = entry.value.report;
    }

    return (
        <>
            <label htmlFor={entry.label}>{entry.name}</label>
            <div>
                <input
                    key={entry.key}
                    type="text"
                    name={entry.label}
                    value={value || ""}
                    onChange={(e) => handleChange(e, entry, index)}
                />
            </div>
        </>
    )
}

export default ReportCard;