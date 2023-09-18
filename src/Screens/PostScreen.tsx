import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function PostScreen() {
    const [listData, setListData] = React.useState<any>([]);
    let getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                console.log(res.data);
                setListData([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    React.useEffect(() => {
        getData();
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>

                    </TableRow>
                </TableHead>


                {listData.map((x: any, i: any) => {
                    return (
                        <>
                            <TableBody>
                                <StyledTableCell align="center">{x.id}</StyledTableCell>
                                <StyledTableCell align="center">{x.name}</StyledTableCell>
                                <StyledTableCell align="center">{x.email}</StyledTableCell>
                                <StyledTableCell align="center"><Button>{<EditIcon/>}</Button></StyledTableCell>
                                <StyledTableCell align="center"><Button>{<DeleteIcon/>}</Button></StyledTableCell>
                                {/* <StyledTableCell align="center">{x.body}</StyledTableCell> */}
                            </TableBody>
                        </>
                    )

                })}


            </Table>
        </TableContainer>
    );
}
