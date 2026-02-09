import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import {
  validateEmail,
  validateName,
  validateMessage,
} from "../../utils/validators";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");

    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      message: validateMessage(form.message),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (hasError) return;

    setSuccess("Message sent successfully ✅");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="card p-4 shadow-sm rounded-4">
      <h4 className="mb-3">Contact Us</h4>

      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          error={errors.name}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          error={errors.email}
        />

        <div className="mb-3">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
          />
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <Button text="Send Message" type="submit" />
      </form>
    </div>
  );
}