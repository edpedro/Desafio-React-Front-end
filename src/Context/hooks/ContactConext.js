import { useEffect, useState, useCallback } from "react";
import crypto from "crypto";

import { toast } from "react-toastify";

function ContactContext() {
  const [datas, setDatas] = useState();
  const [remov, setRemov] = useState();
  const [add, setAdd] = useState();

  useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem("addContact")));
  }, [remov, add]);

  const handleRemove = useCallback(async (id) => {
    const info = JSON.parse(localStorage.getItem("addContact"));
    const result = info.filter((contact) => {
      return contact.id !== id;
    });
    setRemov(result);

    localStorage.setItem("addContact", JSON.stringify(result));

    toast.success("Contato deletado com sucesso!");
  }, []);

  const handleAdd = useCallback(
    async (
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
    ) => {
      const existingData = JSON.parse(localStorage.getItem("addContact")) || [];

      if (edit) {
        existingData.forEach((contact) => {
          if (contact.id === id) {
            contact.name = name;
            contact.lastName = lastName;
            contact.email = email;
            contact.phone = phone;
            contact.zip = zip;
            contact.street = street;
            contact.addOn = addOn;
            contact.district = district;
            contact.city = city;
            contact.state = state;
          }
        });
        setAdd(existingData);
        localStorage.setItem("addContact", JSON.stringify(existingData));
        toast.success("Contato atualizado com sucesso!");
      } else {
        const id = crypto.randomBytes(16).toString("hex");

        existingData.push({
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
          state,
        });
        setAdd(existingData);
        localStorage.setItem("addContact", JSON.stringify(existingData));
        toast.success("Contato cadastrado com sucesso!");
      }
    },
    []
  );

  return {
    datas,
    handleRemove,
    handleAdd,
  };
}

export default ContactContext;
