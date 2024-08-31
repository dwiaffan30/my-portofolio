const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>Details about project 1.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p>Details about project 2.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


