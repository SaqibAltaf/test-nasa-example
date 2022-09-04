import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectChangeEvent } from "@mui/material";
import { LEFT_CONDITION_DROPDOWN_VALUES, OPERATOR_DROPDOWN_VALUES } from ".";
import FullFieldLoader from "../../components/FullFieldLoader";

type IITEM = {
    name: string;
    parentKey: number;
    leftCondition: string;
    operator: string;
    value: string;
    subKey: undefined | number;
    handleChange: (
        e: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>,
        dataKey: number,
        subKey: number | undefined
    ) => void;
    addInSubValues: (dataKey: number, subKey: number | undefined) => void;
    removeInSubValues: (dataKey: number, subKey: number | undefined) => void;
};

export default function Item({
    name,
    parentKey,
    subKey,
    leftCondition,
    operator,
    value,
    handleChange,
    addInSubValues,
    removeInSubValues,
}: IITEM) {
    const [hover, setHover] = useState<{
        key: number;
        subkey: number | undefined;
        enable: boolean;
    }>({
        key: 0,
        subkey: undefined,
        enable: false,
    });
    const _handleChange = (
        e: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>,
        parentKey: number,
        subKey: number | undefined
    ) => {
        handleChange(e, parentKey, subKey);
    };

    const enableHoverOnAdd = (key: number, subkey: number | undefined) => {
        setHover({
            ...hover,
            key,
            subkey,
            enable: true,
        });
    };

    const disableHoverOnAdd = (key: number, subkey: number | undefined) => {
        setHover({
            ...hover,
            enable: false,
            key,
            subkey,
        });
    };

    const addField = () => {
        setHover({ ...hover, enable: false });
        addInSubValues(parentKey, subKey);
    };

    return (
        <>
            <div className="orarray" key={name + parentKey}>
                {subKey === undefined ? null : (
                    <div className="or-wrapper">
                        <Typography variant="h3" color={"primary"}>
                            OR
                        </Typography>
                    </div>
                )}

                <div
                    className={
                        subKey === undefined ? "width_long" : "width_short"
                    }
                >
                    <FormControl sx={{ m: 1 }} fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Left Condition
                        </InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            name="leftCondition"
                            value={leftCondition}
                            label="Left Condition"
                            onChange={(e) =>
                                _handleChange(e, parentKey, subKey)
                            }
                        >
                            {LEFT_CONDITION_DROPDOWN_VALUES.map((val, key) => (
                                <MenuItem value={val} key={key}>
                                    {val}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div
                    className={
                        subKey === undefined ? "width_long" : "width_short"
                    }
                >
                    <FormControl sx={{ m: 1 }} fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Operator
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name="operator"
                            value={operator}
                            label="Operator"
                            onChange={(e) =>
                                _handleChange(e, parentKey, subKey)
                            }
                        >
                            {OPERATOR_DROPDOWN_VALUES.map((val, key) => (
                                <MenuItem key={key} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div
                    className={
                        subKey === undefined ? "width_long" : "width_short"
                    }
                >
                    <FormControl sx={{ m: 1 }} fullWidth>
                        <TextField
                            id="outlined-required"
                            name={"value"}
                            label="Value"
                            value={value}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => _handleChange(e, parentKey, subKey)}
                        />
                    </FormControl>
                </div>
                <div className="action-button">
                    <AddIcon
                        color={"primary"}
                        fontSize="medium"
                        className="pointer"
                        onClick={addField}
                        onMouseEnter={() => enableHoverOnAdd(parentKey, subKey)}
                        onMouseLeave={() =>
                            disableHoverOnAdd(parentKey, subKey)
                        }
                    />
                    <DeleteIcon
                        color={"warning"}
                        fontSize="medium"
                        className="pointer"
                        onClick={() => removeInSubValues(parentKey, subKey)}
                    />
                </div>
            </div>
            {(hover.key === parentKey && hover.enable === true) ||
            (hover.subkey === subKey && hover.enable === true) ? (
                <FullFieldLoader />
            ) : null}
        </>
    );
}
