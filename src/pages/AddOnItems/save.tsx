/* eslint-disable no-sparse-arrays */
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";

const Lined = styled("div")(() => ({
    height: "30px",
    width: "3px",
    background: "rgb(225, 229, 233)",
    margin: "0 auto",
}));

const LEFT_CONDITION_DROPDOWN_VALUES = [
    "name",
    ,
    "id",
    ,
    "nametype",
    ,
    "recclass",
    ,
    "mass",
    ,
    "fall",
    ,
    "year",
    ,
    "reclat",
    ,
    "reclong",
    ,
    "geolocation",
    ,
];

const OPERATOR_DROPDOWN_VALUES = [
    "Equals",
    "GreaterThan",
    "LessThan",
    "Contain",
    "Not Contain",
    "Regex",
];

const SUB_VALUE = {
    leftCondition: "name",
    operator: "Equals",
    value: "",
};

const ADDING_VALUE = {
    leftCondition: "name",
    operator: "Equals",
    value: "",
    items: [],
};

type IVALUE = {
    [key: string]: string;
    leftCondition: string;
    operator: string;
    value: string;
};

type IADDING_VALUE = {
    [key: string]: any;
    leftCondition: string;
    operator: string;
    value: string;
    items: IVALUE[];
};

export default function AddOnItems() {
    const theme = useTheme();
    const classes: any = makeStyle(theme);

    const [state, setState] = useState<IADDING_VALUE[] | []>([ADDING_VALUE]);

    const handleChange = (
        e: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>,
        key: number,
        subKey: number | undefined
    ) => {
        const __state = JSON.parse(JSON.stringify(state));
        const name = e.target.name;
        if (subKey === undefined) {
            __state[key][name] = e.target.value;
        } else {
            __state[key].items[subKey][name] = e.target.value;
        }
        setState([...__state]);
    };

    const addInValues = () => {
        setState([...state, ADDING_VALUE]);
    };

    const addInSubValues = (key: number, subkey: number | undefined) => {
        const __state = [...state];
        subkey === undefined
            ? __state[key].items.unshift(SUB_VALUE)
            : __state[key].items.push(SUB_VALUE);

        console.log(__state);
        setState(__state);
    };

    return (
        <Paper variant="outlined" sx={classes.container}>
            {state.map((data, dataKey) => {
                return (
                    <>
                        <div style={classes.wrapper}>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    <InputLabel id="demo-simple-select-label">
                                        Left Condition
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="leftCondition"
                                        value={data.leftCondition}
                                        label="Left Condition"
                                        onChange={(e) =>
                                            handleChange(e, dataKey, undefined)
                                        }
                                    >
                                        {LEFT_CONDITION_DROPDOWN_VALUES.map(
                                            (val, key) => (
                                                <MenuItem value={val} key={key}>
                                                    {val}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    <InputLabel id="demo-simple-select-label">
                                        Operator
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="operator"
                                        value={data.operator}
                                        label="Operator"
                                        onChange={(e) =>
                                            handleChange(e, dataKey, undefined)
                                        }
                                    >
                                        {OPERATOR_DROPDOWN_VALUES.map(
                                            (val, key) => (
                                                <MenuItem key={key} value={val}>
                                                    {val}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    <TextField
                                        sx={classes.input100}
                                        id="outlined-required"
                                        name="value"
                                        label="Value"
                                        value={data.value}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleChange(e, dataKey, undefined)
                                        }
                                    />
                                </FormControl>
                            </div>
                            <div style={classes.actionButton}>
                                <AddIcon
                                    color={"primary"}
                                    fontSize="medium"
                                    className="pointer"
                                    onClick={() =>
                                        addInSubValues(dataKey, undefined)
                                    }
                                />
                                <DeleteIcon
                                    color={"warning"}
                                    fontSize="medium"
                                    className="pointer"
                                />
                            </div>

                            {data.items.map(
                                (subData: IVALUE, subKey: number) => {
                                    return (
                                        <div
                                            className="orarray"
                                            key={"subData" + subKey}
                                        >
                                            <div style={classes.linedWrapper}>
                                                <Lined />
                                                <Typography
                                                    variant="h2"
                                                    color={"gray"}
                                                >
                                                    OR
                                                </Typography>
                                                <Lined />
                                            </div>
                                            <div>
                                                <FormControl
                                                    sx={{ m: 1, minWidth: 250 }}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Left Condition
                                                    </InputLabel>

                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        name="leftCondition"
                                                        value={
                                                            subData.leftCondition
                                                        }
                                                        label="Left Condition"
                                                        onChange={(e) =>
                                                            handleChange(
                                                                e,
                                                                dataKey,
                                                                subKey
                                                            )
                                                        }
                                                    >
                                                        {LEFT_CONDITION_DROPDOWN_VALUES.map(
                                                            (val, key) => (
                                                                <MenuItem
                                                                    value={val}
                                                                    key={key}
                                                                >
                                                                    {val}
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div>
                                                <FormControl
                                                    sx={{ m: 1, minWidth: 250 }}
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        Operator
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        name="operator"
                                                        value={subData.operator}
                                                        label="Operator"
                                                        onChange={(e) =>
                                                            handleChange(
                                                                e,
                                                                dataKey,
                                                                subKey
                                                            )
                                                        }
                                                    >
                                                        {OPERATOR_DROPDOWN_VALUES.map(
                                                            (val, key) => (
                                                                <MenuItem
                                                                    key={key}
                                                                    value={val}
                                                                >
                                                                    {val}
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div>
                                                <FormControl
                                                    sx={{ m: 1, minWidth: 250 }}
                                                >
                                                    <TextField
                                                        sx={classes.input100}
                                                        id="outlined-required"
                                                        name={"value"}
                                                        label="Value"
                                                        value={subData.value}
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>
                                                        ) =>
                                                            handleChange(
                                                                e,
                                                                dataKey,
                                                                subKey
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                            </div>
                                            <div style={classes.actionButton}>
                                                <AddIcon
                                                    color={"primary"}
                                                    fontSize="medium"
                                                    className="pointer"
                                                    onClick={() =>
                                                        addInSubValues(
                                                            dataKey,
                                                            subKey
                                                        )
                                                    }
                                                />
                                                <DeleteIcon
                                                    color={"warning"}
                                                    fontSize="medium"
                                                    className="pointer"
                                                />
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        {state.length - 1 === dataKey ? (
                            <div style={classes.linedWrapper}>
                                <Lined />
                                <Button
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    onClick={addInValues}
                                >
                                    AND
                                </Button>
                            </div>
                        ) : (
                            <div style={classes.linedWrapper}>
                                <Lined />
                                <Typography variant="h2" color={"gray"}>
                                    And
                                </Typography>
                                <Lined />
                            </div>
                        )}
                    </>
                );
            })}
        </Paper>
    );
}

const makeStyle = (theme: any) => {
    return {
        container: {
            padding: "20px",
        },
        linedWrapper: {
            width: "100px",
            textAlign: "center",
        },
        wrapper: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgba(0, 0, 0, 0.87)",
            transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            borderRadius: "4px",
            boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
            padding: "24px",
        },
        actionButton: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "5rem",
        },
    };
};
