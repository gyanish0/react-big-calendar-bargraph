import { useMemo } from 'react'
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
const localizer = dateFnsLocalizer({ format, parse, startOfWeek: (date) => startOfWeek(date, { weekStartsOn: 1 }), getDay, locales })

function CalendarView() {
    const data = useSelector((s) => s.data.data)
    const selectedDate = useSelector((s) => s.data.selectedDate)
    const dispatch = useDispatch()

    // Build events so that dates with data are highlighted
    const events = useMemo(() => {
        return Object.keys(data).map((dateKey) => {
            const [dd, mm, yyyy] = dateKey.split('-')
            const dateObj = new Date(`${yyyy}-${mm}-${dd}`)
            return {
                title: `Data (${data[dateKey].length})`,
                start: dateObj,
                end: dateObj,
                allDay: true,
                resource: { dateKey }
            }
        })
    }, [data])

    const onSelectSlot = (slotInfo) => {
        // slotInfo.start is a Date
        const d = slotInfo.start
        const dkey = format(d, 'dd-MM-yyyy')
        dispatch(setSelectedDate(dkey))
    }

    const onSelectEvent = (event) => {
        const dkey = event.resource?.dateKey
        dispatch(setSelectedDate(dkey))
    }

    const closeModal = () => dispatch(clearSelectedDate())

    return (
        <div className="h-[80vh] p-3">
            <Calendar
                localizer={localizer}
                events={events}
                defaultView="month"
                selectable
                onSelectSlot={onSelectSlot}
                onSelectEvent={onSelectEvent}
                dayPropGetter={(date) => {
                    const key = format(date, 'dd-MM-yyyy')
                    const has = !!data[key]
                    const selected = selectedDate === key
                    const style = {}
                    if (has) style.backgroundColor = '#e6f7ff'
                    if (selected) style.outline = '3px solid #1890ff'
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
