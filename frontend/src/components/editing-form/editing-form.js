import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { validateForm } from "../../utils";
import { CLOSE_MODAL, updateProductAsync } from "../../actions";
import { selectProduct } from "../../selectors";
import styled from "styled-components";

const EditingFormContainer = ({ className }) => {
  const product = useSelector(selectProduct);
  const [formValues, setFormValues] = useState({
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  });
  const [errorMessages, setErrorMessages] = useState({});
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Поле обязательно для заполнения"),
    category: yup.string().required("Поле обязательно для заполнения"),
    description: yup.string().required("Поле обязательно для заполнения"),
    price: yup.number().required("Поле обязательно для заполнения"),
    quantity: yup.number().required("Поле обязательно для заполнения"),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });

    const error = validateForm(formSchema, name, value);
    setErrorMessages({ ...errorMessages, [name]: error });
  };

  const onCancel = () => {
    dispatch(CLOSE_MODAL);
  };

  const isFormValid = formSchema.isValidSync(formValues);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(updateProductAsync(product.id, formValues));
      dispatch(CLOSE_MODAL);
    }
  };

  return (
    <form className={className} onSubmit={onSubmitHandler}>
      <h2>Форма редактирования - {product.name}</h2>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      {errorMessages.name && <div className="error">{errorMessages.name}</div>}
      <input
        type="text"
        name="category"
        value={formValues.category}
        onChange={handleChange}
      />
      {errorMessages.category && (
        <div className="error">{errorMessages.category}</div>
      )}
      <textarea
        name="description"
        value={formValues.description}
        onChange={handleChange}
      />
      {errorMessages.description && (
        <div className="error">{errorMessages.description}</div>
      )}
      <input
        type="number"
        name="price"
        value={formValues.price}
        onChange={handleChange}
      />
      {errorMessages.price && (
        <div className="error">{errorMessages.price}</div>
      )}
      <input
        type="number"
        name="quantity"
        value={formValues.quantity}
        onChange={handleChange}
      />
      {errorMessages.quantity && (
        <div className="error">{errorMessages.quantity}</div>
      )}
      <div className="buttons">
        <button type="submit" disabled={!isFormValid}>
          Сохранить
        </button>
        <button onClick={onCancel}>Отменить</button>
      </div>
    </form>
  );
};

export const EditingForm = styled(EditingFormContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  background-color: #fff;

  & > h2 {
    margin: 0;
    text-align: center;
    font-size: 1.1em;
  }

  & > input {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #8019c8;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
  }

  & > textarea {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #8019c8;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }
  & > button {
    width: fit-content;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 8px;
    cursor: pointer;
    background-color: #19c880;
  }

  & > button:disabled {
    cursor: none;
    background-color: lightgray;
    /* color: lightgray; */
    /* border: none;
	box-shadow: 3px 3px 0 0 grey; */
  }

  & .error {
    font-size: 0.7em;
    color: red;
    text-align: center;
  }
`;
