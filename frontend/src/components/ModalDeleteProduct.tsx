/* eslint-disable @typescript-eslint/prefer-as-const */
import { Box, Button, Modal } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export default function ModalDeleteProduct({
  productId,
}: {
  productId: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productIdToDelete, setProductIdToDelete] = useState(productId);

  const handleDeletePost = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/product/deleteproduct/${productIdToDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log(data.message);
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      console.log("La suppression n'a pas fonctionnée");
    }
  };

  return (
    <div>
      <button
        className="absolute translate-x-1/2 -translate-y-1/2 top-8 right-8"
        onClick={() => {
          handleOpen();
          setProductIdToDelete(productId);
        }}
      >
        <Trash className="hover:text-red-400" size={32} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white py-20 rounded-xl shadow-xl">
          <h3 className="text-center text-xl">Voulez-vous supprimer ce produit ?</h3>
          <div className="flex justify-center mt-12 gap-5">
            <button className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-white" onClick={handleDeletePost}>Oui</button>
            <button className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-400 text-white" onClick={handleClose}>Non</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
