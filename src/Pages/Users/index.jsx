import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import UserRender from "../../Components/UserRender";

const Users = () => {
  return (
    <div>
      <Header />
      <Container title="Users" description="Users">
        <UserRender />
      </Container>
      <Footer />
    </div>
  );
};

export default Users;
