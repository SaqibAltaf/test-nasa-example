import { useTheme } from "@mui/material/styles";
import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useState } from "react";
import { verifyJsonData } from "../application/api";
import AddOnItems from "./AddOnItems";
import TableRecords from "./TableRecords";

const CardStyle = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "16px",
    marginBottom: "16px",
}));

export default function HomePage(props: any) {
    const theme = useTheme();
    const classes: any = makeStyle(theme);

    const [urlValidation, setUrlValidation] = useState({
        error: false,
        value: "https://data.nasa.gov/resource/y77d-th95.json",
    });

    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(() => {
        getData(urlValidation.value);
    }, []);

    const getData = (value: string) => {
        verifyJsonData(value)
            .then((data) => {
                setIsloading(false);
                setData(data);
                setUrlValidation({
                    ...urlValidation,
                    value: value,
                    error: false,
                });
            })
            .catch(() => {
                setIsloading(true);
                setUrlValidation({
                    ...urlValidation,
                    value: value,
                    error: true,
                });
            });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlValidation({
            ...urlValidation,
            value: e.target.value,
        });
        setIsloading(true);
        getData(e.target.value);
    };
    return (
        <CardStyle>
            <Typography component="h1" sx={classes.heading}>
                Condition Builder
            </Typography>
            <TextField
                sx={classes.input100}
                id="outlined-required"
                label="Url"
                value={urlValidation.value}
                onChange={onChange}
                error={urlValidation.error}
                inputProps={{ style: { fontSize: 20 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 16 } }}
            />
            <p className="mr_left_20 fn-12">
                Insert data url. Returning data MUST be an array json with each
                element is key/value pair.
            </p>
            <AddOnItems isloading={isloading} />
            <TableRecords data={data} isloading={isloading} />
        </CardStyle>
    );
}

const makeStyle = (theme: any) => {
    return {
        input100: {
            width: "100%",
            fontSize: "3rem",
        },
        heading: {
            margin: "0px",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            lineHeight: 1.167,
            letterSpacing: "0em",
            fontWeight: 700,
            fontSize: "3rem",
            marginBottom: "2rem",
            marginTop: "1rem",
        },
    };
};
