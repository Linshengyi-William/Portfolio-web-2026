export default function ResumePage() {
  return (
    <div className="container-page space-y-6">
      <h1 className="text-3xl font-bold">Resume</h1>
      <ul className="list-disc space-y-1 pl-5 text-slate-700">
        <li>Built automation frameworks with measurable reliability impact.</li>
        <li>Designed production-safe delivery workflows and CI quality gates.</li>
        <li>Led cross-functional improvements that reduced release friction.</li>
      </ul>
      <a className="inline-block rounded-lg bg-accent px-4 py-2 text-white" href="/resume.pdf" download>
        Download Resume
      </a>
      <iframe
        title="Resume PDF"
        src="/resume.pdf"
        className="h-[70vh] w-full rounded-lg border"
      />
    </div>
  );
}
