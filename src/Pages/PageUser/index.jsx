import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";

const PageUser = () => {
  return (
    <div>
      <Header />
      <Container title="UsersId" description="UsersId">
        <Menu />
      </Container>
      <Footer />
    </div>
  );
};

export default PageUser;
