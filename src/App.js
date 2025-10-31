import React, { useState, useEffect, useRef } from "react";
import './App.css';
import logo from './logo.png';
const portfolioData = {
  name: "Somnath Das",
  title: "Full Stack Developer",
  about: `Hi! I'm Somnath Das

  I'm a passionate Full Stack Developer with expertise in building 
  modern web applications. I love creating elegant solutions to 
  complex problems and am constantly learning new technologies.

  When I'm not coding, you can find me exploring new technologies, or sharing knowledge with 
  the developer community.`,
  skills: {
    'Language': ['Python', 'C/C++'],
    'Framework': ['Numpy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'Tensorflow'],
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
    'Backend': ['Django', 'Django REST APIs'],
    'Database': ['MySQL', 'SQLite', 'Redis'],
    'Tools': ['Git', 'Docker', 'Google Cloud', 'Linux'],
  },
  projects: [
    {
      id: 1,
      name: 'AI-Powered Plant Disease Detection System',
      tech: 'Python, TensorFlow/Keras, OpenCV, Django, NumPy, Matplotlib',
      description: 'A machine learning system that detects apple leaf diseases with 93% accuracy across three disease categories, enabling early diagnosis to reduce crop loss by up to 30%.',
      features: ['Custom CNN architecture', 'Image preprocessing and augmentation (32,000+ images)', 'Interactive Django web interface for real-time diagnosis', 'Farmer-friendly image upload and instant analysis'],
      github: 'https://github.com/dassomnath99/Plant-Disease-Detection',
      demo: 'Future Deployment'
    },
    {
      id: 2,
      name: 'Full-Stack E-Commerce Marketplace',
      tech: 'Python, Django, HTML5, CSS3, TailwindCSS, SQLite, JavaScript',
      description: 'A secure and scalable online marketplace featuring user authentication, product management, real-time messaging, and responsive design for seamless buyer-seller interaction.',
      features: ['User authentication', 'Product search & filtering', 'User profiles', 'Real-time messaging', 'Order tracking', 'Responsive UI'],
      github: 'https://github.com/dassomnath99/Online-Marketplace',
      demo: 'https://online-marketplace-59if.onrender.com/'
    },
    {
      id: 3,
      name: "Chat + Social App",
      tech: ["Django 4.x, Django Channels, WebSockets, Redis"
      ],
      description: "A full-stack real-time social media platform combining traditional social networking features with instant messaging capabilities.",
      features: [
        "Real-time WebSocket chat with typing indicators, read receipts, and online status tracking",
        "Social networking with follow system, personalized news feeds, and post interactions (likes/comments)",
        "File and image sharing in both posts and chat conversations with persistent message history",
        "JWT-based authentication with custom user profiles and responsive mobile-first design"
      ],
      github: "https://github.com/dassomnath99/Social-WebApp",
      demo: "Future Deployment"
    },
  ],
  experience: [
    {
      title: 'Python Developer Intern',
      company: 'Siance Software Pvt. Ltd.',
      period: 'Feb 2025 – May 2025',
      description: 'Designed and developed a responsive temple management website using Django, featuring a real-time event booking system, secure payment gateway for donations, and dynamic gallery management. Independently handled full-stack development, delivered the project 15% ahead of schedule, and optimized database queries with caching to improve page load times by 40%.',
      link: 'https://suryasena.com/'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'University of Kalyani',
      period: '2021 - 2025',
      gpa: '7.95/10'
    }
  ],
  contact: {
    email: 'mailto:somnathdas4462@gmail.com',
    github: 'https://github.com/dassomnath99',
    linkedin: 'https://www.linkedin.com/in/dassomnath99/',
    leetcode: 'https://leetcode.com/u/dassomnath99/',
    hackerrank: 'https://www.hackerrank.com/profile/somnathdas8642',
    kaggle: 'https://www.kaggle.com/somnathdas8642',
    location: 'Kolkata, India'
  }
};
export default function TerminalPortfolio() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const welcomeMessage = {
    type: 'welcome',
    content: `
    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

    Welcome to ${portfolioData.name}'s interactive portfolio terminal!
    Type 'help' to see available commands.
    `
  };

  useEffect(() => {
    setOutput([welcomeMessage]);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();

    setOutput(prev => [...prev, { type: 'command', content: cmd }]);

    setHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    if (command === 'clear') {
      setOutput([]);
      return;
    }

    const response = executeCommand(command);
    setOutput(prev => [...prev, response]);
  };

  const executeCommand = (command) => {
    const args = command.split(' ');
    const cmd = args[0];

    switch (cmd) {
      case 'help':
        return {
          type: 'help',
          content: `Available Commands:
  help        - Show this help message
  about       - Learn more about me
  skills      - View my technical skills
  projects    - List my projects
  project <n> - View details of project <n>
  experience  - View my work experience
  education   - View my educational background
  contact     - Get my contact information
  resume      - Download my resume
  social      - View my social media links
  clear       - Clear the terminal
  whoami      - Display current user info
  date        - Show current date and time
  echo <text> - Print text to terminal`
        };

      case 'about':
        return { type: 'about', content: portfolioData.about };

      case 'skills':
        return { type: 'skills', content: portfolioData.skills };

      case 'projects':
        return {
          type: 'projects',
          content: portfolioData.projects.map(p => ({
            id: p.id,
            name: p.name,
            tech: p.tech,
            description: p.description
          }))
        };

      case 'project':
        const projectId = parseInt(args[1]);
        const project = portfolioData.projects.find(p => p.id === projectId);
        if (project) {
          return { type: 'project_detail', content: project };
        } else {
          return {
            type: 'error',
            content: `Project '${args[1]}' not found. Use 'projects' to see available projects.`
          };
        }

      case 'experience':
        return { type: 'experience', content: portfolioData.experience };

      case 'education':
        return { type: 'education', content: portfolioData.education };

      case 'contact':
        return { type: 'contact', content: { email: portfolioData.contact.email, location: portfolioData.contact.location } };

      case 'resume':
        window.open('https://drive.google.com/file/d/1_nrlxSPxufRQl9bD_IbuynwvOPFMiNyW/view?usp=sharing', '_blank');
        return {
          type: 'success',
          content: '📄 Resume link opened in a new tab.'
        };

      case 'social':
        return {
          type: 'social',
          content: {
            github: portfolioData.contact.github,
            linkedin: portfolioData.contact.linkedin,
            leetcode: portfolioData.contact.leetcode,
            hackerrank: portfolioData.contact.hackerrank,
            kaggle: portfolioData.contact.kaggle,
          }
        };

      case 'whoami':
        return {
          type: 'info',
          content: `${portfolioData.name} - ${portfolioData.title}`
        };

      case 'date':
        return {
          type: 'info',
          content: new Date().toString()
        };

      case 'echo':
        return {
          type: 'info',
          content: args.slice(1).join(' ') || ''
        };

      case '':
        return { type: 'empty' };

      default:
        return {
          type: 'error',
          content: `Command '${command}' not found. Type 'help' for available commands.`
        };
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        processCommand(input);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'resume', 'social', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const renderOutput = (item, index) => {
    switch (item.type) {
      case 'welcome':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <pre className="text-cyan-400 text-xs leading-tight mb-4 overflow-x-auto">
              {item.content}
            </pre>
          </div>
        );

      case 'command':
        return (
          <div key={index} className="flex items-center mb-2 animate-fade-in">
            <span className="text-green-400 mr-2">❯</span>
            <span className="text-gray-300">{item.content}</span>
          </div>
        );

      case 'help':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-2 font-semibold">Available Commands:</div>
            <pre className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">{item.content}</pre>
          </div>
        );

      case 'about':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-2 font-semibold">About Me</div>
            <pre className="text-purple-300 text-sm whitespace-pre-wrap leading-relaxed">{item.content}</pre>
          </div>
        );

      case 'skills':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">Technical Skills</div>
            {Object.entries(item.content).map(([category, skills]) => (
              <div key={category} className="mb-2 pl-2">
                <span className="text-yellow-300 font-medium">{category}:</span>{' '}
                <span className="text-gray-300">{skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">My Projects</div>
            {item.content.map((project) => (
              <div key={project.id} className="mb-4 pl-2 border-l-2 border-gray-700 pl-4">
                <div className="text-yellow-300 font-medium">[{project.id}] {project.name}</div>
                <div className="text-gray-400 text-xs mt-1">Tech: {project.tech}</div>
                <div className="text-gray-300 text-sm mt-1">{project.description}</div>
              </div>
            ))}
            <div className="text-gray-400 text-sm mt-3 pl-2">
              💡 Type <span className="text-yellow-300">project &lt;number&gt;</span> for more details
            </div>
          </div>
        );

      case 'project_detail':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 text-lg mb-2 font-semibold">{item.content.name}</div>
            <div className="text-gray-400 mb-3">
              <span className="text-purple-300">Tech Stack:</span> <span className="text-yellow-300">{item.content.tech}</span>
            </div>
            <div className="text-gray-300 mb-4 leading-relaxed">{item.content.description}</div>
            <div className="text-purple-300 mb-2 font-medium">✨ Features:</div>
            <ul className="list-none pl-2 mb-4">
              {item.content.features.map((feature, i) => (
                <li key={i} className="text-gray-300 mb-1">  • {feature}</li>
              ))}
            </ul>
            <div className="text-gray-400 pl-2 border-l-2 border-green-900 pl-4">
              <div className="mb-1">
                <span className="text-green-300 cursor-pointer">🔗 GitHub:</span>{' '}
                <a
                  href={item.content.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {item.content.github}
                </a>
              </div>
              <div>
                <span className="text-green-300">🌐 Demo:</span>{' '}
                <a
                  href={item.content.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {item.content.demo}
                </a>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">Work Experience</div>
            {item.content.map((exp, i) => (
              <div key={i} className="mb-4 pl-2 border-l-2 border-yellow-900 pl-4">
                <div className="text-yellow-300 font-medium">{exp.title}</div>
                <div className="text-purple-300 text-sm mt-1">{exp.company} • {exp.period}</div>
                <div className="text-gray-300 text-sm mt-2 leading-relaxed">{exp.description}</div>
                <div className="text-gray-400 text-sm mt-2 leading-relaxed">
                  <span className="text-purple-300">🔗 Link:</span>{' '}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {exp.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">Education</div>
            {item.content.map((edu, i) => (
              <div key={i} className="mb-4 pl-2 border-l-2 border-purple-900 pl-4">
                <div className="text-yellow-300 font-medium">{edu.degree}</div>
                <div className="text-purple-300 text-sm mt-1">{edu.institution} • {edu.period}</div>
                {edu.gpa && <div className="text-gray-300 text-sm mt-1">GPA: {edu.gpa}</div>}
                {edu.courses && (
                  <div className="text-gray-300 text-sm mt-1">
                    <span className="text-purple-300">Certifications:</span> {edu.courses.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'contact':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">Contact Information</div>
            <div className="pl-2 space-y-2">
              <div className="text-gray-300 flex items-center">
                <span className="mr-2">📧</span> Email: <span className="text-yellow-300 ml-2">{item.content.email}</span>
              </div>
              <div className="text-gray-300 flex items-center">
                <span className="mr-2">📍</span> Location: <span className="text-yellow-300 ml-2">{item.content.location}</span>
              </div>
            </div>
          </div>
        );

      case 'social':
        return (
          <div key={index} className="mb-4 animate-fade-in">
            <div className="text-cyan-300 mb-3 font-semibold">Social Media</div>
            <div className="pl-2 space-y-2">
              <div className="text-gray-300">
                🐙 GitHub:{" "}
                <a
                  href={item.content.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {item.content.github}
                </a>
              </div>

              <div className="text-gray-300">
                💼 LinkedIn:{" "}
                <a
                  href={item.content.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {item.content.linkedin}
                </a>
              </div>

              <div className="text-gray-300">
                🧩 LeetCode:{" "}
                <a
                  href={item.content.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {item.content.leetcode}
                </a>
              </div>

              <div className="text-gray-300">
                🏆 HackerRank:{" "}
                <a
                  href={item.content.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {item.content.hackerrank}
                </a>
              </div>

              <div className="text-gray-300">
                📊 Kaggle:{" "}
                <a
                  href={item.content.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {item.content.kaggle}
                </a>
              </div>
            </div>
          </div>
        );

      case 'success':
        return (
          <div key={index} className="text-green-400 mb-4 animate-fade-in">
            ✓ {item.content}
          </div>
        );

      case 'info':
        return (
          <div key={index} className="text-blue-300 mb-4 animate-fade-in">
            {item.content}
          </div>
        );

      case 'error':
        return (
          <div key={index} className="text-red-400 mb-4 animate-fade-in">
            ✗ {item.content}
          </div>
        );

      case 'empty':
        return null;

      default:
        return (
          <div key={index} className="text-gray-300 mb-4 animate-fade-in">
            {item.content}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap');
        
        * {
          font-family: 'Fira Code', monospace;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        
        .terminal-output::-webkit-scrollbar {
          width: 10px;
        }
        
        .terminal-output::-webkit-scrollbar-track {
          background: #1a202c;
        }
        
        .terminal-output::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 5px;
        }
        
        .terminal-output::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
        
        .glow {
          text-shadow: 0 0 10px currentColor;
        }
      `}</style>

      <div className="w-full max-w-5xl h-[85vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-sm">somnath@portfolio:~</span>
          </div>
          <div className="text-gray-500 text-xs">Terminal v2.0</div>
        </div>

        <div className="p-6 h-[calc(100%-60px)] flex flex-col">
          <div
            ref={outputRef}
            className="terminal-output flex-1 overflow-y-auto mb-4 text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {output.map((item, index) => renderOutput(item, index))}
          </div>

          <div className="flex items-center">
            <span className="text-green-400 mr-2 glow">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-gray-100 outline-none"
              placeholder="Type 'help' to get started..."
              autoComplete="off"
            />
            <span className="text-green-400 ml-1 animate-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
