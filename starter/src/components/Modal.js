import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const onConfirmClick = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const onCancelClick = () => {
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={onConfirmClick}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={onCancelClick}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal;