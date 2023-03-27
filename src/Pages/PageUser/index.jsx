import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUsersId } from "../../Api";
import { Text } from "./styled";

const PageUser = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  //Usando o Id como parametro para buscar e renderizar as Informações do Usuário
  //O parametro ID vem direto da Api como rota e usando no useParams para identificação do router
  useEffect(() => {
    const listUsers = async () => {
      const json = await fetchUsersId(id);
      setInfo(json);
    };

    listUsers();
  }, [id]);

  return (
    <div>
      <Header />
      <Container title="UsersId" description="UsersId">
        <Menu />
        {info && (
          <div>
            <hr />
            <div>
              <Text>Nome:</Text> {info.name}
            </div>
            <div>
              <Text>User Name:</Text> {info.username}
            </div>
            <div>
              <Text>Email:</Text> {info.email}
            </div>
            <div>
              <hr />
              <Text>Endereço </Text>
              <div>
                <Text>Rua:</Text> {info.address.street}
              </div>
              <div>
                <Text>Suite:</Text> {info.address.suite}
              </div>
              <div>
                <Text>Cidade:</Text> {info.address.city}
              </div>
              <div>
                <Text>CEP:</Text> {info.address.zipcode}
              </div>
              <div>
                <hr />
                <Text>Geografico:</Text>
                <div>
                  <div>
                    <Text>Lat:</Text> {info.address.geo.lat}
                  </div>
                  <div>
                    <Text>Lnt:</Text> {info.address.geo.lng}
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default PageUser;
