import '../index.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function DateModal({ dateLabel, data, onClose }) {
    const hasData = data && data.length > 0

    const chartData = hasData
        ? data.map((item) => {
            const key = Object.keys(item)[0]
            return { name: key, value: item[key] }
        })
        : []

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 p-6 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">
                        {dateLabel}
                    </h3>
                    <button
                        onClick={onClose}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md transition-colors"
                    >
                        ✖ Close
                    </button>
                </div>

                {hasData ? (
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#f9fafb',
                                        borderRadius: '8px',
                                        border: '1px solid #ddd',
                                    }}
                                />
                                <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="text-center text-red-600 font-semibold mt-6">
                        No data found for the selected date: <span className="underline">{dateLabel}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DateModal
