import classes from  "./Button.scss"


const Button = props => {

    return (
        <div className={classes.div} >
            <button type={props.type} onClick = {props.onClick} >{props.text}</button>

        </div>
    )
}

export default Button;