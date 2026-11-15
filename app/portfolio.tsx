import { pageContent, siteContent, type Language } from "./content";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>
);

export function Portfolio({ language }: { language: Language }) {
  const text = pageContent[language];

  return (
    <main id="main" tabIndex={-1}>
      <div className="topbar">
        <a className="wordmark" href="#home" aria-label={text.nav.homeLabel}>KR<span>.</span></a>
        <nav aria-label={text.nav.mainLabel}>
          <a href="#work">{text.nav.work}</a>
          <a href="#experience">{text.nav.experience}</a>
          <a href="#about">{text.nav.about}</a>
          <a href="#cv">{text.nav.cv}</a>
          <a href="#contact" className="nav-contact">{text.nav.contact} <Arrow diagonal /></a>
          <a
            href={language === "en" ? "/de" : "/"}
            className="language-toggle"
            lang={language === "en" ? "de" : "en"}
            aria-label={text.languageSwitchLabel}
          >
            {text.languageSwitch}
          </a>
        </nav>
      </div>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> {text.hero.eyebrow}</div>
          <h1>
            {text.hero.headline.map((line) => <span key={line}>{line}<br /></span>)}
            <em>{text.hero.emphasis.map((line) => <span key={line}>{line}<br /></span>)}</em>
          </h1>
          <p className="hero-intro">{text.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{text.hero.explore} <Arrow /></a>
            <a className="text-link" href="#cv">{text.hero.requestCv} <Arrow diagonal /></a>
          </div>
          <div className="hero-meta">
            <span>{text.hero.location}</span>
            <span className="meta-line" />
            <span>{text.hero.field}</span>
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label={text.hero.portraitAlt}>
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-sun" />
          <div className="portrait-placeholder">
            <div className="portrait-head" />
            <div className="portrait-body" />
            <span className="portrait-label">{text.hero.portraitLabel[0]}<br />{text.hero.portraitLabel[1]}</span>
          </div>
          <div className="floating-note note-top"><span>01 /</span> {text.hero.notes[0]}</div>
          <div className="floating-note note-bottom"><span>02 /</span> {text.hero.notes[1]}</div>
          <div className="visual-caption">{text.hero.caption}</div>
        </div>
        <div className="hero-side-note">{text.hero.sideNote[0]} <span>×</span> {text.hero.sideNote[1]} <span>×</span> {text.hero.sideNote[2]}</div>
      </section>

      <section className="proof-strip section-wrap" aria-label={text.proof.label}>
        {[text.proof.experience, text.proof.education, text.proof.focus, text.proof.location].map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="ticker" aria-label={text.ticker.label}>
        <div className="ticker-track">
          {[...text.ticker.items, ...text.ticker.items].map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= text.ticker.items.length || undefined}
            >
              {item}<b> ✳ </b>
            </span>
          ))}
        </div>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-kicker">{text.about.kicker}</div>
        <div className="about-grid">
          <h2>{text.about.heading}<br /><em>{text.about.emphasis}</em></h2>
          <div className="about-copy">
            <p className="large-copy">{text.about.lead}</p>
            {text.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="underlined-link" href="#curiosity">{text.about.link} <Arrow diagonal /></a>
          </div>
        </div>
        <div className="values-row">
          {text.about.values.map((value, index) => (
            <div key={value}><strong>0{index + 1}</strong><span>{value}</span></div>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-kicker">{text.work.kicker}</div>
              <h2>{text.work.heading}<br /><em>{text.work.emphasis}</em></h2>
            </div>
            <p>{text.work.intro}</p>
          </div>
          <div className="project-list">
            {text.projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.accent}`} aria-hidden="true">
                  <span className="project-index">{project.number}</span>
                  {project.number === "01" && <div className="scan-art"><div /><div /><div /><span>{language === "en" ? "DATA / HEALTH" : "DATEN / GESUNDHEIT"}</span></div>}
                  {project.number === "02" && <div className="orbit-art"><i /><i /><i /><b>+</b></div>}
                  {project.number === "03" && <div className="system-art"><i /><i /><i /><i /><b>↗</b></div>}
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {project.link && (
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      {project.linkLabel} <Arrow diagonal />
                    </a>
                  )}
                </div>
                <div className="project-arrow" aria-hidden="true">{project.link ? "↗" : "•"}</div>
              </article>
            ))}
          </div>
          <p className="note-small">{text.work.note}</p>
        </div>
      </section>

      <section className="experience section-wrap section-pad" id="experience">
        <div className="section-kicker">{text.experience.kicker}</div>
        <div className="experience-heading">
          <h2>{text.experience.heading}<br /><em>{text.experience.emphasis}</em></h2>
          <p>{text.experience.intro}</p>
        </div>
        <div className="timeline">
          {text.experience.items.map((item) => (
            <article className="timeline-item" key={item.organization}>
              <span className="timeline-date">{item.date}</span>
              <div>
                <h3>{item.organization}</h3>
                <a className="evidence-link" href={item.evidenceUrl} target="_blank" rel="noreferrer">
                  {item.evidenceLabel} <Arrow diagonal />
                </a>
                <div className="timeline-role">{item.role}</div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="education-block">
          <div className="project-type">{text.experience.education}</div>
          <div className="education-list">
            {text.experience.educationItems.map((item) => (
              <article className="education-item" key={item.qualification}>
                <div><h3>{item.qualification}</h3><p>{item.institution}</p></div>
                <span>{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="currently section-wrap">
        <div className="section-kicker">{text.currently.kicker}</div>
        <div className="currently-grid">
          {text.currently.items.map((item) => (
            <div key={item.label}><span>{item.label}</span><p>{item.description}</p></div>
          ))}
        </div>
      </section>

      <section className="skills section-pad">
        <div className="section-wrap">
          <div className="section-kicker">{text.skills.kicker}</div>
          <div className="skills-heading">
            <h2>{text.skills.heading}<br /><em>{text.skills.emphasis}</em></h2>
            <p>{text.skills.intro}</p>
          </div>
          <div className="skills-grid">
            {text.skills.groups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="curiosity section-wrap section-pad" id="curiosity">
        <div className="section-kicker">{text.curiosity.kicker}</div>
        <div className="curiosity-head">
          <h2>{text.curiosity.heading}<br /><em>{text.curiosity.emphasis}</em></h2>
          <p>{text.curiosity.intro}</p>
        </div>
        <div className="interest-grid">
          {text.curiosity.interests.map(([number, title, description]) => (
            <article className="interest-item" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="travel-banner">
          <div className="travel-mark">K<span>R</span></div>
          <div>
            <span className="project-type">{text.curiosity.fieldNotes}</span>
            <h3>{text.curiosity.fieldNotesTitle}</h3>
            <p>{text.curiosity.fieldNotesText}</p>
          </div>
          <span className="travel-star">✳</span>
        </div>
      </section>

      <section className="cv-section section-pad" id="cv">
        <div className="section-wrap">
          <div className="section-kicker">{text.cv.kicker}</div>
          <div className="cv-heading">
            <h2>{text.cv.heading}<br /><em>{text.cv.emphasis}</em></h2>
            <p>{text.cv.intro}</p>
          </div>
          <div className="cv-grid">
            {text.cv.tracks.map((track, index) => (
              <article className="cv-card" key={track.title}>
                <span>0{index + 1}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </article>
            ))}
          </div>
          <a className="button button-dark" href={`mailto:${siteContent.email}?subject=${encodeURIComponent(text.cv.subject)}`}>
            {text.cv.request} <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">{text.contact.kicker}</div>
          <h2>{text.contact.heading}<br /><em>{text.contact.emphasis}</em></h2>
          <p>{text.contact.intro}</p>
          <a className="button button-light" href={`mailto:${siteContent.email}`}>{text.contact.email} <Arrow diagonal /></a>
          <div className="contact-bottom">
            <span>{text.contact.footerPrompt}</span>
            <span>{text.contact.location}</span>
          </div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home" aria-label={text.nav.homeLabel}>KR<span>.</span></a>
        <span>© {new Date().getFullYear()} {siteContent.name}. {text.footer.copyright}</span>
        <div className="footer-links">
          <a href={siteContent.socialLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href={siteContent.socialLinks.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="#home">{text.footer.backToTop}</a>
        </div>
      </footer>
    </main>
  );
}
