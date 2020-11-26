import React from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        width : "80%",
        marginTop : theme.spacing(2),
        marginLeft : "10%",
        marginRight : "80%",
        minWidth : "500px",
        padding : theme.spacing(1),
    },
}));


function List(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell component={"th"}>Equation</TableCell>
                        <TableCell component={"th"} colSpan={2}>Answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.list.map((row, key) => (
                        <TableRow key={key}>
                            <TableCell>
                                {row.question}
                            </TableCell>
                            <TableCell width={"20px"} align={"center"}>
                                =
                            </TableCell>
                            <TableCell>
                                {row.answer}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default List;