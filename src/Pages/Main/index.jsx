import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import PostRender from "../../Components/PostRender";

const Main = () => {
  return (
    <div>
      <Header />
      <Container title="Main" description="Main">
        <Menu />
        <PostRender />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
