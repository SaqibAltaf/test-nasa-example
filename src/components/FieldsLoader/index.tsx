import React from "react";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export default function FieldsLoader() {
    const theme = useTheme();
    const classes: any = makeStyle(theme);
    return (
        <div style={classes.loadingWrapper}>
            <Stack spacing={1}>
                <div className="orarray">
                    <Skeleton variant="rectangular" width={"40%"} height={60} />
                    <Skeleton variant="rectangular" width={"40%"} height={60} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                </div>
            </Stack>
        </div>
    );
}

const makeStyle = (theme: any) => {
    return {
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
