import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  const heroAnim = useScrollAnimation();
  const aboutMeAnim = useScrollAnimation();
  const introAnim = useScrollAnimation();

  const [activeImage, setActiveImage] = useState(`${process.env.PUBLIC_URL}/images/default.jpg`);

  const aboutCards = [
    {
      id: 'school',
      title: 'Education',
      icon: '🎓',
      description: 'Double Major passonate about learning and growth',
      image: `${process.env.PUBLIC_URL}/images/school.jpg`,
      position: 'top',
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: '💼',
      description: 'Building real-world skills through internships and projects',
      image: `${process.env.PUBLIC_URL}/images/experience.jpg`,
      position: 'left',
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: '🚀',
      description: 'Creating predictive models, web applications, and games to be as well rounded as possible',
      image: `${process.env.PUBLIC_URL}/images/projects.jpg`,
      position: 'right',
    },
    {
      id: 'interests',
      title: 'Interests',
      icon: '✨',
      description: 'Design, music, and the gym of course',
      image: `${process.env.PUBLIC_URL}/images/interests.jpg`,
      position: 'bottom',
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div 
          ref={heroAnim.ref}
          className={`hero-content fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
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

          <h1 className="hero-title animated-title">
            Hi, I'm <span className="highlight gradient-text">Jason</span>
          </h1>
          
          <p className="hero-tagline">
            Computer Science Student & Psycholgy Student
          </p>
          
          <p className="hero-description">
          I’m a Full-Stack Developer interested in the intersection of Computer Science and Psychology, 
          focused on personalized education for students with autism.
          </p>
          
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section 
        ref={aboutMeAnim.ref}
        className="about-me-section"
      >
        <h2 className={`section-title fade-in ${aboutMeAnim.isVisible ? 'visible' : ''}`}>
          Get To Know Me
        </h2>
        <div className={`about-me-grid scale-in ${aboutMeAnim.isVisible ? 'visible' : ''}`}>
          {aboutCards.filter(c => c.position === 'top').map(card => (
            <div
              key={card.id}
              className={`about-card about-card-${card.position}`}
              onMouseEnter={() => setActiveImage(card.image)}
              onMouseLeave={() => setActiveImage(`${process.env.PUBLIC_URL}/images/default.jpg`)}
            >
              <span className="about-card-icon">{card.icon}</span>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.description}</p>
            </div>
          ))}
          
          <div className="about-middle-row">
            {aboutCards.filter(c => c.position === 'left').map(card => (
              <div
                key={card.id}
                className={`about-card about-card-${card.position}`}
                onMouseEnter={() => setActiveImage(card.image)}
                onMouseLeave={() => setActiveImage(`${process.env.PUBLIC_URL}/images/default.jpg`)}
              >
                <span className="about-card-icon">{card.icon}</span>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-desc">{card.description}</p>
              </div>
            ))}

            <div className="about-image-container">
              <img 
                src={activeImage} 
                alt="About me" 
                className="about-center-image"
              />
              <div className="about-image-glow"></div>
            </div>

            {aboutCards.filter(c => c.position === 'right').map(card => (
              <div
                key={card.id}
                className={`about-card about-card-${card.position}`}
                onMouseEnter={() => setActiveImage(card.image)}
                onMouseLeave={() => setActiveImage(`${process.env.PUBLIC_URL}/images/default.jpg`)}
              >
                <span className="about-card-icon">{card.icon}</span>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-desc">{card.description}</p>
              </div>
            ))}
          </div>

          {aboutCards.filter(c => c.position === 'bottom').map(card => (
            <div
              key={card.id}
              className={`about-card about-card-${card.position}`}
              onMouseEnter={() => setActiveImage(card.image)}
              onMouseLeave={() => setActiveImage(`${process.env.PUBLIC_URL}/images/default.jpg`)}
            >
              <span className="about-card-icon">{card.icon}</span>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section 
        ref={introAnim.ref}
        className="intro-section"
      >
        <h2 className={`section-title fade-in ${introAnim.isVisible ? 'visible' : ''}`}>
          What I Do
        </h2>
        <div className="intro-grid">
          <div className={`intro-card scale-in stagger-1 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">🎨</div>
            <h3>Web Design</h3>
            <p>Creating visually appealing and user-friendly interfaces</p>
          </div>
          <div className={`intro-card scale-in stagger-2 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">💻</div>
            <h3>Development</h3>
            <p>Building learning and predictive algorithms on various types of data</p>
          </div>
          <div className={`intro-card scale-in stagger-3 ${introAnim.isVisible ? 'visible' : ''}`}>
            <div className="intro-icon">🚀</div>
            <h3>Problem Solving</h3>
            <p>Turning complex challenges into elegant solutions</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;