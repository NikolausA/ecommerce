import { useSelector } from "react-redux";
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
  selectModalIsEditing,
} from "../../selectors";
import { EditingForm } from "../editing-form/editing-form";
import styled from "styled-components";

const ModalContainer = ({ className }) => {
  const isOpen = useSelector(selectModalIsOpen);
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);
  const isEditing = useSelector(selectModalIsEditing);

  if (!isOpen) {
    return;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        {isEditing ? (
          <EditingForm />
        ) : (
          <>
            <h3>{text}</h3>
            <div className="buttons">
              <button onClick={onConfirm}>Удалить</button>
              <button onClick={onCancel}>Отмена</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    position: relative;
    width: 400px;
    top: 50%;
    transform: translate(0, -50%);
    margin: 0 auto;
    padding: 0 20px 20px;
    text-align: center;
    border: 2px solid #000;
    background-color: #fff;
    z-index: 30;
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }

  & .buttons button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #19c880;
    border-radius: 4px;
  }
`;
