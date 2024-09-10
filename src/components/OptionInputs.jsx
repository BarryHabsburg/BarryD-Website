
const OptionInput = ({label, value, onDecrease, onIncrease, onChangeValue}) => {

    return (
    <>
    <div className="Option-Input"> 
        <label>{label}</label>
        <div className="Input-Wrapper">
            <input 
                type="number" 
                value={value}
                onChange={onChangeValue}
                step="0.01"
            />
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    </div>
    </>
    );
} 

export default OptionInput;