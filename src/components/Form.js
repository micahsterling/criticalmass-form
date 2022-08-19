import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../context/FormDataProvider";
import {
  Container,
  Button,
  Label,
  Input,
  Form,
  FormWrapper,
} from "./StyleElements";

function Register() {
  const { formData, setFormData } = useContext(FormDataContext);
  // const navigate = useNavigate();

  const handelOnChange = (e) => {
    setFormData(
      Object.assign({}, formData, { [e.target.name]: e.target.value })
    );
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // navigate("/ThankYou");
    setFormData("");
  };

  return (
    <Container>
      <h1>Please Complete Form</h1>
      <FormWrapper>
        <Form onSubmit={handelSubmit}>
          <Label>Name:</Label>
          <Input
            type="name"
            name="name"
            value={formData.name}
            autoComplete="off"
            required
            onChange={handelOnChange}
          />
          <Label>Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            autoComplete="off"
            required
            onChange={handelOnChange}
          />
          <Label>Address:</Label>
          <Input
            type="address"
            name="address"
            autoComplete="off"
            required
            value={formData.address}
            onChange={handelOnChange}
          />
          <Label>City:</Label>
          <Input
            type="text"
            name="city"
            autoComplete="off"
            required
            value={formData.city}
            onChange={handelOnChange}
          />
          <Label>State:</Label>
          <Input
            type="text"
            name="state"
            autoComplete="off"
            required
            value={formData.state}
            onChange={handelOnChange}
          />
          <Label>Zip:</Label>
          <Input
            type="number"
            name="zip"
            autoComplete="off"
            required
            value={formData.zip}
            onChange={handelOnChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default Register;
