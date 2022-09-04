import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingTable() {
    return (
        <Box sx={{ width: "100%" }}>
            <div style={{ display: "flex" }}>
                <Skeleton
                    animation="wave"
                    height={50}
                    width={120}
                    style={{ marginBottom: 6, marginRight: 20 }}
                />
                <Skeleton
                    animation="wave"
                    height={50}
                    width={120}
                    style={{ marginBottom: 6 }}
                />
            </div>

            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
            <Skeleton
                animation="wave"
                height={30}
                style={{ marginBottom: 6 }}
            />
        </Box>
    );
}
