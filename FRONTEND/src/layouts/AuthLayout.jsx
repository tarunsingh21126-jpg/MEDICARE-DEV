import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container py-5" style={{minHeight:"85vh"}}>
        <div className="row justify-content-center">
          <div className="col-md-5">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}