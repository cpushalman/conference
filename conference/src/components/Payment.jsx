import React from 'react'

export default function Payment() {
const importantDates = [
    {
      event: "Last Date for Abstract Submission",
      date: "29 April 2026",
    },
    {
      event: "Last Date for Full paper Submission",
      date: "12 May 2026",
    },
    {
      event: "Intimation of Acceptance",
      date: "18 May 2026",
    },
    {
      event: "Last Date for Registration (Presenter / Participation)",
      date: "28 May 2026",
    },
  ]

  const registrationFees = [
    {
      category: "Academia",
      indian: "₹8500",
      foreign: "",
    },
    {
      category: "Research Scholars",
      indian: "₹8500",
      foreign: "",
    },
    {
      category: "PG/UG Students",
      indian: "₹6000",
      foreign: "",
    },
    {
      category: "Industry and R&D Centers",
      indian: "₹10000",
      foreign: "",
    },
    {
      category: "Foreign Delegates",
      indian: "$300",
      foreign: "$300",
    },
    {
      category: "For Participation Only",
      indian: "₹1500",
      foreign: "",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
     

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Important Dates Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">IMPORTANT DATES</h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {importantDates.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="px-6 py-4 font-semibold text-lg bg-blue-600 text-white border-r border-blue-500">
                        {item.event}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-xl bg-blue-600 text-white min-w-[200px]">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Registration Fees Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              The registration fee for the conference is as follows:
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-lg bg-blue-600 text-white border-r border-blue-500">
                      CATEGORY
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-lg bg-blue-600 text-white border-r border-blue-500">
                      AMOUNT
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 last:border-b-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">{fee.category}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-600 text-lg border-r border-gray-200">
                        {fee.indian}
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        
      </main>

    </div>
  )
}
