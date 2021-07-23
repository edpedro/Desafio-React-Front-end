import React, { useContext, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { Context } from "../../Context/Context";

import { AddContact } from "../../Components/AddContact";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(6),
  },
  table: {
    minWidth: 700,
  },
  edit: {
    fill: "#ff7f27",
  },
  remove: {
    fill: "#ec1c24",
  },
  add: {
    width: "200px",
    marginBottom: "15px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#34E0AA",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export function Home() {
  const classes = useStyles();

  const [edit, setEdit] = useState();

  const { datas, handleRemove } = useContext(Context);

  function handelEdit(id) {
    setEdit(id);
  }

  function handleDelete(id) {
    handleRemove(id);
  }
  return (
    <>
      <TableContainer component={Paper} className={classes.main}>
        <div className={classes.add}>
          <AddContact edit={edit} />
        </div>
        {datas && datas.length > 0 ? (
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow className={classes.nameColor}>
                <StyledTableCell align="left">Nome</StyledTableCell>
                <StyledTableCell align="left">Sobrenome</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Telefone</StyledTableCell>
                <StyledTableCell align="left">CEP</StyledTableCell>
                <StyledTableCell align="left">Logradouro</StyledTableCell>
                <StyledTableCell align="left">Complemento</StyledTableCell>
                <StyledTableCell align="left">Bairro</StyledTableCell>
                <StyledTableCell align="left">Cidade</StyledTableCell>
                <StyledTableCell align="left">UF</StyledTableCell>
                <StyledTableCell align="left">Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map((data) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell align="left">{data.name}</StyledTableCell>
                  <StyledTableCell align="left">
                    {data.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="left">{data.email}</StyledTableCell>
                  <StyledTableCell align="left">{data.phone}</StyledTableCell>
                  <StyledTableCell align="left">{data.zip}</StyledTableCell>
                  <StyledTableCell align="left">{data.street}</StyledTableCell>
                  <StyledTableCell align="left">{data.addOn}</StyledTableCell>
                  <StyledTableCell align="left">
                    {data.district}
                  </StyledTableCell>
                  <StyledTableCell align="left">{data.city}</StyledTableCell>
                  <StyledTableCell align="left">{data.state}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button onClick={() => handelEdit(data.id)}>
                      <EditIcon className={classes.edit} />
                    </Button>
                    -
                    <Button onClick={() => handleDelete(data.id)}>
                      <DeleteIcon className={classes.remove} />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="h4" gutterBottom align="center">
            Favor cadastrar contato
          </Typography>
        )}
      </TableContainer>
    </>
  );
}
