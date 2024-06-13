import { useState } from "react";
import * as yup from "yup";
import { request, validateForm } from "../../../../utils";
import styled from "styled-components";

const AdminFormContainer = ({ className }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    imageUrl: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const formSchema = yup.object().shape({
    name: yup.string().required("Поле обязательно для заполнения"),
    category: yup.string().required("Поле обязательно для заполнения"),
    price: yup.number().required("Поле обязательно для заполнения"),
    quantity: yup.number().required("Поле обязательно для заполнения"),
    imageUrl: yup.string().required("Поле обязательно для заполнения"),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });

    const error = validateForm(formSchema, name, value);
    setErrorMessages({ ...errorMessages, [name]: error });
  };

  const onBlurHandler = ({ target }) => {
    const { name, value } = target;

    const error = validateForm(formSchema, name, value);
    setErrorMessages({ ...errorMessages, [name]: error });
  };

  const uploadFileHandler = async ({ target }) => {
    const imageFile = target.files[0];
    const formData = new FormData();
    formData.append("product-image", imageFile);
    const { path } = await request("api/admin-panel/upload", "POST", formData);
    setFormValues({ ...formValues, imageUrl: path });
    setErrorMessages({ ...errorMessages, imageUrl: undefined });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const addedProduct = await request(
        "api/admin-panel/products",
        "POST",
        formValues
      );
    }
  };

  const isFormValid = Object.values(formValues).every((value) => value !== "");

  return (
    <form
      className={className}
      encType={"multipart/form-data"}
      onSubmit={onSubmitHandler}
    >
      <h2>Форма добавления нового товара</h2>
      <input
        type="text"
        name="name"
        value={formValues.name}
        placeholder="Название"
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {errorMessages.name && <div className="error">{errorMessages.name}</div>}
      <input
        type="text"
        name="category"
        value={formValues.category}
        placeholder="Категория"
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {errorMessages.category && (
        <div className="error">{errorMessages.category}</div>
      )}
      <input
        type="number"
        name="price"
        value={formValues.price}
        placeholder="Цена"
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {errorMessages.price && (
        <div className="error">{errorMessages.price}</div>
      )}
      <input
        type="number"
        name="quantity"
        value={formValues.quantity}
        placeholder="Количество"
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {errorMessages.quantity && (
        <div className="error">{errorMessages.quantity}</div>
      )}
      <input
        type="text"
        name="imageUrl"
        value={formValues.imageUrl}
        placeholder="Путь к изображению товара"
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {errorMessages.imageUrl && (
        <div className="error">{errorMessages.imageUrl}</div>
      )}
      <input type="file" name="product-image" onChange={uploadFileHandler} />
      <button type="submit" disabled={!isFormValid}>
        Добавить
      </button>
    </form>
  );
};

export const AdminForm = styled(AdminFormContainer)`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  background-color: #fff;

  & > h2 {
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
