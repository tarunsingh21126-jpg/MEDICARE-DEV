import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}