import React from 'react';
import nami from '../projects/nami.jpg'
import '../projects/projects.css'
const projects = [
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
  image:{ image: nami }  // وهذا ما تقدر تستخدمه مباشرة في `<img src=...>`
, // غيّري المسار حسب صورك
  },
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
   image: { image: nami }  // وهذا ما تقدر تستخدمه مباشرة في `<img src=...>`

  },
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
    image: '/images/project3.jpg',
  },
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
    image: '/images/project4.jpg',
  },
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
    image: '/images/project5.jpg',
  },
  {
    title: 'Random Phrases as here.',
    description: 'Lorem ipsum dolor sit amet.',
    image: '/images/project6.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
