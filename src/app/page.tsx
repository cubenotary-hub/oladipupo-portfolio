'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaCode, FaRocket, FaUser, FaProjectDiagram } from 'react-icons/fa';

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'AWS', level: 65 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: '/api/placeholder/400/250',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts',
      image: '/api/placeholder/400/250',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with Next.js and Tailwind CSS',
      image: '/api/placeholder/400/250',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const aboutQuestions = [
    {
      question: 'Who am I?',
      answer: 'I\'m Oladipupo, a passionate software developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.'
    },
    {
      question: 'How long have I been in tech?',
      answer: 'I\'ve been working in software development for over 3 years, continuously learning and adapting to new technologies and best practices.'
    },
    {
      question: 'What do I do?',
      answer: 'I specialize in full-stack web development, creating responsive applications using React, Next.js, Node.js, and modern databases.'
    },
    {
      question: 'What inspires me?',
      answer: 'I\'m inspired by the endless possibilities of technology to solve real-world problems and improve people\'s lives through innovative software solutions.'
    },
    {
      question: 'What am I learning?',
      answer: 'Currently exploring advanced React patterns, cloud architecture with AWS, and machine learning fundamentals to expand my technical capabilities.'
    },
    {
      question: 'What\'s my goal?',
      answer: 'My goal is to become a senior full-stack developer and eventually lead technical teams while contributing to open-source projects.'
    },
    {
      question: 'What\'s my personality outside tech?',
      answer: 'I enjoy reading, playing chess, hiking, and exploring new cultures through travel. I believe in continuous learning and personal growth.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-800 dark:text-white"
            >
              Oladipupo
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <motion.a
              href="/resume/Resume 2026.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Resume
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Oladipupo
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
                A passionate software developer 💻 passionate about transforming concepts 💡 into sleek, interactive designs 🎨⚡
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaProjectDiagram />
                View Projects
              </motion.a>
              <motion.a
                href="#about"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUser />
                About Me
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 border border-slate-600 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Contact Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Some of my recent work and side projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, showMoreProjects ? projects.length : 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <FaCode className="text-6xl text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <FaRocket />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="text-blue-600 hover:text-blue-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMoreProjects ? 'Show Less' : 'Show More'}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Skills</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center p-4 rounded-lg transition-all duration-300 ${
                  activeSkill === index
                    ? 'bg-blue-100 dark:bg-blue-900 scale-105'
                    : 'bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600'
                }`}
                onMouseEnter={() => setActiveSkill(index)}
              >
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {skill.level}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {skill.name}
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Get to know me better</p>
          </motion.div>

          <div className="space-y-6">
            {aboutQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Contact Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Have a project in mind? Let's collaborate and bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-600 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <a
              href="https://github.com"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/tobi-o-131336206"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:contact@oladipupo.com"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Oladipupo - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
