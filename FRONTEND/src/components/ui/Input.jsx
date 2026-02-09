export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label fw-semibold" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        id={name}
        className={`form-control ${error ? "is-invalid" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}