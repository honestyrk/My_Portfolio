import profileImage from '../assets/Rk profile.jpeg';

const skills = [
  { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-500' },
  { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-cyan-500' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-amber-500' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-600' },
  { name: 'Git', icon: '🔀', color: 'from-orange-500 to-red-600' },
  { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-cyan-500' },
];

export default function About() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 border-b border-violet-100 dark:border-violet-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Get to know who I am, what drives me, and the tech I work with.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Profile + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={profileImage}
                  alt="Ramkumar K"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-violet-500 rounded-2xl opacity-30 blur-sm" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">Who I Am</p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Passionate Full Stack Developer
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Hi! I'm <span className="font-semibold text-gray-900 dark:text-white">Ramkumar K</span>, a dedicated Full Stack Developer with a strong passion for crafting clean, performant, and user-friendly web applications. I thrive on turning complex ideas into elegant digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With expertise spanning both front-end and back-end technologies, I bring a holistic approach to every project. I love collaborating with teams, learning new technologies, and pushing the boundaries of what's possible on the web.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source, or brainstorming solutions to real-world challenges that technology can solve.
            </p>
            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: '🎓', text: 'CS Graduate' },
                { icon: '📍', text: 'Based in India' },
                { icon: '💼', text: 'Open to Opportunities' },
              ].map(({ icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {icon} {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">Tech Stack</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              Technologies I've worked with and have developed strong proficiency in.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ name, icon, color }) => (
              <div
                key={name}
                className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md text-xl`}>
                  {icon}
                </div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
