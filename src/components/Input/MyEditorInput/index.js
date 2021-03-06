import React from "react";
import { useField } from "formik";
import styled from "styled-components";

import { colors } from "theme";

export default function MyEditorInput(props) {
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <InputStyled {...field} {...props} />
      {meta.touched && meta.error && <Error> {meta.error}</Error>}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 500px;

  font-size: 32px;
`;

const InputStyled = styled.input`
  width: 350px;
  outline: none;
  border: none;
  background-color: ${colors.gray_light};
  border-radius: 10px;
  padding: 10px;
`;

const Error = styled.div`
  position: absolute;
  margin-left: 30px;
  left: 500px;
  font-size: 16px;
  width: 300px;
  color: ${colors.yellow};
`;
