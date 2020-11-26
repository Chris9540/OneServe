import React, {useState} from 'react';
import {Paper, TextField, Button, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Services} from "../Services";
import Popover from "@material-ui/core/Popover";


const useStyles = makeStyles((theme) => ({
    root: {
        width : "80%",
        marginTop : theme.spacing(2),
        marginLeft : "10%",
        marginRight : "80%",
        minWidth : "500px",
        padding : theme.spacing(1),
    },
    form : {
      display : "flex",
      flexDirection : "column",
    },
    container : {
        display : "flex",
        flexDirection: "row",
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    answer : {
        minWidth : "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    error : {
        padding : theme.spacing(2),
    }
}));
const pattern = /^[0-9 .*()+-]+$/

function InputForm(props) {
    const classes = useStyles();
    const [anchorElement, setAnchorElement] = useState(null);
    const [equation, setEquation] = useState('');
    const [answer, setAnswer] = useState(0);

    const toggleError = (e) => {
        if (e === null) {
            setAnchorElement(null);
        }
        else {
            setAnchorElement(e.currentTarget);
        }
    }

    const openError = Boolean(anchorElement);
    const idError = open ? 'simple-popover' : undefined;

    const checkEquation = (value) => {
        if (value === '' || pattern.test(value)) {
            setEquation(value);
        }
    }

    const calculate = (e) => {
        let value = null;
        try {
            value = parseInt(eval(equation))
        }
        catch (error){
            toggleError(e);
        }
        finally {
            if (value != null && equation !== '') {
                setAnswer(value);
                Services.save({
                    question : equation,
                    answer : value
                }).then(res=>{
                    if (res.status === 200) {
                        props.updateList();
                        clear();
                    }
                })
            }
            else {
                clear();
            }
        }
    }

    const clear = () => {
        setEquation('');
        setAnswer(0);
    }


    return (
        <Paper elevation={3} className={classes.root}>
            <form noValidate autoComplete={"off"} className={classes.form}>
                <Typography variant={"body1"}>
                    Please enter and equation using + - * ( ) and any positive or negative numbers
                </Typography>
                <div className={classes.container}>
                    <TextField
                        id={"equation"}
                        label={"Equation"}
                        required={true}
                        value={equation}
                        onChange={e=>checkEquation(e.target.value)}
                    />
                    <Typography variant={"h6"} className={classes.answer}>
                        = {answer}
                    </Typography>
                    <Button id={"btnCalculate"} aria-describedby={idError} variant={"contained"} color={"primary"} onClick={(e)=>calculate(e)}>
                        Calculate
                    </Button>
                    <Button variant={"contained"} color={"secondary"} onClick={clear}>
                        Clear
                    </Button>
                </div>
                <Popover
                    id={idError}
                    open={openError}
                    anchorEl={anchorElement}
                    onClose={()=>toggleError(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.error} variant={"h6"}>
                        The equation entered does not result in a number. Please try again.
                    </Typography>
                </Popover>
            </form>
        </Paper>
    )
}

export default InputForm;