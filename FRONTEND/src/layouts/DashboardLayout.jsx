import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container py-5"style={{minHeight:"85vh"}}>{children}</main>
      <Footer />
    </>
  );
}

