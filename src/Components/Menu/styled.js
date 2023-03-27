import styled from "styled-components";

export const ButtonMenu = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #eb5e28;
  color: black;
  font-size: 18px;
  font-weight: 800;
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
