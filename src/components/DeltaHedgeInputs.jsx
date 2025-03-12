const DeltaHedgeInputs = ({label, label_type, id_name, data, onChangeValue, place_holder}) => {
    // create a min of 0. Need a boolean condition, since date has no minimum.
    return (
    <>
    <div className="Option-Input">
        <label htmlFor={id_name}>{label}</label>
        <div className="Input-Wrapper">
            <input
                type={label_type}
                id={id_name}
                name={id_name}
                value={data}
                onChange={onChangeValue}
                placeholder={place_holder}
            ></input>
        </div>
    </div>
    </>
    );
}

export default DeltaHedgeInputs;