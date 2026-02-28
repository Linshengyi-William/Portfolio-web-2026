export default function EngineeringPage() {
  return (
    <div className="container-page space-y-6">
      <h1 className="text-3xl font-bold">Engineering</h1>
      <section>
        <h2 className="text-xl font-semibold">Reliability Engineering</h2>
        <p>CI gating, flaky test stabilization, and incident-driven root cause analysis.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">System Design Philosophy</h2>
        <p>Use trade-off analysis, idempotent workflows, and safe rollouts with feature flags.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Automation Strategy</h2>
        <p>Build reusable tooling, parallel execution, and isolated environments by default.</p>
      </section>
    </div>
  );
}
