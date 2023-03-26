import { Link } from "react-router-dom";
import { ButtonMenu, ContainerMenu } from "./styled";

const Menu = () => {
  return (
    //Rotas para Pagina Main e Users
    <div>
      <ContainerMenu>
        <Link to="/">
          <ButtonMenu>Inicio</ButtonMenu>
        </Link>
        <Link to="/users">
          <ButtonMenu>Usuários Cadastrados</ButtonMenu>
        </Link>
      </ContainerMenu>
    </div>
  );
};

export default Menu;
