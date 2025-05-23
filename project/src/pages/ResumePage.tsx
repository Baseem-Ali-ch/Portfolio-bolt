import React from 'react';
import { Download, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import RetroCard from '../components/ui/RetroCard';
import RetroButton from '../components/ui/RetroButton';

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-900 pt-16 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
            Resume
          </h1>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-600 mx-auto"></div>
        </div>
        
        {/* Download Button */}
        <div className="text-center mb-12">
          <RetroButton href="#" variant="neon" size="lg">
            <Download className="w-5 h-5 mr-2" /> Download Resume (PDF)
          </RetroButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="md:col-span-1">
            <RetroCard variant="primary" className="mb-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="inline-block w-24 h-24 rounded-full overflow-hidden border-4 border-amber-800 dark:border-amber-600 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                    alt="John Doe"
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: 'pixelated',
                      imageRendering: '-moz-crisp-edges',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
                <h2 className="text-xl font-bold font-mono text-amber-800 dark:text-amber-400">
                  John Doe
                </h2>
                <p className="text-amber-700 dark:text-amber-500 font-mono text-sm">
                  Creative Developer
                </p>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between border-b border-amber-200 dark:border-zinc-700 pb-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">Email:</span>
                  <span className="text-amber-900 dark:text-amber-300">hello@example.com</span>
                </div>
                
                <div className="flex justify-between border-b border-amber-200 dark:border-zinc-700 pb-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">Phone:</span>
                  <span className="text-amber-900 dark:text-amber-300">+1 (234) 567-890</span>
                </div>
                
                <div className="flex justify-between border-b border-amber-200 dark:border-zinc-700 pb-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">Location:</span>
                  <span className="text-amber-900 dark:text-amber-300">San Francisco, CA</span>
                </div>
                
                <div className="flex justify-between border-b border-amber-200 dark:border-zinc-700 pb-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">Website:</span>
                  <a href="#" className="text-amber-900 dark:text-amber-300 hover:underline">
                    johndoe.com
                  </a>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="mt-6">
                <h3 className="text-lg font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
                  Skills
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: 'HTML/CSS', level: 90 },
                    { name: 'JavaScript', level: 85 },
                    { name: 'React', level: 80 },
                    { name: 'Node.js', level: 75 },
                    { name: 'UI/UX Design', level: 70 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-amber-800 dark:text-amber-400 text-xs">
                          {skill.name}
                        </span>
                        <span className="font-mono text-amber-800 dark:text-amber-400 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-amber-200 dark:bg-zinc-700 h-2 relative">
                        <div 
                          className="absolute top-0 left-0 h-full bg-amber-600 dark:bg-amber-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages Section */}
              <div className="mt-6">
                <h3 className="text-lg font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
                  Languages
                </h3>
                
                <div className="space-y-3">
                  {[
                    { name: 'English', level: 'Native' },
                    { name: 'Spanish', level: 'Professional' },
                    { name: 'French', level: 'Basic' }
                  ].map((language) => (
                    <div key={language.name} className="flex justify-between items-center border-b border-amber-200 dark:border-zinc-700 pb-2">
                      <span className="font-mono text-amber-800 dark:text-amber-400 text-sm">
                        {language.name}
                      </span>
                      <span className="font-mono text-amber-900 dark:text-amber-300 text-xs">
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RetroCard>
          </div>
          
          {/* Right Column - Experience & Education */}
          <div className="md:col-span-2">
            {/* Professional Summary */}
            <RetroCard variant="primary" className="mb-8">
              <h2 className="text-xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
                Professional Summary
              </h2>
              <p className="text-amber-900 dark:text-amber-300 mb-4">
                Creative developer with over 5 years of experience specializing in front-end development, interactive UI design, and implementing cutting-edge web technologies. Passionate about blending vintage web aesthetics with modern functionality to create unique digital experiences.
              </p>
              <p className="text-amber-900 dark:text-amber-300">
                Proven track record of delivering high-quality projects for clients across various industries. Adept at working both independently and as part of a collaborative team to produce outstanding results that exceed client expectations.
              </p>
            </RetroCard>
            
            {/* Work Experience */}
            <RetroCard variant="primary" className="mb-8">
              <h2 className="text-xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" /> Work Experience
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Senior Frontend Developer',
                    company: 'Tech Company',
                    period: '2022 - Present',
                    responsibilities: [
                      'Lead the frontend development team in creating modern web applications',
                      'Implement new technologies and best practices to improve development workflow',
                      'Mentor junior developers and conduct code reviews',
                      'Collaborate with design and backend teams to deliver cohesive solutions'
                    ]
                  },
                  {
                    title: 'Web Developer',
                    company: 'Creative Agency',
                    period: '2019 - 2022',
                    responsibilities: [
                      'Developed responsive websites and interactive web applications',
                      'Collaborated with designers to implement creative concepts',
                      'Managed multiple projects simultaneously while meeting tight deadlines',
                      'Integrated third-party APIs and services'
                    ]
                  },
                  {
                    title: 'Junior Developer',
                    company: 'Startup Inc.',
                    period: '2017 - 2019',
                    responsibilities: [
                      'Assisted in the development of web applications and features',
                      'Gained experience in modern JavaScript frameworks and responsive design',
                      'Participated in daily standups and agile development processes',
                      'Fixed bugs and implemented minor features'
                    ]
                  }
                ].map((job, index) => (
                  <div key={index} className={index !== 0 ? "pt-6 border-t border-amber-200 dark:border-zinc-700" : ""}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold font-mono text-amber-800 dark:text-amber-400">
                        {job.title}
                      </h3>
                      <span className="text-xs font-mono bg-amber-200 dark:bg-amber-900/30 px-2 py-1 text-amber-800 dark:text-amber-400 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-500 mb-3">
                      {job.company}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="text-amber-900 dark:text-amber-300 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RetroCard>
            
            {/* Education */}
            <RetroCard variant="primary" className="mb-8">
              <h2 className="text-xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" /> Education
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    degree: 'Bachelor of Science in Computer Science',
                    institution: 'University Name',
                    period: '2013 - 2017',
                    details: [
                      'Graduated with honors (GPA: 3.8/4.0)',
                      'Focus on web development and user interface design',
                      'Relevant coursework: Data Structures, Algorithms, Database Systems, UI/UX Design'
                    ]
                  },
                  {
                    degree: 'Full Stack Web Development',
                    institution: 'Coding Bootcamp',
                    period: '2018',
                    details: [
                      'Intensive 12-week program covering frontend and backend development',
                      'Built multiple projects using modern frameworks and technologies',
                      'Participated in team projects and hackathons'
                    ]
                  }
                ].map((edu, index) => (
                  <div key={index} className={index !== 0 ? "pt-6 border-t border-amber-200 dark:border-zinc-700" : ""}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold font-mono text-amber-800 dark:text-amber-400">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono bg-amber-200 dark:bg-amber-900/30 px-2 py-1 text-amber-800 dark:text-amber-400 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-500 mb-3">
                      {edu.institution}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.details.map((item, i) => (
                        <li key={i} className="text-amber-900 dark:text-amber-300 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RetroCard>
            
            {/* Certifications */}
            <RetroCard variant="primary" className="mb-8">
              <h2 className="text-xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" /> Certifications
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Advanced React Certification',
                    issuer: 'Online Platform',
                    year: '2020'
                  },
                  {
                    name: 'UI/UX Design Fundamentals',
                    issuer: 'Design School',
                    year: '2019'
                  },
                  {
                    name: 'JavaScript Performance Optimization',
                    issuer: 'Web Academy',
                    year: '2021'
                  },
                  {
                    name: 'Responsive Web Design',
                    issuer: 'Certification Program',
                    year: '2018'
                  }
                ].map((cert, index) => (
                  <div key={index} className="bg-amber-100 dark:bg-zinc-800 p-3 border border-amber-200 dark:border-zinc-700">
                    <h3 className="font-mono text-sm font-bold text-amber-800 dark:text-amber-400 mb-1">
                      {cert.name}
                    </h3>
                    <div className="flex justify-between text-xs">
                      <span className="text-amber-700 dark:text-amber-500">
                        {cert.issuer}
                      </span>
                      <span className="font-mono">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </RetroCard>
            
            {/* References */}
            <RetroCard variant="primary">
              <h2 className="text-xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
                References
              </h2>
              <p className="text-amber-900 dark:text-amber-300 italic">
                References available upon request.
              </p>
            </RetroCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;