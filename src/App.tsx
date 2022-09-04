import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { myCreateTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function App() {
    const theme = useTheme();
    const classes: any = makeStyle(theme);
    return (
        <ThemeProvider theme={myCreateTheme()}>
            <Container sx={classes.container} maxWidth="lg">
                <HomePage />
            </Container>
        </ThemeProvider>
    );
}

const makeStyle = (theme: any) => {
    return {
        container: {
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                flexWrap: "wrap",
                justifyContent: "center",
            },
        },
    };
};

export default App;
