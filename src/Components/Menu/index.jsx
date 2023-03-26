import { Link } from "react-router-dom";
import { ButtonMenu, ContainerMenu } from "./styled";

const Menu = () => {
  return (
    <div>
      <ContainerMenu>
        <Link to="/">
          <ButtonMenu>Inicio</ButtonMenu>
        </Link>
        <Link to="/listusers">
          <ButtonMenu>Usuários Cadastrados</ButtonMenu>
        </Link>
      </ContainerMenu>
    </div>
  );
};

export default Menu;
