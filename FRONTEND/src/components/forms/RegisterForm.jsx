import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { validateEmail, validatePassword, validateName } from "../../utils/validators";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    setServerError("");

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (hasError) return;

    try {
      setLoading(true);
      await register(form.name, form.email, form.password);
      setSuccess("Account created ✅");
      setTimeout(() => navigate("/dashboard"), 600);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card p-4 shadow-sm rounded-4">
      <h4 className="mb-3">Register</h4>

      {success && <div className="alert alert-success">{success}</div>}
      {serverError && <div className="alert alert-danger">{serverError}</div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          error={errors.password}
        />

        <Button text={loading ? "Creating..." : "Create Account"} type="submit" disabled={loading} />
      </form>
    </div>
  );
}