import React, { useContext } from "react";
import FormDataContext from "../context/FormDataProvider";
import { Container, Text, Title, Wrapper } from "./StyleElements";

function ThankYou() {
  const { formData } = useContext(FormDataContext);

  console.log("Form Data", formData);

  const displayData = Object.entries(formData).map(([key, value]) => {
    return <Text key={key}>{`${key}: ${value}`}</Text>;
  });

  return (
    <Container>
      <Title>Thank You</Title>
      <Wrapper>{displayData}</Wrapper>
    </Container>
  );
}

export default ThankYou;
