/* eslint-disable @typescript-eslint/prefer-as-const */
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalDeleteProduct({productId}: {productId: string}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [productIdToDelete, setProductIdToDelete] = useState(productId)

  const handleDeletePost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/product/deleteproduct/${productIdToDelete}`, {
        method: "DELETE",
      })
      const data = await res.json()
      if (res.ok) {
        console.log(data.message);
        handleClose()
        window.location.reload()
      }
    } catch (error) {
      console.log("La suppression n'a pas fonctionnée");
    }
  }

  return (
    <div>
      <Button onClick={() => {
        handleOpen()
        setProductIdToDelete(productId)
      }}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Voulez-vous supprimer ce produit ?</h3>
          <button onClick={handleDeletePost}>Oui</button>
          <button onClick={handleClose}>Non</button>
        </Box>
      </Modal>
    </div>
  );
}
