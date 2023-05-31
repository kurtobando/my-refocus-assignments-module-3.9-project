import "./Button.css";

function Button({ children, theme = "primary", onClick = () => {} }) {
  return (
    <button onClick={onClick} className={`${theme}`}>
      {children}
    </button>
  );
}

export default Button;
