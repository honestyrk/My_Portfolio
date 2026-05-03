import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Lost and Found Management System',
    description:
      'A campus platform that allows students to report lost items and help others find them easily. Features real-time search, notifications, and a clean item tracking dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    gradient: 'from-violet-500 to-indigo-600',
  },
  {
    title: 'Clinic Lab',
    description:
      'A comprehensive healthcare platform designed to streamline clinic operations, patient appointments, and medical record management with a modern, user-friendly interface.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/honestyrk/clinic-web',
    liveUrl: 'https://clinic-web-sage.vercel.app/',
    gradient: 'from-blue-500 to-cyan-600',
  },
];

export default function Projects() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 border-b border-violet-100 dark:border-violet-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            A collection of projects I've built — from real-world applications to personal experiments.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
          {/* "More Coming Soon" card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[280px]">
            <div className="w-14 h-14 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl">
              🚀
            </div>
            <h3 className="font-bold text-gray-700 dark:text-gray-300">More Coming Soon</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Working on exciting new projects. Stay tuned!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
