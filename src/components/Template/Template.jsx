import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container, MainContent } from "./Template.styles";

export const Template = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  );
};
