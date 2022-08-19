import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.h1``;
export const Wrapper = styled.div``;

// Form styling

export const Header = styled.h1`
  @media screen and (max-width: 420px) {
    font-size: 26px;
  } ;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  margin: 0 1rem;
  background-color: #16236b;
  font-family: "RM Neue", sans-serif;
  font-size: 22px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  background-color: #16236b;
`;

export const Label = styled.label`
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  font-size: 22px;
  border-radius: 0.5rem;
  padding: 0.2rem;
`;

export const Button = styled.button`
  font-family: "RM Neue", sans-serif;
  font-size: 20px;
  padding: 0.25rem;
  margin: 1.5rem 5.5rem;
  border-radius: 0.5rem;
  background-color: #c7d1f8;
`;
