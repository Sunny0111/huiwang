import React from 'react';
import { publications } from './data/publications.js';
import { languages, profile, projects, skills } from './data/profile.js';

function LinkButton({ href, tone = 'pink', icon, children }) {
  return (
    <a
      className={`link-button ${tone}`}
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('#') ? undefined : '_blank'}
      rel="noreferrer"
    >
      <span aria-hidden="true">{icon}</span>
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Publications() {
  return (
    <div className="publication-list">
      {publications.map((publication) => (
        <article className="publication" key={publication.id}>
          <div className="publication-body">
            <p className="publication-year">{publication.year}</p>
            <h3>{publication.title}</h3>
            {publication.authors && <p className="publication-authors">{publication.authors}</p>}
            <p className="publication-venue">{publication.venue}</p>
            <div className="tag-row">
              {publication.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="publication-links">
              <a className="doi-link" href={publication.doiUrl} target="_blank" rel="noreferrer">
                DOI {publication.doi}
              </a>
            </div>
          </div>
          {publication.image && (
            <figure className="publication-figure">
              <img src={publication.image} alt={publication.imageAlt} loading="lazy" />
            </figure>
          )}
        </article>
      ))}
    </div>
  );
}

function News() {
  return (
    <div className="news-list">
      <article className="news-item">
        <time>2026</time>
        <p>
          CrossDDI was published in BioNLP 2026, focusing on evidence-grounded drug-drug interaction verification.
        </p>
      </article>
      <article className="news-item">
        <time>2025</time>
        <p>
          One paper on Human-AI co-creation and agency was published in Proceedings of the ACM on Human-Computer
          Interaction.
        </p>
      </article>
    </div>
  );
}

function Work() {
  return (
    <div className="timeline-list">
      <article className="timeline-entry">
        <span>04.2024 - 04.2026</span>
        <div>
          <a href="https://www.soennecken.de/" target="_blank" rel="noreferrer">
            Soennecken eG
          </a>
          <p>Software Development & Testing</p>
        </div>
      </article>
      <article className="timeline-entry">
        <span>04.2026 - 07.2026</span>
        <div>
          <strong>Straight-A</strong>
          <p>Software Development - Vibe Coding</p>
        </div>
      </article>
      <article className="timeline-entry">
        <span>08.2026 - Present</span>
        <div>
          <strong>Hiwi - Research Assistant</strong>
          <p>University of Duisburg-Essen</p>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="top-nav" aria-label="Main navigation">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="moon-button" type="button" aria-label="Theme toggle">
            🌙
          </button>
        </div>
      </nav>

      <div className="page-shell">
        <header className="masthead" id="top">
          <h1>{profile.name}</h1>
        </header>

        <main>
          <hr className="rule" />

          <section className="intro-panel" aria-label="Profile introduction">
            <div className="portrait-card">
              <img className="avatar" src={profile.avatar} alt={profile.name} />
            </div>

            <div className="intro-copy">
              <p className="intro-text">
                I am a Software Engineering student at <strong>University of Duisburg-Essen</strong>. Based in{' '}
                {profile.location}, I enjoy building reliable software systems and thoughtful interfaces. My current
                interests include <span>#Software Development</span>, <span>#Vibe Coding</span>, <span>#NLP</span>, and{' '}
                <span>#HCI</span>.
              </p>
            </div>
          </section>

          <nav className="quick-links" aria-label="Profile links">
            <LinkButton href={profile.scholar} tone="lemon" icon="🎓">
              Google Scholar
            </LinkButton>
            <LinkButton href={profile.github} tone="lavender" icon="🐙">
              GitHub
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} tone="mint" icon="📧">
              Email
            </LinkButton>
          </nav>

          <hr className="rule" />

          <div className="content-flow">
            <Section id="news" title="News">
              <News />
            </Section>

            <Section id="publications" title="Selected Publications">
              <Publications />
            </Section>

            <Section id="work" title="Work">
              <Work />
            </Section>

            <Section id="projects" title="Project Experience">
              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project" key={project.title}>
                    <h3>{project.title}</h3>
                    <p className="project-stack">{project.stack}</p>
                    <p>{project.role}</p>
                  </article>
                ))}
              </div>
            </Section>

            <section className="split-section" aria-label="Skills and languages">
              <div className="info-card skills-card">
                <h2>Software Skills</h2>
                <ul className="clean-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="info-card languages-card">
                <h2>Languages</h2>
                <ul className="clean-list">
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
            </section>

            <Section id="contact" title="Contact">
              <p>
                Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </Section>
          </div>
        </main>
      </div>
    </>
  );
}
