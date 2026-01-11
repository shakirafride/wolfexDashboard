import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
    const events = [
        {
            title: 'Meeting with Team',
            start: '2024-01-15T10:00:00',
            end: '2024-01-15T11:00:00',
            backgroundColor: '#3B82F6',
            borderColor: '#3B82F6',
            description: 'Weekly team sync meeting'
        },
        {
            title: 'Project Review',
            start: '2024-01-16T14:00:00',
            end: '2024-01-16T15:30:00',
            backgroundColor: '#10B981',
            borderColor: '#10B981',
            description: 'Quarterly project review session'
        },
        {
            title: 'Client Call',
            start: '2024-01-17T16:00:00',
            end: '2024-01-17T17:00:00',
            backgroundColor: '#F59E0B',
            borderColor: '#F59E0B',
            description: 'Important client presentation'
        },
        {
            title: 'Team Standup',
            start: '2024-01-18T09:00:00',
            end: '2024-01-18T09:30:00',
            backgroundColor: '#EF4444',
            borderColor: '#EF4444',
            description: 'Daily standup meeting'
        },
        {
            title: 'Design Workshop',
            start: '2024-01-19T13:00:00',
            end: '2024-01-19T16:00:00',
            backgroundColor: '#8B5CF6',
            borderColor: '#8B5CF6',
            description: 'UI/UX design workshop'
        },
        {
            title: 'Code Review',
            start: '2024-01-22T11:00:00',
            end: '2024-01-22T12:00:00',
            backgroundColor: '#06B6D4',
            borderColor: '#06B6D4',
            description: 'Weekly code review session'
        },
        {
            title: 'Product Demo',
            start: '2024-01-23T15:00:00',
            end: '2024-01-23T16:30:00',
            backgroundColor: '#F97316',
            borderColor: '#F97316',
            description: 'Product demonstration for stakeholders'
        },
        {
            title: 'Training Session',
            start: '2024-01-24T10:00:00',
            end: '2024-01-24T12:00:00',
            backgroundColor: '#84CC16',
            borderColor: '#84CC16',
            description: 'New technology training'
        },
        {
            title: 'Sprint Planning',
            start: '2024-01-25T09:00:00',
            end: '2024-01-25T11:00:00',
            backgroundColor: '#EC4899',
            borderColor: '#EC4899',
            description: 'Sprint planning for next iteration'
        },
        {
            title: 'All Hands Meeting',
            start: '2024-01-26T14:00:00',
            end: '2024-01-26T15:00:00',
            backgroundColor: '#6366F1',
            borderColor: '#6366F1',
            description: 'Company-wide all hands meeting'
        }
    ]

    const handleDateClick = (arg) => {
        const eventTitle = prompt('Enter event title for ' + arg.dateStr + ':')
        if (eventTitle) {
            // In a real app, you would add this to your state/database
            console.log('New event:', eventTitle, 'on', arg.dateStr)
        }
    }

    const handleEventClick = (clickInfo) => {
        const event = clickInfo.event
        const eventInfo = `
Event: ${event.title}
Start: ${event.start.toLocaleString()}
End: ${event.end ? event.end.toLocaleString() : 'No end time'}
Description: ${event.extendedProps.description || 'No description'}
        `
        alert(eventInfo)
    }

    const handleEventDrop = (dropInfo) => {
        console.log('Event moved:', dropInfo.event.title, 'to', dropInfo.event.start)
    }

    const handleEventResize = (resizeInfo) => {
        console.log('Event resized:', resizeInfo.event.title)
    }

    return (
        <div className="calendar-container">
            <style jsx>{`
                .fc-theme-standard .fc-scrollgrid {
                    border: 1px solid #e5e7eb;
                }
                .fc-theme-standard td, .fc-theme-standard th {
                    border-color: #e5e7eb;
                }
                .fc-col-header-cell {
                    background-color: #f8fafc;
                    font-weight: 600;
                    color: #374151;
                }
                .fc-daygrid-day-number {
                    color: #374151;
                    font-weight: 500;
                }
                .fc-day-today {
                    background-color: #fef3c7 !important;
                }
                .fc-event {
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .fc-event:hover {
                    opacity: 0.8;
                    transform: translateY(-1px);
                }
                .fc-button-primary {
                    background-color: #3B82F6;
                    border-color: #3B82F6;
                    font-size: 14px;
                    font-weight: 500;
                }
                .fc-button-primary:hover {
                    background-color: #2563EB;
                    border-color: #2563EB;
                }
                .fc-toolbar-title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1f2937;
                }
            `}</style>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={3}
                weekends={true}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                eventDrop={handleEventDrop}
                eventResize={handleEventResize}
                height="auto"
                nowIndicator={true}
                businessHours={{
                    daysOfWeek: [1, 2, 3, 4, 5],
                    startTime: '09:00',
                    endTime: '18:00',
                }}
                slotMinTime="07:00:00"
                slotMaxTime="20:00:00"
                allDaySlot={false}
                eventDisplay="block"
                displayEventTime={true}
                eventTimeFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: 'short'
                }}
            />
        </div>
    )
}

export default Calendar