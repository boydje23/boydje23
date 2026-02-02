import Card from '../components/Card';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const heroAnim = useScrollAnimation();
  const gridAnim = useScrollAnimation();

  const projects = [
    {
      title: 'Spotify Network Analysis',
      description: 'Analyzes global music patterns by examining Spotify\'s Top 200 charts from five regions—Japan, the United States, Nigeria, Denmark, and Brazil—during the week of November 6. By constructing networks of songs linked through shared artists, I explore how musical collaborations and cross-regional popularity shape the structure of global music charts.',
      tags: ['Jupyter Notebook', 'Numpy', 'Pandas', 'Matplotlib', 'NetworkX'],
      link: 'https://github.com/boydje23/Spotify-Network-Analysis',
    },
    {
      title: 'Baseball Statistical Analysis and Salary Predictor',
      description: 'Uses MLB hitting statistics from 2020-2024 to predict player salaries in the 2025 season through linear regression, KNN regression, and random forest algorithms. The analysis provides practical value to MLB franchises by modeling expected player earnings and revealing which performance factors contribute most significantly to salary determination.',
      tags: ['Jupyter Notebook', 'Pandas', 'Numpy', 'sklearn', 'Matplotlib'],
      link: 'https://github.com/boydje23/Baseball-Statistical-Analysis-and-Salary-Predictor',
    },
    {
      title: 'Wordle',
      description: 'This customized Wordle game lets players switch between multiple languages and upload their own word lists for a personalized puzzle experience. By allowing users to create custom word files, the game transforms the classic Wordle format into a flexible learning tool or entertainment platform tailored to individual preferences.',
      tags: ['Java', 'HTML', 'CSS'],
      link: 'https://github.com/boydje23/Wordle',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my work and skills. Built with React and TypeScript, featuring a clean monochromatic design and smooth interactions.',
      tags: ['React', 'TypeScript', 'CSS', 'HTML'],
      link: 'https://github.com/boydje23/boydje23',
    },
    {
      title: 'Health App',
      description: 'A minimalist blog platform with markdown support, syntax highlighting, and a custom CMS. Optimized for readability and fast loading times.',
      tags: ['Swift'],
      link: 'https://https://github.com/boydje23/HealthApp.com',
    },
    
  ];

  return (
    <main className="projects">
      <section 
        ref={heroAnim.ref}
        className={`projects-hero fade-in ${heroAnim.isVisible ? 'visible' : ''}`}
      >
        <h1 className="page-title animated-title">Projects</h1>
        <p className="page-subtitle">A collection of my recent work and side projects</p>
      </section>

      <section 
        ref={gridAnim.ref}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`scale-in stagger-${(index % 3) + 1} ${gridAnim.isVisible ? 'visible' : ''}`}
          >
            <Card
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
