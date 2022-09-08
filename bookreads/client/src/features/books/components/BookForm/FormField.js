import './FormField.css';

const FormField = ({ htmlFor, content, type, textearea, value, onChange }) => {
    return (
        <>
            <label
                htmlFor={htmlFor}
                className="form__label"
            >
                {content}
            </label>
            {textearea
                ? <textarea
                    name={htmlFor}
                    className="form__input form__textarea"
                    value={value} onChange={onChange}
                />
                :
                <input
                    type={type ? type : 'text'}
                    name={htmlFor}
                    className="form__input"
                    value={value}
                    onChange={onChange}
                />
            }
        </>
    );
}

export default FormField;