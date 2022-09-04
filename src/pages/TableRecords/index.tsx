import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TablePagination, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LoadingTable from "../../components/LoadingTable";

const columns: GridColDef[] = [
    { field: "name", headerName: "name", width: 70 },
    { field: "id", headerName: "id", width: 70 },
    { field: "nametype", headerName: "nametype", width: 100 },
    { field: "recclass", headerName: "recclass", width: 100 },
    { field: "mass", headerName: "mass", width: 100 },
    { field: "fall", headerName: "fall", width: 100 },
    { field: "year", headerName: "year", width: 100 },
    { field: "reclat", headerName: "reclat", width: 100 },
    { field: "reclong", headerName: "reclong", width: 100 },
    { field: "geolocation", headerName: "geolocation", width: 100 },
];

type IType = {
    name: string;
    id: string;
    nametype: string;
    recclass: string;
    mass: string;
    fall: string;
    year: string;
    reclat: string;
    reclong: string;
    geolocation: string;
};

type ITABLETYPE = {
    data: IType[];
    isloading: boolean;
};

export default function TableRecords({ data, isloading }: ITABLETYPE) {
    const theme = useTheme();
    const classes: any = makeStyle(theme);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div style={{ height: 400, width: "100%", marginTop: "6rem" }}>
            <Typography variant="h5" component="h5" sx={classes.headingTitle}>
                Results
            </Typography>
            <div style={classes.chip}>
                <Stack direction="row" spacing={1}>
                    <Chip
                        label={"Total: " + data.length}
                        sx={classes.filledChip}
                    />
                    <Chip
                        label={"Total: " + data.length}
                        variant="outlined"
                        sx={classes.filledChipOutline}
                    />
                </Stack>
            </div>

            {isloading ? (
                <LoadingTable />
            ) : (
                <>
                    <DataGrid rows={data} columns={columns} />

                    <TablePagination
                        rowsPerPageOptions={[25, 50, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            )}
        </div>
    );
}
const makeStyle = (theme: any) => {
    return {
        headingTitle: {
            margin: "0px",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em",
            fontWeight: "700",
        },
        chip: {
            marginTop: "10px",
            marginBottom: "10px",
        },
        filledChip: {
            background: "rgba(0, 0, 0, 0.08)",
            color: "black",
        },
        filledChipOutline: {
            background: "rgb(25, 118, 210)",
            color: "white",
        },
    };
};
