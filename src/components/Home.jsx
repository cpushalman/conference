
import Countdown from "../ui/Countdown"

export default function Home() {
  return (
    <>
      <main id='home' className="bg-white min-h-screen flex flex-col">
        {}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {}
            <div className="space-y-6 relative pl-0 md:pl-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900  leading-tight">
                International Conference on <br />
                <span className="text-blue-700">
                  Disruptive Technologies
                </span>{" "}
                for <br />
                <span className="text-blue-700">Next Gen Computing</span>
              </h1>

              <p className="text-gray-600 text-lg">
                Exploring Innovations in AI, Quantum, Cloud, and Beyond
              </p>

              <div className="flex gap-4">
                <span className="inline-flex items-center px-6 py-2 rounded-full bg-blue-50 border border-blue-200 shadow-md text-blue-800 font-medium text-sm hover:bg-blue-100 transition">
                  PSG College of Technology, Coimbatore
                </span>
                <span className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 shadow-md text-white font-medium text-sm border border-blue-700 hover:bg-blue-800 transition">
                  August 7-8, 2026
                </span>
              </div>

              <div className="flex gap-4 absolute -bottom-14 right-44">
                <a
                  href="#register"
                  className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
                >
                  Register Now
                </a>
                <a
                  href="#call-for-papers"
                  className="px-6 py-3 rounded-lg border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition"
                >
                  Call for Papers
                </a>
              </div>
            </div>

            {}
            <div className="flex justify-center md:justify-end relative">
              <img
                src="/herobg.webp"
                alt="Conference Illustration"
                className="w-80 md:w-[90rem] rounded-xl shadow-lg"
              />
              {}
              <div className="hidden md:block absolute bottom-0 right-20 z-10 w-64">
                <Countdown targetDate="2026-08-05T23:59:59" />
              </div>
              {}
            </div>
            {}
            <div className=" md:hidden mt-4 w-full flex justify-center">
              <Countdown targetDate="2026-08-05T23:59:59" />
            </div>
          </div>
        </div>
      </main>
    </>


  )
}