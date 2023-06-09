import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import UserRender from "../../Components/UserRender";

const Users = () => {
  return (
    <div>
      <Header />
      <Container title="Users" description="Users">
        <Menu />
        <UserRender />
      </Container>
      <Footer />
    </div>
  );
};

export default Users;
