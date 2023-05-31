import "./Button.css";

function Button({ children, theme = "primary" }) {
  return <button className={`${theme}`}>{children}</button>;
}

export default Button;
