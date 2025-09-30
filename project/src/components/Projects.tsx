import { Calendar, Target, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  objective: string;
  date: string;
  technologies: string[];
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Autonomous Robotics System',
      description: 'Designed and implemented an autonomous navigation system for mobile robots using advanced sensor fusion and machine learning algorithms. The system achieved 95% accuracy in obstacle detection and path planning.',
      objective: 'To develop a reliable autonomous navigation solution that can operate in dynamic environments with minimal human intervention.',
      date: 'January 2024 - May 2024',
      technologies: ['Python', 'ROS', 'TensorFlow', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Sustainable Energy Management System',
      description: 'Developed an IoT-based energy monitoring and optimization system for smart buildings. Achieved 30% reduction in energy consumption through intelligent load management and predictive analytics.',
      objective: 'Create an efficient energy management solution that reduces consumption while maintaining optimal building operations.',
      date: 'September 2023 - December 2023',
      technologies: ['Arduino', 'IoT', 'Data Analytics', 'Cloud Computing'],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Advanced Manufacturing Process Optimization',
      description: 'Led a team project to optimize manufacturing processes using Six Sigma methodologies and simulation tools. Resulted in 25% improvement in production efficiency and significant cost reduction.',
      objective: 'Apply lean manufacturing principles to identify bottlenecks and implement data-driven solutions for process improvement.',
      date: 'March 2024 - August 2024',
      technologies: ['MATLAB', 'CAD/CAM', 'Statistical Analysis', 'Lean Six Sigma'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Structural Analysis and Design Tool',
      description: 'Created a computational tool for structural analysis using finite element methods. The tool enables rapid prototyping and stress analysis for complex engineering structures.',
      objective: 'Develop an accessible and accurate tool for performing structural calculations and visualizations for engineering applications.',
      date: 'June 2023 - November 2023',
      technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'FEA'],
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Projects</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          A showcase of engineering projects demonstrating technical expertise and problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.date}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <Target size={16} className="mr-2 mt-1 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Objective</p>
                      <p className="text-sm text-gray-600">{project.objective}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;