import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import RetroButton from '../components/ui/RetroButton';
import RetroCard from '../components/ui/RetroCard';
import TypingEffect from '../components/ui/TypingEffect';
import PixelatedImage from '../components/ui/PixelatedImage';

const HomePage: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 3000); // Show projects after typing effect is likely done
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 bg-amber-50 dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-amber-800 dark:border-amber-400"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-amber-800 dark:text-amber-400 font-serif">
              <TypingEffect 
                text="John Doe" 
                speed={100} 
              />
            </h1>
            <div className="h-12">
              <TypingEffect 
                text="Creative Developer & Digital Craftsman" 
                speed={50}
                delay={1500}
                className="text-xl md:text-2xl text-amber-700 dark:text-amber-500 font-mono"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mt-16 items-center">
            <div className="w-full md:w-1/2">
              <RetroCard 
                variant="terminal" 
                className="p-6 h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="text-xs ml-2 opacity-70">terminal</div>
                </div>
                
                <div className="font-mono text-sm md:text-base">
                  <p className="mb-4">
                    <TypingEffect 
                      text="Hello, World! I'm a creative developer with a passion for blending nostalgic web aesthetics with modern functionality."
                      speed={30}
                      delay={2000}
                    />
                  </p>
                  <p className="mb-4 hidden md:block">
                    <TypingEffect 
                      text="I specialize in crafting unique digital experiences that stand out in today's web landscape."
                      speed={30}
                      delay={4000}
                    />
                  </p>
                  <div className="flex mt-6 gap-4">
                    <RetroButton 
                      to="/about" 
                      variant="neon" 
                      size="sm"
                    >
                      whoami
                    </RetroButton>
                    <RetroButton 
                      to="/portfolio" 
                      variant="neon" 
                      size="sm"
                    >
                      ls projects
                    </RetroButton>
                  </div>
                </div>
              </RetroCard>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative border-8 border-amber-100 dark:border-zinc-800 shadow-retro transform rotate-2 hover:rotate-0 transition-all duration-500">
                <PixelatedImage 
                  src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg" 
                  alt="John Doe - Creative Developer"
                  className="w-full aspect-square md:aspect-auto md:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-amber-100 dark:bg-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="inline-block text-2xl font-bold font-serif px-4 py-2 border-2 border-amber-800 dark:border-amber-600 text-amber-800 dark:text-amber-400">
              Featured Projects
            </h2>
          </div>
          
          {showProjects && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              {[1, 2, 3].map((project) => (
                <RetroCard 
                  key={project}
                  hoverEffect={true}
                  className="bg-amber-50 dark:bg-zinc-900"
                >
                  <div className="relative aspect-video mb-4 overflow-hidden border-2 border-amber-800 dark:border-amber-600">
                    <PixelatedImage 
                      src={`https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt={`Project ${project}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-mono font-bold text-amber-800 dark:text-amber-400 mb-2">
                    Project {project}
                  </h3>
                  <p className="text-amber-900 dark:text-amber-300 text-sm mb-4">
                    A short description of this amazing project and the technologies used.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {['HTML', 'CSS', 'JS'].map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-2 py-1 bg-amber-200/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <RetroButton to="/portfolio" size="sm" variant="primary">
                      View <ArrowRight className="w-3 h-3 ml-1" />
                    </RetroButton>
                  </div>
                </RetroCard>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <RetroButton to="/portfolio" variant="secondary">
              View All Projects
            </RetroButton>
          </div>
        </div>
      </section>
      
      {/* About Section Teaser */}
      <section className="py-16 px-4 bg-amber-50 dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-6 text-amber-800 dark:text-amber-400">
            About Me
          </h2>
          <p className="text-amber-900 dark:text-amber-300 mb-8 max-w-xl mx-auto">
            I'm a creative developer with over 5 years of experience crafting unique digital experiences. 
            My approach combines nostalgic design elements with modern development techniques.
          </p>
          <RetroButton to="/about" variant="primary">
            Learn More About Me
          </RetroButton>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-amber-900 dark:bg-black text-amber-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif mb-6">
            Let's Work Together
          </h2>
          <p className="mb-8 max-w-xl mx-auto">
            Have a project in mind? I'm currently available for freelance work.
          </p>
          <RetroButton to="/contact" variant="neon">
            Get In Touch
          </RetroButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;