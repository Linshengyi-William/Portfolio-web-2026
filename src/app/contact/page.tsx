export default function ContactPage() {
  return (
    <div className="container-page space-y-5">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Feel free to reach out through any of the channels below.</p>
      <ul className="space-y-2">
        <li>
          <a href="mailto:your-email@example.com">Email</a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
