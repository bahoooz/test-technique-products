/* eslint-disable @typescript-eslint/prefer-as-const */
import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalCreateProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "uncategorized",
    price: 0,
    rating: 0,
    warranty_years: 0,
    available: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/product/createproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok) {
        console.log(data.message);
        return
      }
      if (res.ok) {
        console.log("Produit créé !");
        handleClose()
        window.location.reload()
      }
    } catch (error) {
      console.log("Ca n'a pas marché");
      
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Créer un produit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" id="name">
                Nom produit
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
              />
            </div>
            <div>
              <label htmlFor="type" id="type">
                Type
              </label>
              <select
                required
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option value="uncategorized">Selectionnez un type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" id="price">
                Prix
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                required
                type="number"
              />
            </div>
            <div>
              <label htmlFor="rating" id="note">
                Note
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, rating: Number(e.target.value) })
                }
                required
                type="number"
              />
            </div>
            <div>
              <label htmlFor="warranty_years" id="warranty_years">
                Années de garanties
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, warranty_years: Number(e.target.value) })
                }
                required
                type="number"
              />
            </div>
            <div>
              <label htmlFor="available" id="available">
                En stock
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, available: e.target.checked })
                }
                type="checkbox"
              />
            </div>
            <Button type="submit">Créer produit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
