import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import ContactForm from "../components/forms/ContactForm";

export default function Forms() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Forms</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <LoginForm />
        </div>

        <div className="col-md-4">
          <RegisterForm />
        </div>

        <div className="col-md-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}