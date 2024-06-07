import { LayoutProps } from "../../types/types";
import NavBar from "../shared/components/NavBar/NavBar";
import Footer from "../shared/components/Footer/Footer";

const RegisterLayout = ({ children }: LayoutProps) => {
  return (
    <>
    <NavBar></NavBar>
      {children}
      <Footer />
    </>
  );
};

export default RegisterLayout;