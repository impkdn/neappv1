import React from "react";
import classes from "./Table.module.scss"

const TableContent = (props) => {

    return (
        <table className={classes.itemTable}>
            <tr className={classes.rowContent}>
                <td className="objectItem">{props.API}</td>
                <td className="objectItem">{props.Auth}</td>
                <td className="objectItem">{props.Category}</td>
                <td className="objectItem">{props.Cors}</td>
                <td className="objectItem">{props.Description}</td>
                <td className="objectItem">{props.HTTPS}</td>
                <td className="objectItem">{props.Link}</td>
            </tr>

        </table>
    );
}

export default TableContent;