/* eslint-disable no-sparse-arrays */
import { Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Item from "./Item";
import FieldsLoader from "../../components/FieldsLoader";

const Lined = styled("div")(() => ({
    height: "30px",
    width: "3px",
    background: "rgb(225, 229, 233)",
    margin: "0 auto",
}));

export const LEFT_CONDITION_DROPDOWN_VALUES = [
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

export const OPERATOR_DROPDOWN_VALUES = [
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

type IAddOnItems = {
    isloading: boolean;
};

export default function AddOnItems({ isloading }: IAddOnItems) {
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
        const __state = [...state];
        __state.push(ADDING_VALUE);
        setState([...__state]);
    };

    const addInSubValues = (key: number, subkey: number | undefined) => {
        const __state = [...state];

        if (subkey === undefined) {
            __state[key].items.unshift(SUB_VALUE);
        } else {
            __state[key].items.push(SUB_VALUE);
        }

        console.log(__state);
        setState(__state);
    };

    const removeInSubValues = (key: number, subkey: number | undefined) => {
        const __state = [...state];
        if (subkey === undefined) {
            if (__state[key].items.length > 0) {
                __state[key].leftCondition =
                    __state[key].items[0].leftCondition;
                __state[key].operator = __state[key].items[0].operator;
                __state[key].value = __state[key].items[0].value;
                __state[key].items.splice(0, 1);
            } else {
                __state.splice(key, 1);
            }
        } else {
            __state[key].items.splice(subkey, 1);
        }
        setState(__state);
    };

    return (
        <Paper variant="outlined" sx={classes.container}>
            {isloading ? (
                <FieldsLoader />
            ) : (
                <>
                    {state.map((data, dataKey) => {
                        return (
                            <div key={"parnet" + dataKey}>
                                <div style={classes.wrapper}>
                                    <Item
                                        key={"parnet" + dataKey}
                                        name={"parent"}
                                        parentKey={dataKey}
                                        subKey={undefined}
                                        leftCondition={data.leftCondition}
                                        operator={data.operator}
                                        value={data.value}
                                        handleChange={handleChange}
                                        addInSubValues={addInSubValues}
                                        removeInSubValues={removeInSubValues}
                                    />

                                    {data.items.map(
                                        (subData: IVALUE, subKey: number) => {
                                            return (
                                                <Item
                                                    key={"child" + subKey}
                                                    name={"sbrarray"}
                                                    parentKey={dataKey}
                                                    subKey={subKey}
                                                    leftCondition={
                                                        subData.leftCondition
                                                    }
                                                    operator={subData.operator}
                                                    value={subData.value}
                                                    handleChange={handleChange}
                                                    addInSubValues={
                                                        addInSubValues
                                                    }
                                                    removeInSubValues={
                                                        removeInSubValues
                                                    }
                                                />
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
                            </div>
                        );
                    })}
                </>
            )}
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

        loadingWrapper: {
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
    };
};
