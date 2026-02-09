import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold">Home Page</h1>
      <p className="text-muted">
        Ye project me Forms + Chatbot + Dashboard sab banega.
      </p>

      <Link to="/forms" className="btn btn-dark">
        Go to Forms
      </Link>
    </div>
  );
}