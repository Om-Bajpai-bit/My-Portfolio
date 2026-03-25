import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I am a web developer with a passion for creating beautiful and functional web applications. I specialize in modern web technologies and love to learn new things.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="list-disc list-inside">
          <li>JavaScript (ES6+)</li>
          <li>React & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
  );
};

export default About;