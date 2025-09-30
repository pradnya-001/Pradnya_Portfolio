import { Trophy, Star, Medal, Award } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  category: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      icon: <Trophy size={32} />,
      title: 'Dean\'s List',
      description: 'Recognized for outstanding academic performance with a GPA above 3.7 for four consecutive semesters.',
      date: '2022 - 2024',
      category: 'Academic',
    },
    {
      icon: <Medal size={32} />,
      title: 'First Place - Engineering Design Competition',
      description: 'Led team to victory in regional engineering design competition with innovative sustainable energy solution.',
      date: 'April 2024',
      category: 'Competition',
    },
    {
      icon: <Star size={32} />,
      title: 'Research Excellence Award',
      description: 'Awarded for outstanding contributions to research project in advanced materials engineering.',
      date: 'December 2023',
      category: 'Research',
    },
    {
      icon: <Award size={32} />,
      title: 'Engineering Scholarship',
      description: 'Merit-based scholarship awarded for academic excellence and demonstrated leadership in engineering field.',
      date: '2023 - 2024',
      category: 'Academic',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Hackathon Winner',
      description: 'Developed winning prototype for IoT-based smart city solution in 48-hour coding challenge.',
      date: 'March 2024',
      category: 'Competition',
    },
    {
      icon: <Star size={32} />,
      title: 'Best Capstone Project',
      description: 'Selected as best senior capstone project for innovative approach to solving real-world engineering problems.',
      date: 'May 2024',
      category: 'Academic',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-blue-100 text-blue-700';
      case 'Competition':
        return 'bg-green-100 text-green-700';
      case 'Research':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Achievements</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          Recognition and awards earned through dedication, hard work, and commitment to excellence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  {achievement.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{achievement.date}</p>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">3.8</p>
            <p className="text-gray-600 font-medium">GPA</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</p>
            <p className="text-gray-600 font-medium">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">6</p>
            <p className="text-gray-600 font-medium">Awards</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</p>
            <p className="text-gray-600 font-medium">Study Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;