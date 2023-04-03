import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: '🌐 LightWeb Browser',
      description: 'A lightweight yet fully featured desktop web browser.',
      tags: ['Java', 'JavaFX', 'JUnit 4', 'Maven'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://www.github.com/brayden-meyer/lightweb'
    },
    {
      id: 2,
      title: '⚛️ MolView.net',
      description: 'A full-stack web application that can help chemistry students visualize molecules in 3D.',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python', 'SQLite', 'C'],
      image: 'https://via.placeholder.com/400x300',
      liveDemo: 'https://molview.net',
      github: 'https://www.github.com/brayden-meyer/molview'
    },
    {
        id: 3,
        title: '🤖 “TC” Automation and Engagement', 
        description: 'Automation software for Adobe After Effects and user engagement software for Discord.',
        tags: ['JavaScript', 'Node.js', 'Java', 'Express', 'MongoDB', 'Proxmox'],
        image: 'https://via.placeholder.com/400x300',
        github: 'https://www.github.com/brayden-meyer/tc'
    },
    {
        id: 4,
        title: '🐍 Python',
        description: 'A clone of Google\'s Snake game—in Python.',
        tags: ['Python', 'Pygame'],
        image: 'https://via.placeholder.com/400x300',
        github: 'https://www.github.com/brayden-meyer/snake'
    },
    {
        id: 5,
        title: '👤 Personal portfolio website',
        description: 'You\'re on it.',
        tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Vite'],
        image: 'https://via.placeholder.com/400x300',
        github: 'https://www.github.com/brayden-meyer/brayden-meyer.github.io'
    }
  ];

  return (
    <div className="container mx-auto px-4 mt-10 mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-3xl font-bold">Featured Projects</h2>
        <a href="https://github.com/brayden-meyer" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-400">View all on GitHub</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-68">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover hidden" />
            <div className="p-4">
              <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex">
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-bold pr-4 pb-4 rounded focus:outline-none focus:shadow-outline">Live Demo</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-bold pr-4 pb-4 rounded focus:outline-none focus:shadow-outline">GitHub</a>
              </div>
              <p className="text-gray-400 text-base mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 rounded-full px-2 py-1 text-sm font-medium text-gray-100 mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
