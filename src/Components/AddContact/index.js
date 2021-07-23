import React, { useState, useEffect, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { toast } from "react-toastify";

import { Context } from "../../Context/Context";

import { Buttons } from "../Buttons";

const useStyles = makeStyles((theme) => ({}));

export function AddContact({ edit }) {
  const classes = useStyles();

  const { handleAdd } = useContext(Context);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [addOn, setAddOn] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (edit) {
      setOpen(true);
      const datas = JSON.parse(localStorage.getItem("addContact"));

      const result = datas.filter((data) => {
        return data.id === edit;
      });
      setId(result[0].id);
      setName(result[0].name);
      setLastName(result[0].lastName);
      setEmail(result[0].email);
      setPhone(result[0].phone);
      setZip(result[0].zip);
      setStreet(result[0].street);
      setAddOn(result[0].addOn);
      setDistrict(result[0].district);
      setCity(result[0].city);
      setState(result[0].state);
    }
  }, [edit]);

  function handleBlur(event) {
    const { value } = event.target;
    const zip = value?.replace(/[^0-9]/g, "");

    if (zip?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${zip}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setZip(data.cep);
        setStreet(data.logradouro);
        setAddOn(data.complemento);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      });
  }

  function handleSubmint(event) {
    event.preventDefault();

    if (
      (email && name && lastName && zip && street) ||
      (phone && name && lastName && zip && street)
    ) {
      handleAdd(
        edit,
        id,
        name,
        lastName,
        email,
        phone,
        zip,
        street,
        addOn,
        district,
        city,
        state
      );

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setZip("");
      setStreet("");
      setAddOn("");
      setDistrict("");
      setCity("");
      setState("");
    } else {
      toast.error("Favor preencher todos dados");

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setZip("");
      setStreet("");
      setAddOn("");
      setDistrict("");
      setCity("");
      setState("");
    }
  }

  return (
    <div>
      <Buttons
        handleClickOpen={handleClickOpen}
        title="Adicionar Contato"
        type="button"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Container component="main" maxWidth="lg">
            <form className={classes.form} noValidate onSubmit={handleSubmint}>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  size="small"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="lastName"
                  label="Sobremone"
                  type="lastName"
                  id="lastName"
                  size="small"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  size="small"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  margin="normal"
                  id="outlined-required"
                  label="Telefone"
                  name="phone"
                  type="phone"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
                <TextField
                  required
                  margin="normal"
                  id="outlined-required"
                  label="CEP"
                  name="zip"
                  type="zip"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <TextField
                  required
                  margin="normal"
                  placeholder="logradouro"
                  name="street"
                  type="street"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={street}
                  onChange={(event) => {
                    setStreet(event.target.value);
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  margin="normal"
                  id="outlined-required"
                  label="Complemento"
                  name="addOn"
                  type="addOn"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={addOn}
                  onChange={(event) => {
                    setAddOn(event.target.value);
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  margin="normal"
                  id="outlined-required"
                  label="Bairro"
                  name="district"
                  type="district"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={district}
                  onChange={(event) => {
                    setDistrict(event.target.value);
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  required
                  margin="normal"
                  id="outlined-required"
                  label="Cidade"
                  name="city"
                  type="city"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  required
                  margin="normal"
                  id="outlined-required"
                  label="UF"
                  name="state"
                  type="state"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "10px" }}
                  value={state}
                  onChange={(event) => {
                    setState(event.target.value);
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div>
                <DialogTitle>
                  <Buttons
                    type="submit"
                    title="Cadastrar"
                    handleClickOpen={() => handleClose(false)}
                  />
                </DialogTitle>
              </div>
            </form>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
