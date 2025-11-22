import { CapabilityCard } from "./components/CapabilityCard";
import { Highlight } from "./components/Highlight";

const capabilities = [
  {
    title: "Full-Stack Web Delivery",
    description:
      "Design, implement, test, and refine modern web apps end-to-end with production-grade tooling, best practices, and deployment automation.",
    examples: [
      "Spin up Next.js, React, or Vue projects tailored to your product vision",
      "Wire up APIs, databases, authentication, and third-party integrations",
      "Ship pixel-perfect UI with responsive layouts and accessible interactions"
    ],
    accent: "gold" as const
  },
  {
    title: "Product Strategy & Architecture",
    description:
      "Transform ambiguous ideas into execution-ready plans. Navigate trade-offs, select technologies, and architect scalable solutions autonomously.",
    examples: [
      "Create RFCs, diagrams, and implementation roadmaps",
      "Recommend database schemas, caching patterns, and resiliency tactics",
      "Assess feasibility, risk, and impact to keep teams aligned"
    ],
    accent: "blue" as const
  },
  {
    title: "Continuous Learning Partner",
    description:
      "Level up your team with hands-on walkthroughs, inline documentation, and actionable feedback that accelerates shipping and learning.",
    examples: [
      "Explain decisions and surface trade-offs in plain language",
      "Review pull requests with precision, pointing out bugs and pitfalls",
      "Curate learning paths, reference snippets, and best practices"
    ],
    accent: "coral" as const
  },
  {
    title: "Automation & Ops",
    description:
      "Automate workflows, set up CI/CD, configure observability, and keep your stack humming with minimal manual intervention.",
    examples: [
      "Provision infrastructure-as-code and cloud resources",
      "Author GitHub Actions, linting suites, and test harnesses",
      "Monitor health with logging, tracing, and alerting hooks"
    ],
    accent: "persimmon" as const
  }
];

export default function App() {
  return (
    <main>
      <div className="radial-overlay" aria-hidden />

      <section className="intro">
        <div className="badge-row">
          <Highlight>Autonomous Agent</Highlight>
          <Highlight>Full Ownership</Highlight>
          <Highlight>Fast Iteration</Highlight>
        </div>
        <h1 className="title">
          Meet the agent that designs, codes, tests, and deploys — start to finish.
        </h1>
        <p className="subtitle">
          I execute product ideas autonomously: turning initial prompts into production-ready experiences, prioritizing impact, and shipping with the precision of a seasoned engineering team.
        </p>
        <div className="cta-row">
          <a href="#capabilities" className="cta-button">
            Explore capabilities ↗
          </a>
          <span className="cta-note">
            Always-on partner for product, design, and engineering teams.
          </span>
        </div>
      </section>

      <section id="capabilities" className="section">
        <header className="section-header">
          <h2 className="section-title">What I deliver</h2>
          <p className="section-description">
            From idea to deploy, I run point. These pillars represent the core surfaces the agent covers so you can stay focused on vision and outcomes.
          </p>
        </header>
        <div className="card-grid">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>

      <section className="collab-panel">
        <h2 className="collab-title">How we collaborate</h2>
        <ol className="collab-steps">
          <li>
            <strong>1. Share the vision.</strong> Drop product goals, constraints, or raw ideas. I synthesize requirements and craft the plan.
          </li>
          <li>
            <strong>2. Iterate quickly.</strong> I build, test, and refine — delivering tangible progress each cycle, complete with rationale and next moves.
          </li>
          <li>
            <strong>3. Ship with confidence.</strong> Deployments, verification, and handoff assets are covered. You get the final say, not the heavy lifting.
          </li>
        </ol>
      </section>

      <footer>
        <span>Ready for your next launch? Just hand me the brief.</span>
        <span>Deployable instantly to Vercel — optimized for clarity, speed, and autonomy.</span>
      </footer>
    </main>
  );
}
