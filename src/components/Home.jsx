import Countdown from "../ui/Countdown";
import { Marquee } from "@/components/magicui/marquee";
export default function Home() {
  return (
    <>
      <main id="home" className="bg-white  min-h-[72vh] flex flex-col">
        {}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-4 sm:space-y-6 relative pl-0 md:pl-8 lg:pl-16 order-last md:order-first">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                International Conference on <br />
                <span className="text-blue-700">
                  Disruptive Technologies
                </span>{" "}
                for <br />
                <span className="text-blue-700">Next Gen Computing</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                Exploring Innovations in AI, Quantum, Cloud, and Beyond
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center sm:justify-start px-4 sm:px-6 py-2 rounded-full bg-blue-50 border border-blue-200 shadow-md text-blue-800 font-medium text-xs sm:text-sm hover:bg-blue-100 transition">
                  PSG College of Technology, Coimbatore
                </span>
                <span className="inline-flex items-center justify-center sm:justify-start px-4 sm:px-6 py-2 rounded-full bg-blue-700 shadow-md text-white font-medium text-xs sm:text-sm border border-blue-700 hover:bg-blue-800 transition">
                  August 7-8, 2026
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <a
                  href="#register"
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition text-center text-sm sm:text-base"
                >
                  Register Now
                </a>
                <a
                  href="#call-for-papers"
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition text-center text-sm sm:text-base"
                >
                  Call for Papers
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center md:justify-end relative order-first md:order-last">
              <img
                src="/herobg.webp"
                alt="Conference Illustration"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-lg object-contain"
              />
              {/* Desktop countdown overlay */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 xl:bottom-0 xl:right-4 z-10 w-56 xl:w-64">
                <Countdown targetDate="2026-08-05T23:59:59" />
              </div>
            </div>
            {/* Mobile countdown */}
            <div className="lg:hidden mt-6 w-full flex justify-center">
              <Countdown targetDate="2026-08-05T23:59:59" />
            </div>
          </div>
        </div>

        {/* Sponsors Marquee */}
        <div className="py-8 bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-6">
              Industry Partners
            </h2>
            <Marquee pauseOnHover={true} className="py-4">
              <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/google.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="Google"
                />
              </div>
              <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/cromptongreaves.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="Crompton Greaves"
                />
              </div>
         
              <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/saps.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="SAP"
                />
              </div>
                <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/crompton.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="SAP"
                />
              </div>
               <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/qualcomm.png"
                  className="h-10 sm:h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="SAP"
                />
              </div>
              <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/acm.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="TCS"
                />
              </div>
               <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/iete.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="TCS"
                />
              </div>
               <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/bosch.png"
                  className="h-12 sm:h-12 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="TCS"
                />
              </div>
              <div className="flex items-center justify-center mx-8">
                <img
                  src="./logos/tcs.png"
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  alt="TCS"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </main>
    </>
  );
}
