import classes from "./Input.module.scss"

const Input = (props) => {



    return (
        <div className={classes.inputWrapper}>
            <label>{props.label}</label>
            <div>
                <input value={props.value} placeholder={props.placeholder} type={props.type} onChange={props.onChange}/>

            </div>
            <p className={classes.erromsg}>{props.errormsg}</p>
        </div >
    );
}

export default Input;