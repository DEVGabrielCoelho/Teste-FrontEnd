import React, { useEffect, useState } from "react";
import { ContentUser } from "./styled";

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
          <div> ID: {item.id}</div>
          <div> Nome: {item.name}</div>
          <div> User Name: {item.username}</div>
          <div> Email: {item.email}</div>
          {/* <div>
            {" "}
            Endereço{" "}
            <div key={1}>
              <div>Rua: {item.address.street}</div>
              <div>Suite: {item.address.suite}</div>
              <div>Cidade: {item.address.city}</div>
              <div>CEP: {item.address.zipcode}</div>
              <div>
                Geografico:{" "}
                <div>
                  <div>Lat: {item.address.geo.lat}</div>
                  <div>Lnt: {item.address.geo.lng}</div>
                </div>
              </div>
            </div>
          </div> */}
        </ContentUser>
      ))}
    </div>
  );
};

export default UserRender;

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
