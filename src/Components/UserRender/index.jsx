import React, { useEffect, useState } from "react";
import { ContentUser, Text } from "./styled";

const UserRender = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    setUsers(json);
  };

  return (
    <div>
      {users.map((item) => (
        <ContentUser key={item.id}>
          <div>
            {" "}
            <Text>ID:</Text> {item.id}
          </div>
          <div>
            {" "}
            <Text>Nome:</Text> {item.name}
          </div>
          <div>
            {" "}
            <Text>User Name:</Text> {item.username}
          </div>
          <div>
            {" "}
            <Text>Email:</Text> {item.email}
          </div>
          {
            // <div>
            //   {" "}
            //   Endereço{" "}
            //   <div key={1}>
            //     <div>Rua: {item.address.street}</div>
            //     <div>Suite: {item.address.suite}</div>
            //     <div>Cidade: {item.address.city}</div>
            //     <div>CEP: {item.address.zipcode}</div>
            //     <div>
            //       Geografico:{" "}
            //       <div>
            //         <div>Lat: {item.address.geo.lat}</div>
            //         <div>Lnt: {item.address.geo.lng}</div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          }
        </ContentUser>
      ))}
    </div>
  );
};

export default UserRender;
