import { createTheme, responsiveFontSizes } from "@mui/material";
import _ from "lodash";
import * as colors from "@mui/material/colors";

import customColor from "./colors";
import custom from "./custom";
import { strongShadows } from "./shadows";
import typography from "./typography";

const baseOptions = {
    typography,
    overrides: {
        MuiLinearProgress: {
            root: {
                borderRadius: 3,
                overflow: "hidden",
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 32,
            },
        },
        MuiChip: {
            root: {
                backgroundColor: "rgba(0,0,0,0.075)",
            },
        },
    },
};

const themeOptions = {
    overrides: {
        MuiInputBase: {
            input: {
                "&::placeholder": {
                    opacity: 1,
                    color: colors.blueGrey[600],
                },
            },
        },
        MuiButton: {
            root: {
                padding: "14px 20px",
                borderRadius: "3px",
            },
        },
    },
    palette: {
        type: "dark",
        action: {
            active: "rgba(255, 255, 255, 0.54)",
            hover: "rgba(255, 255, 255, 0.04)",
            selected: "rgba(255, 255, 255, 0.08)",
            disabled: "rgba(255, 255, 255, 0.26)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            focus: "rgba(255, 255, 255, 0.12)",
        },
        background: {
            default: "#030616",
            dark: "#1c2025",
            paper: "#F4F8FA",
        },
        primary: {
            main: "#0C71BC",
        },
        secondary: {
            main: "#0C71BC",
        },
        primaryWidth: {
            width: "29%",
        },
        secondaryWidth: {
            width: "24%",
        },
        text: {
            primary: "#1C2535",
            secondary: "#adb0bb",
        },
    },
    shadows: strongShadows,
};

const myCreateTheme = () => {
    let theme = createTheme(
        _.merge(
            {},
            baseOptions,
            themeOptions,
            { custom },
            { colors: customColor }
        ) as any
    );

    theme = responsiveFontSizes(theme);

    return theme;
};

export { myCreateTheme };
