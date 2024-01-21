

function ReportCard({ name, className, value, handleChange }) {

    return (
        <>
            <label htmlFor={className + name}>{name}</label>
            <div>
                <input
                    key={className + name.index}
                    type="text"
                    name={className + name}
                    value={value || ""}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default ReportCard;