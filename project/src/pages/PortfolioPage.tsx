import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RetroButton from '../components/ui/RetroButton';
import RetroCard from '../components/ui/RetroCard';
import PixelatedImage from '../components/ui/PixelatedImage';

const PortfolioPage: React.FC = () => {
  const categories = ['All', 'Web Design', 'Frontend', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Retro Game Portal',
      category: 'Web Design',
      description: 'A nostalgic web portal featuring classic browser games with a retro interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      category: 'Frontend',
      description: 'A comprehensive dashboard for managing online store operations.',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      image: 'https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Blog Platform',
      category: 'Full Stack',
      description: 'A complete blogging platform with user authentication and content management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/5698697/pexels-photo-5698697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      category: 'Frontend',
      description: 'A weather application with location-based forecasts and historical data.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Template',
      category: 'Web Design',
      description: 'A customizable portfolio template for creative professionals.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/4050471/pexels-photo-4050471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    },
    {
      id: 6,
      title: 'Task Management System',
      category: 'Full Stack',
      description: 'A project management tool with task tracking and team collaboration features.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3774088/pexels-photo-3774088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: '#',
      repoUrl: '#'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-900 pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
            My Portfolio
          </h1>
          <p className="text-amber-900 dark:text-amber-300 max-w-2xl mx-auto">
            A collection of my recent projects, showcasing my skills and expertise in web development.
          </p>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-600 mx-auto mt-6"></div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 font-mono text-sm transition-all duration-300
                border-2 border-amber-800 dark:border-amber-600
                ${activeCategory === category 
                  ? 'bg-amber-800 dark:bg-amber-700 text-amber-100' 
                  : 'bg-amber-100 dark:bg-zinc-800 text-amber-800 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-zinc-700'}
              `}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group transition-all duration-300 opacity-0 animate-fade-in" 
              style={{animationDelay: `${project.id * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <RetroCard variant="primary" className="h-full overflow-hidden">
                <div className="relative aspect-video mb-4 overflow-hidden border-2 border-amber-800 dark:border-amber-600 group-hover:border-4 transition-all">
                  <PixelatedImage 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-amber-900/80 dark:bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <RetroButton href={project.demoUrl} variant="neon" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </RetroButton>
                    <RetroButton href={project.repoUrl} variant="neon" size="sm">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </RetroButton>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold font-mono text-amber-800 dark:text-amber-400">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono bg-amber-200 dark:bg-amber-900/30 px-2 py-1 text-amber-800 dark:text-amber-400">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-amber-900 dark:text-amber-300 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-amber-200/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RetroCard>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <RetroCard variant="terminal" className="max-w-md mx-auto p-6">
              <h3 className="text-xl font-mono mb-4">No projects found</h3>
              <p className="font-mono text-sm mb-4">
                No projects match the selected category.
              </p>
              <RetroButton onClick={() => setActiveCategory('All')} variant="neon">
                View All Projects
              </RetroButton>
            </RetroCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;