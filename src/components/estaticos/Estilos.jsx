import React from "react";
import styled from "styled-components";
/* Estilos */
/* Boton General */
export const BotonGeneral = styled.button`
  background-color: rgb(188, 149, 224);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 15px;
  margin: 10px 10px 10px 10px;
  padding: 10px 15px;
  text-align: center;
  &:hover {
    background-color: blueviolet;
  }
`;

/* BotonSigno */
export const BotonSigno = styled.button`
  background-color: rgb(196, 177, 223);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: block;
  padding: 4px 8px;
  text-align: center;
  &:hover {
    background-color: blueviolet;
  }
`;
