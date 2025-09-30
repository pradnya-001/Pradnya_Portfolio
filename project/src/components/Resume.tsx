import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Resume</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          A comprehensive overview of my academic journey and professional experience
        </p>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-lg mr-4">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>

          <div className="border-l-2 border-gray-200 pl-8 ml-6">
            <div className="mb-8 relative">
              <div className="absolute -left-10 mt-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-blue-600 font-medium mb-1">2021 - Present</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Engineering</h4>
                <p className="text-gray-600 mb-2">University Name</p>
                <p className="text-gray-500">Major: Mechanical/Electrical/Computer Engineering</p>
                <p className="text-gray-500 mt-2">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-lg mr-4">
              <Briefcase size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
          </div>

          <div className="border-l-2 border-gray-200 pl-8 ml-6">
            <div className="mb-8 relative">
              <div className="absolute -left-10 mt-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-blue-600 font-medium mb-1">Summer 2024</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Engineering Intern</h4>
                <p className="text-gray-600 mb-3">Company Name</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Developed and tested engineering solutions for real-world applications</li>
                  <li>Collaborated with cross-functional teams on technical projects</li>
                  <li>Conducted research and analysis to optimize system performance</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 mt-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-blue-600 font-medium mb-1">2023 - Present</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Research Assistant</h4>
                <p className="text-gray-600 mb-3">University Research Lab</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Assisted in cutting-edge research projects in engineering field</li>
                  <li>Collected and analyzed experimental data</li>
                  <li>Contributed to technical documentation and research papers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-lg mr-4">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-1">Professional Certification</h4>
              <p className="text-sm text-gray-600">Issuing Organization</p>
              <p className="text-xs text-gray-500 mt-2">Issued: 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-1">Technical Certification</h4>
              <p className="text-sm text-gray-600">Issuing Organization</p>
              <p className="text-xs text-gray-500 mt-2">Issued: 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;