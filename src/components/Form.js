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
  Header,
} from "./StyleElements";

function Register() {
  const { formData, setFormData } = useContext(FormDataContext);
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    setFormData(
      Object.assign({}, formData, { [e.target.name]: e.target.value })
    );
  };

  const handelSubmit = () => {
    navigate("/thankyou");
  };

  return (
    <Container>
      <Header>Please Complete Form</Header>
      <FormWrapper>
        <Form onSubmit={handelSubmit}>
          <Label>Name:</Label>
          <Input
            type="name"
            name="Name"
            value={"" || formData.name}
            autoComplete="off"
            required
            onChange={handelOnChange}
          />
          <Label>Email:</Label>
          <Input
            type="email"
            name="Email"
            value={"" || formData.email}
            autoComplete="off"
            required
            onChange={handelOnChange}
          />
          <Label>Address:</Label>
          <Input
            type="address"
            name="Address"
            autoComplete="off"
            required
            value={"" || formData.address}
            onChange={handelOnChange}
          />
          <Label>City:</Label>
          <Input
            type="text"
            name="City"
            autoComplete="off"
            required
            value={"" || formData.city}
            onChange={handelOnChange}
          />
          <Label>State:</Label>
          <Input
            type="text"
            name="State"
            autoComplete="off"
            required
            value={"" || formData.state}
            onChange={handelOnChange}
          />
          <Label>Zip:</Label>
          <Input
            type="number"
            name="Zip"
            autoComplete="off"
            required
            value={"" || formData.zip}
            onChange={handelOnChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default Register;
