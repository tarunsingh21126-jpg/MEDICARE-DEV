export default function Footer() {
  return (
    <footer className="border-top bg-white">
      <div className="container py-3 text-center">
        <small className="text-muted">
          © {new Date().getFullYear()} Jarurat Care — Healthcare Support Web App
        </small>
      </div>
    </footer>
  );
}