import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const heroAnim = useScrollAnimation();
  const photoAnim = useScrollAnimation();
  const bioAnim = useScrollAnimation();
  const skillsAnim = useScrollAnimation();
  const eduAnim = useScrollAnimation();

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Next.js'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Docker'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase'] },
  ];

  return (
    <main className="about">
      <section 
        ref={heroAnim.ref}
        className={`about-hero fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
      >
        <h1 className="page-title animated-title">About Me</h1>
        <p className="page-subtitle">Get to know the person behind the code</p>
      </section>

      <section
        ref={photoAnim.ref}
        className={`profile-section scale-in ${photoAnim.isVisible ? 'visible' : ''}`}
      >
       <div className="avatar-container">
        <div className="avatar">
          <img 
          src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} 
          alt="Jason" 
          className="avatar-image"
          />
          </div>
          </div>
      </section>

      <section 
        ref={bioAnim.ref}
        className="bio-section"
      >
        <div className="bio-content">
          <h2 className={`section-title fade-in-left ${bioAnim.isVisible ? 'visible' : ''}`}>Bio</h2>
          <p className={`bio-text fade-in-left stagger-1 ${bioAnim.isVisible ? 'visible' : ''}`}>
            I'm a Computer Science student with a deep passion for web design and development. 
            My journey into tech started with curiosity about how websites work, and quickly 
            evolved into a love for creating digital experiences that are both beautiful and functional.
          </p>
          <p className={`bio-text fade-in-left stagger-2 ${bioAnim.isVisible ? 'visible' : ''}`}>
            When I'm not coding, you'll find me exploring new design trends, contributing to 
            open-source projects, or learning about the latest web technologies. I believe in 
            continuous learning and pushing the boundaries of what's possible on the web.
          </p>
        </div>
      </section>

      <section 
        ref={skillsAnim.ref}
        className="skills-section"
      >
        <h2 className={`section-title fade-in ${skillsAnim.isVisible ? 'visible' : ''}`}>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-category scale-in stagger-${index + 1} ${skillsAnim.isVisible ? 'visible' : ''}`}
            >
              <h3 className="skill-category-title">{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        ref={eduAnim.ref}
        className="education-section"
      >
        <h2 className={`section-title fade-in ${eduAnim.isVisible ? 'visible' : ''}`}>Education</h2>
        <div className={`education-card fade-in-right stagger-1 ${eduAnim.isVisible ? 'visible' : ''}`}>
          <div className="education-header">
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <span className="education-year">2022 - Present</span>
          </div>
          <p className="education-school">University Name</p>
          <p className="education-details">
            Focusing on software engineering, web development, and user experience design.
            Maintaining a strong academic record while actively participating in coding clubs
            and hackathons.
          </p>
        </div>
        <div className={`education-card fade-in-right stagger-1 ${eduAnim.isVisible ? 'visible' : ''}`}>
          <div className="education-header">
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <span className="education-year">2022 - Present</span>
          </div>
          <p className="education-school">University Name</p>
          <p className="education-details">
            Focusing on software engineering, web development, and user experience design.
            Maintaining a strong academic record while actively participating in coding clubs
            and hackathons.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
