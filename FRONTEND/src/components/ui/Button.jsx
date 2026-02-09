export default function Button({ text, type = "button", onClick, disabled }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn btn-dark w-100 py-2"
    >
      {text}
    </button>
  );
}