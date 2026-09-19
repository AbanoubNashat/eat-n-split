export default function Button({ children, onClick, onSubmit }) {
  return (
    <button className="button" onClick={onClick} onSubmit={onSubmit}>
      {children}
    </button>
  );
}
