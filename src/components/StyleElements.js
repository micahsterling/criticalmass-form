import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
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
  padding-bottom: 1rem;
  background-color: #16236b;
`;

export const Label = styled.label`
  margin: 0.35rem 0;
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
  margin-top: 0.8rem;
  border-radius: 0.5rem;
  background-color: #c7d1f8;
`;
