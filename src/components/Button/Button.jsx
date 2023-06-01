import "./Button.css";

function Button({ children, theme = "primary", onClick = () => {}, disabled = false }) {
    return (
        <button onClick={onClick} className={`${theme}`} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
