import { Link } from 'react-router-dom';
import profileImage from '../assets/Rk profile.jpeg';

const DeveloperIllustration = () => (
  <div className="relative w-full max-w-sm mx-auto">
    {/* Glow blob behind */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-indigo-400/30 rounded-full blur-3xl scale-110" />
    <div className="relative bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 rounded-3xl p-8 border border-violet-100 dark:border-violet-900/40 shadow-2xl shadow-violet-200/50 dark:shadow-violet-900/30">
      {/* Avatar circle */}
      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-6">
        <img
          src={profileImage}
          alt="Ramkumar K"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Code snippet decoration */}
      <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-4 font-mono text-xs text-left space-y-1 shadow-inner">
        <p><span className="text-violet-400">const</span> <span className="text-blue-300">developer</span> <span className="text-white">= {'{'}</span></p>
        <p className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">"RamKumar"</span><span className="text-white">,</span></p>
        <p className="pl-4"><span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-yellow-300">"Full Stack Dev"</span><span className="text-white">,</span></p>
        <p className="pl-4"><span className="text-green-400">passion</span><span className="text-white">:</span> <span className="text-yellow-300">"Building"</span></p>
        <p><span className="text-white">{'}'}</span></p>
      </div>
      {/* Status badge */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Available for work</span>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <DeveloperIllustration />
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Freelancer
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              Full Stack Developer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Turning Vision{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Into Reality
              </span>{' '}
              With Code And Design.
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              I am a passionate Full Stack Developer who enjoys building modern web applications and solving real world problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/RK_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-200 dark:shadow-violet-900/40 hover:shadow-xl hover:shadow-violet-300 dark:hover:shadow-violet-800/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Me
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { value: '1.5+', label: 'Years Experience' },
                { value: '3+', label: 'Projects Done' },
                { value: '100%', label: 'Commitment' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
