import React from "react";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export default function FullFieldLoader() {
    const theme = useTheme();
    const classes: any = makeStyle(theme);
    return (
        <div style={classes.loadingWrapper}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={"100%"} height={60} />
            </Stack>
        </div>
    );
}

const makeStyle = (theme: any) => {
    return {
        loadingWrapper: {
            width: "100%",
            height: "80px",
        },
    };
};
