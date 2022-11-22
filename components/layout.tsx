import Container from "./container";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Container>
          <Header />
        </Container>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
