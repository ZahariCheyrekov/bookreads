const Button = ({ renderProps }) => {
    return (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="aside__button aside__button--google">
            <i className="fa-brands fa-google"></i>
            &nbsp;
            Continue with Google
        </button>
    );
}

export default Button;