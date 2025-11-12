import { useMemo, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedDate, clearSelectedDate } from '../store/dataSlice'
import DateModal from './DateModal'

const locales = { 'en-US': enUS }
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: (date) => startOfWeek(date, { weekStartsOn: 1 }),
    getDay,
    locales,
})

function CalendarView() {
    const data = useSelector((s) => s.data.data)
    const selectedDate = useSelector((s) => s.data.selectedDate)
    const dispatch = useDispatch()

    const [currentDate, setCurrentDate] = useState(new Date())
    const [currentView, setCurrentView] = useState('month')

    const events = useMemo(() => {
        return Object.keys(data).map((dateKey) => {
            const [dd, mm, yyyy] = dateKey.split('-')
            const dateObj = new Date(`${yyyy}-${mm}-${dd}`)
            return {
                title: `Data (${data[dateKey].length})`,
                start: dateObj,
                end: dateObj,
                allDay: true,
                resource: { dateKey },
            }
        })
    }, [data])

    const onSelectSlot = (slotInfo) => {
        const d = slotInfo.start
        const dkey = format(d, 'dd-MM-yyyy')
        dispatch(setSelectedDate(dkey))
    }

    const onSelectEvent = (event) => {
        const dkey = event.resource?.dateKey
        dispatch(setSelectedDate(dkey))
    }

    const closeModal = () => dispatch(clearSelectedDate())

    const handleNavigate = (newDate) => {
        setCurrentDate(newDate)
    }

    const handleViewChange = (newView) => {
        setCurrentView(newView)
    }

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                date={currentDate}
                view={currentView}
                onNavigate={handleNavigate}
                onView={handleViewChange}
                defaultView="month"
                views={['month', 'week', 'day']}
                popup
                toolbar
                style={{ height: '75vh' }}
                onSelectSlot={onSelectSlot}
                onSelectEvent={onSelectEvent}
                dayPropGetter={(date) => {
                    const key = format(date, 'dd-MM-yyyy')
                    const has = !!data[key]
                    const selected = selectedDate === key
                    const style = {}
                    if (has) style.backgroundColor = '#eef6ff'
                    if (selected) style.outline = '3px solid #4f46e5'
                    return { style }
                }}
            />

            {selectedDate && (
                <DateModal dateLabel={selectedDate} data={data[selectedDate]} onClose={closeModal} />
            )}
        </div>
    )
}

export default CalendarView
