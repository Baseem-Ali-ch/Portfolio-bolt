import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import RetroCard from '../components/ui/RetroCard';
import PixelatedImage from '../components/ui/PixelatedImage';
import TypingEffect from '../components/ui/TypingEffect';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'TypeScript', level: 65 },
  ];

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-900 pt-16 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-600 mx-auto"></div>
        </div>
        
        {/* Bio Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                <div className="relative border-8 border-amber-100 dark:border-zinc-800 shadow-retro transform -rotate-2 hover:rotate-0 transition-all duration-500 mb-6">
                  <PixelatedImage 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                    alt="John Doe"
                    className="w-full aspect-square object-cover"
                  />
                </div>
                
                <RetroCard variant="primary" className="p-6 text-center">
                  <h2 className="text-xl font-bold font-mono text-amber-800 dark:text-amber-400 mb-2">
                    John Doe
                  </h2>
                  <p className="text-amber-700 dark:text-amber-500 font-mono text-sm mb-4">
                    Creative Developer
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <span className="inline-block px-3 py-1 bg-amber-200 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-xs font-mono">
                      Available for Hire
                    </span>
                  </div>
                </RetroCard>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <RetroCard variant="terminal" className="mb-8 p-6">
                <h2 className="text-xl font-bold mb-4 font-mono">$ whoami</h2>
                <div className="space-y-4 font-mono text-sm">
                  <p>
                    <TypingEffect
                      text="Hello! I'm John, a creative developer with a passion for blending vintage web aesthetics with modern functionality."
                      speed={20}
                    />
                  </p>
                  <p>
                    <TypingEffect
                      text="With over 5 years of experience in web development, I specialize in creating unique digital experiences that stand out in today's crowded web landscape."
                      speed={20}
                      delay={2000}
                    />
                  </p>
                  <p>
                    <TypingEffect
                      text="My approach combines nostalgic design elements from the early days of the internet with contemporary development practices, resulting in websites that are both visually distinctive and highly functional."
                      speed={20}
                      delay={4000}
                    />
                  </p>
                </div>
              </RetroCard>
              
              <RetroCard variant="primary" className="mb-8">
                <h2 className="text-xl font-bold mb-6 font-serif text-amber-800 dark:text-amber-400">
                  Professional Philosophy
                </h2>
                <p className="text-amber-900 dark:text-amber-300 mb-4">
                  I believe that the best digital experiences are those that combine aesthetic appeal with functional excellence. My work aims to create memorable interactions that engage users and effectively communicate messages.
                </p>
                <p className="text-amber-900 dark:text-amber-300">
                  While I appreciate and draw inspiration from vintage web aesthetics, I'm committed to applying modern development principles to ensure my projects are accessible, responsive, and performant across all devices.
                </p>
              </RetroCard>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-8 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-amber-100 dark:bg-zinc-800 p-4 border-2 border-amber-800 dark:border-amber-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-amber-800 dark:text-amber-400 font-bold">
                    {skill.name}
                  </span>
                  <span className="font-mono text-amber-800 dark:text-amber-400 text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-amber-200 dark:bg-zinc-700 h-4 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-amber-600 dark:bg-amber-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  {/* Scanline effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-30 animate-scan"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-8 text-center">
            Experience
          </h2>
          
          <div className="relative border-l-2 border-amber-800 dark:border-amber-600 pl-8 ml-4 space-y-8">
            {[
              {
                title: 'Senior Frontend Developer',
                company: 'Tech Company',
                period: '2022 - Present',
                description: 'Leading the frontend development team in creating modern web applications. Implementing new technologies and mentoring junior developers.',
                icon: <Briefcase className="w-5 h-5" />
              },
              {
                title: 'Web Developer',
                company: 'Creative Agency',
                period: '2019 - 2022',
                description: 'Developed responsive websites and interactive web applications for various clients. Collaborated with designers to implement creative concepts.',
                icon: <Briefcase className="w-5 h-5" />
              },
              {
                title: 'Junior Developer',
                company: 'Startup Inc.',
                period: '2017 - 2019',
                description: 'Started as a junior developer working on frontend tasks. Gained experience in modern JavaScript frameworks and responsive design.',
                icon: <Briefcase className="w-5 h-5" />
              },
              {
                title: 'Computer Science Degree',
                company: 'University',
                period: '2013 - 2017',
                description: 'Graduated with a Bachelor\'s degree in Computer Science with a focus on web technologies and user interface design.',
                icon: <GraduationCap className="w-5 h-5" />
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-12 w-6 h-6 bg-amber-800 dark:bg-amber-600 rounded-full flex items-center justify-center text-amber-100">
                  {item.icon}
                </div>
                
                <RetroCard variant="primary" className="w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold font-mono text-amber-800 dark:text-amber-400">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono bg-amber-200 dark:bg-amber-900/30 px-2 py-1 text-amber-800 dark:text-amber-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-500 mb-2">
                    {item.company}
                  </p>
                  <p className="text-amber-900 dark:text-amber-300 text-sm">
                    {item.description}
                  </p>
                </RetroCard>
              </div>
            ))}
          </div>
        </section>
        
        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-8 text-center">
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Bachelor of Science in Computer Science',
                institution: 'University Name',
                year: '2017',
                description: 'Graduated with honors, focus on web development and user interface design.'
              },
              {
                title: 'Advanced React Certification',
                institution: 'Online Platform',
                year: '2020',
                description: 'Completed advanced coursework in React and related technologies.'
              },
              {
                title: 'UI/UX Design Fundamentals',
                institution: 'Design School',
                year: '2019',
                description: 'Studied the principles of user interface and experience design.'
              },
              {
                title: 'Full Stack Web Development',
                institution: 'Coding Bootcamp',
                year: '2018',
                description: 'Intensive program covering frontend and backend development.'
              }
            ].map((item, index) => (
              <RetroCard key={index} variant="secondary" className="h-full">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-amber-800 dark:text-amber-400 mr-2" />
                  <h3 className="text-lg font-bold font-mono text-amber-800 dark:text-amber-400">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium text-amber-700 dark:text-amber-500">
                    {item.institution}
                  </p>
                  <span className="text-xs font-mono bg-amber-200 dark:bg-amber-900/30 px-2 py-1 text-amber-800 dark:text-amber-400">
                    {item.year}
                  </span>
                </div>
                <p className="text-amber-900 dark:text-amber-300 text-sm">
                  {item.description}
                </p>
              </RetroCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;