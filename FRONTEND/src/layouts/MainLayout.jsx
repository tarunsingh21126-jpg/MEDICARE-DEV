import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{minHeight:"85vh"}}>{children}</main>
      <Footer />
    </>
  );
}