import React from 'react'

const Bankdetails = () => {
const bankdetails=[
{
    category:"Account Number",
    value:"1481267367",
},
{
    category:"Name of the beneficiary",
    value:"PSG Center for Nonformal and Continuing Education (PSG CNCE)",

},
{
    category:"Address",
    value:"Peelamedu, Coimbatore - 641004",
},
{
    category:"Name of the Bank",
    value:"Central Bank of India",
},
{
    category:"Account Type",
    value:"Savings",
},
{
    category:"IFSC Code",
    value:"CBIN0280913",
},
{
    category:"Swift Code",
    value:"CBININBBOSB",
}]
return (
    <div className="min-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-bold text-blue-600 mb-4 '>Payment Details</h1>
                <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th
                                    colSpan={2}
                                    className="px-6 py-4 text-center font-extrabold text-lg bg-blue-600 text-white border-b border-blue-500"
                                >
                                    Bank Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankdetails.map((detail, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-200 last:border-b-0 ${
                                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                                >
                                    <td className="px-6 py-4 font-bold text-gray-900 border-r border-gray-200">{detail.category}</td>
                                    <td className="px-6 py-4 text-center font-bold text-blue-600 text-lg border-r border-gray-200">
                                        {detail.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
)
}

export default Bankdetails