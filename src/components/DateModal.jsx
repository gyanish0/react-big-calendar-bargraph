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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-4 w-full max-w-2xl rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{dateLabel}</h3>
                    <button className="px-3 py-1 border rounded" onClick={onClose}>Close</button>
                </div>
                <div className="mt-3">
                    {hasData ? (
                        <div style={{ width: '100%', height: 250 }}>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#6366f1" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <div className="text-red-600 font-semibold">No data found for the selected date: {dateLabel}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DateModal
