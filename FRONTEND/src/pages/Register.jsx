import RegisterForm from "../components/forms/RegisterForm";

export default function Register() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}