import './About.css';

export function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About My Web App</h1>
        
        <section className="about-section">
          <h2>Project Overview</h2>
          <p>
            My Web App is a modern, minimalist React application built with TypeScript and Vite.
            It demonstrates best practices for frontend development, including type safety,
            component-based architecture, and automated deployment workflows.
          </p>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <ul className="tech-list">
            <li><strong>Frontend Framework:</strong> React 18.3.1</li>
            <li><strong>Language:</strong> TypeScript 5.5.3</li>
            <li><strong>Build Tool:</strong> Vite 5.3.4</li>
            <li><strong>Deployment:</strong> Vercel</li>
            <li><strong>Version Control:</strong> Git & GitHub</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>⚡ Lightning-fast development with Vite HMR</li>
            <li>🔒 Type-safe development with TypeScript</li>
            <li>🚀 Automated deployment to production</li>
            <li>📱 Responsive component-based UI</li>
            <li>📖 Comprehensive documentation</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Getting Started</h2>
          <p>
            To start developing new features, check out the{' '}
            <a href="https://github.com/robinpayman/my-web-app#adding-new-features">
              Adding New Features
            </a>{' '}
            guide in the README.
          </p>
        </section>

        <section className="about-section">
          <h2>Repository</h2>
          <p>
            View the source code on{' '}
            <a href="https://github.com/robinpayman/my-web-app" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
