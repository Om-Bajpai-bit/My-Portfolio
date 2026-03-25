import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600">Description of the project goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;