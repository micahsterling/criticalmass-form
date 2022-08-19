import React, { useContext } from "react";
import FormDataContext from "../context/FormDataProvider";
import { Container, Title, Wrapper } from "./StyleElements";

function ThankYou() {
  const { formData } = useContext(FormDataContext);

  console.log("Form Data", formData);

  const displayData = Object.entries(formData).map(([key, value]) => {
    return <p>{`${key}: ${value}`}</p>;
  });

  return (
    <Container>
      <Title>Thank You</Title>
      <Wrapper>{displayData}</Wrapper>
    </Container>
  );
}

export default ThankYou;
