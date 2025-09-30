import { Code, Wrench, BarChart3, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code size={24} />,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'MATLAB', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: 'Engineering Tools',
      skills: [
        { name: 'CAD (SolidWorks/AutoCAD)', level: 90 },
        { name: 'FEA Analysis', level: 85 },
        { name: 'ANSYS', level: 80 },
        { name: 'LabVIEW', level: 75 },
      ],
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Technical Skills',
      skills: [
        { name: 'Data Analysis', level: 88 },
        { name: 'Circuit Design', level: 82 },
        { name: 'Machine Learning', level: 78 },
        { name: 'Statistical Modeling', level: 85 },
      ],
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Skills',
      skills: [
        { name: 'Project Management', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Technical Writing', level: 82 },
        { name: 'Problem Solving', level: 92 },
      ],
    },
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Skills</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          Technical competencies and professional capabilities developed through academic coursework and practical experience
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile Methodology',
              'Git Version Control',
              'Technical Documentation',
              'Quality Assurance',
              'Systems Integration',
              'Research & Development',
              'Cost Analysis',
              'Safety Compliance',
              'Prototyping',
              'Testing & Validation',
            ].map((competency, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;