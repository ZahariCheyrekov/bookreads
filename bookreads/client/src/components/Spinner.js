import './Spinner.css';

const Spinner = ({ spinnerSize }) => {
    return (
        <div className={`spinner ${spinnerSize ? spinnerSize : 'full'}`}></div>
    );
}

export default Spinner;