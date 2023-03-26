import React, { useEffect, useState } from "react";
import { ContentUser, Text } from "./styled";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { fetchUsers } from "../../Api";

const UserRender = () => {
  const [users, setUsers] = useState([]);
  // Busca Informações na Ape retornando um false para cada Usuário
  useEffect(() => {
    const listUsers = async () => {
      let json = await fetchUsers();
      const usersInfo = json.map((user) => ({ ...user, info: false }));
      setUsers(usersInfo);
    };
    listUsers();
  }, []);

  // Cria um evento onde só altera o estado do Info no usuário clicado
  const eventInfo = (index) => {
    const newUsers = [...users];
    newUsers[index].info = !newUsers[index].info;
    setUsers(newUsers);
  };

  return (
    <div>
      {users.map((item, index) => (
        <ContentUser key={item.id}>
          <div>
            <Text>ID:</Text> {item.id}
          </div>
          <div>
            <Text>Nome:</Text> {item.name}
          </div>
          <div>
            <Text>User Name:</Text> {item.username}
          </div>
          <div>
            <Text>Email:</Text> {item.email}
          </div>
          {
            //Renderização condicional do ícone de seta para cima ou para baixo, dependendo do valor da propriedade "info"
            item.info ? (
              <FaChevronUp size="15" onClick={() => eventInfo(index)} />
            ) : (
              <FaChevronDown size="15" onClick={() => eventInfo(index)} />
            )
          }
          {item.info && (
            <div>
              <hr />
              <Text>Endereço </Text>
              <div key={1}>
                <div>
                  <Text>Rua:</Text> {item.address.street}
                </div>
                <div>
                  <Text>Suite:</Text> {item.address.suite}
                </div>
                <div>
                  <Text>Cidade:</Text> {item.address.city}
                </div>
                <div>
                  <Text>CEP:</Text> {item.address.zipcode}
                </div>
                <div>
                  <hr />
                  <Text>Geografico:</Text>
                  <div>
                    <div>
                      <Text>Lat:</Text> {item.address.geo.lat}
                    </div>
                    <div>
                      <Text>Lnt:</Text> {item.address.geo.lng}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ContentUser>
      ))}
    </div>
  );
};

export default UserRender;
