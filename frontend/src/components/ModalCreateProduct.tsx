/* eslint-disable @typescript-eslint/prefer-as-const */
import { Box, Button, Modal } from "@mui/material";
import { Plus, PlusCircle } from "@phosphor-icons/react";
import React, { useState } from "react";

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
    available: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:3000/api/product/createproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        return;
      }
      if (res.ok) {
        console.log("Produit créé !");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      console.log("Ca n'a pas marché");
    }
  };

  return (
    <div>
      <button
        className="fixed top-5 right-5 rounded-full animate-bounce"
        onClick={handleOpen}
      >
        <PlusCircle className="text-[#2F1B67]" size={85} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white py-20 rounded-xl shadow-xl">
          <form
            className="flex flex-col justify-start text-center gap-7 px-16"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="name" id="name">
                Nom du produit
              </label>
              <input
                className="border border-black rounded-md px-2 py-1"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                placeholder="ex : iPhone"
              />
            </div>
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="type" id="type">
                Type
              </label>
              <select
                className="rounded-md border border-black px-2 py-1"
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
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="price" id="price">
                Prix
              </label>
              <input
                className="border border-black rounded-md px-2 py-1 w-28"
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                required
                type="number"
                placeholder="ex : 300€"
                min={1}
              />
            </div>
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="rating" id="note">
                Note
              </label>
              <input
                className="border border-black rounded-md px-2 py-1 w-20"
                onChange={(e) =>
                  setFormData({ ...formData, rating: Number(e.target.value) })
                }
                required
                type="number"
                placeholder="1 à 5"
                min={1}
                max={5}
              />
            </div>
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="warranty_years" id="warranty_years">
                Année(s) de garantie
              </label>
              <input
                className="border border-black rounded-md px-2 py-1 w-20"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    warranty_years: Number(e.target.value),
                  })
                }
                required
                type="number"
                placeholder="1 à 3"
                min={1}
                max={3}
              />
            </div>
            <div className="flex justify-start gap-3 items-center">
              <label htmlFor="available" id="available">
                En stock
              </label>
              <input id="checkbox"
              className="appearance-none border border-black h-8 w-8  checked: rounded-md cursor-pointer"
                onChange={(e) =>
                  setFormData({ ...formData, available: e.target.checked })
                }
                type="checkbox"
              />
            </div>
            <button className="bg-green-400 h-12 w-2/3 mx-auto rounded-md text-white flex justify-center items-center gap-2 text-base mt-8" type="submit"><Plus size={22} /> Créer le produit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
