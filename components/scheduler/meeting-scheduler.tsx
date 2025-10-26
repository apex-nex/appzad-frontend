'use client';

import { useState, useCallback, useMemo } from 'react';
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addHours, startOfHour, addMinutes } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { X, Clock, User, Mail as MailIcon, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: enUS }),
  getDay,
  locales,
});

interface Event {
  title: string;
  start: Date;
  end: Date;
  resource?: {
    type: 'available' | 'booked' | 'selected';
    description?: string;
  };
}

interface BookingFormData {
  name: string;
  email: string;
  message: string;
}

export function MeetingScheduler() {
  const t = useTranslations('schedule');
  const [view, setView] = useState<View>('week');
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [bookedSlots, setBookedSlots] = useState<Event[]>([]);

  // Generate available time slots (9 AM - 5 PM, weekdays only)
  const availableSlots = useMemo(() => {
    const slots: Event[] = [];
    const today = new Date();

    for (let day = 0; day < 14; day++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + day);

      // Skip weekends
      if (currentDate.getDay() === 0 || currentDate.getDay() === 6) continue;

      // Create slots from 9 AM to 5 PM
      for (let hour = 9; hour < 17; hour++) {
        const slotStart = new Date(currentDate);
        slotStart.setHours(hour, 0, 0, 0);

        const slotEnd = new Date(slotStart);
        slotEnd.setHours(hour + 1, 0, 0, 0);

        // Check if slot is already booked
        const isBooked = bookedSlots.some(
          (booking) =>
            booking.start.getTime() === slotStart.getTime()
        );

        if (!isBooked) {
          slots.push({
            title: 'Available',
            start: slotStart,
            end: slotEnd,
            resource: { type: 'available' },
          });
        }
      }
    }

    return slots;
  }, [bookedSlots]);

  const events = useMemo(() => {
    const allEvents = [...availableSlots, ...bookedSlots];

    if (selectedSlot) {
      allEvents.push({
        title: 'Selected Time',
        start: selectedSlot.start,
        end: selectedSlot.end,
        resource: { type: 'selected' },
      });
    }

    return allEvents;
  }, [availableSlots, bookedSlots, selectedSlot]);

  const handleSelectSlot = useCallback(({ start, end }: { start: Date; end: Date }) => {
    // Only allow selecting available slots
    const isAvailable = availableSlots.some(
      (slot) => slot.start.getTime() === start.getTime()
    );

    if (isAvailable) {
      setSelectedSlot({ start, end });
      setShowBookingForm(true);
    }
  }, [availableSlots]);

  const handleSelectEvent = useCallback((event: Event) => {
    if (event.resource?.type === 'available') {
      setSelectedSlot({ start: event.start, end: event.end });
      setShowBookingForm(true);
    }
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSlot) return;

    // Add the booking
    const newBooking: Event = {
      title: `Meeting with ${formData.name}`,
      start: selectedSlot.start,
      end: selectedSlot.end,
      resource: {
        type: 'booked',
        description: formData.message,
      },
    };

    setBookedSlots([...bookedSlots, newBooking]);

    // Send email notification (you would integrate with an API here)
    console.log('Booking confirmed:', {
      ...formData,
      slot: selectedSlot,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setSelectedSlot(null);
    setShowBookingForm(false);

    alert(t('booking.success'));
  };

  const eventStyleGetter = (event: Event) => {
    let backgroundColor = '#10b981'; // green for available

    if (event.resource?.type === 'booked') {
      backgroundColor = '#ef4444'; // red for booked
    } else if (event.resource?.type === 'selected') {
      backgroundColor = '#8b5cf6'; // purple for selected
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '8px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  return (
    <div>
      <style jsx global>{`
        .rbc-calendar {
          font-family: inherit;
        }

        .rbc-header {
          padding: 12px 4px;
          font-weight: 600;
          color: var(--color-text);
          border-bottom: 2px solid var(--color-primary);
          background: var(--gradient-secondary);
        }

        .rbc-today {
          background-color: rgba(168, 85, 247, 0.1);
        }

        .rbc-off-range-bg {
          background: var(--color-surface);
          opacity: 0.5;
        }

        .rbc-event {
          cursor: pointer;
        }

        .rbc-time-slot {
          min-height: 40px;
        }

        .rbc-timeslot-group {
          min-height: 80px;
        }

        .rbc-toolbar {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
          background: var(--gradient-card);
          border-radius: 12px;
          border: 1px solid var(--color-primary);
        }

        .rbc-toolbar button {
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid var(--color-primary);
          background: var(--gradient-secondary);
          color: var(--color-text);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .rbc-toolbar button:hover {
          background: var(--gradient-primary);
          color: white;
          transform: scale(1.05);
        }

        .rbc-toolbar button.rbc-active {
          background: var(--gradient-primary);
          color: white;
        }
      `}</style>

      <div className="space-y-6">
        {/* Calendar Legend */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>{t('legend.available')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-600"></div>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>{t('legend.selected')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>{t('legend.booked')}</span>
          </div>
        </div>

        {/* Calendar */}
        <div style={{ height: '600px', background: 'white', borderRadius: '16px', padding: '16px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            view={view}
            onView={setView}
            date={date}
            onNavigate={setDate}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            selectable
            step={60}
            timeslots={1}
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 17, 0, 0)}
            defaultView="week"
            views={['month', 'week', 'day']}
          />
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedSlot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="rounded-2xl shadow-2xl max-w-md w-full p-6 relative" style={{ background: 'var(--gradient-card)' }}>
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedSlot(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
              </button>

              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                {t('booking.title')}
              </h3>

              <div className="mb-6 p-4 rounded-lg" style={{ background: 'var(--gradient-secondary)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
                    {format(selectedSlot.start, 'EEEE, MMMM d, yyyy')}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                  {format(selectedSlot.start, 'h:mm a')} - {format(selectedSlot.end, 'h:mm a')}
                </p>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    <User className="w-4 h-4 inline mr-2" />
                    {t('booking.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder={t('booking.name.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    <MailIcon className="w-4 h-4 inline mr-2" />
                    {t('booking.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder={t('booking.email.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    {t('booking.message.label')}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-primary)',
                      color: 'var(--color-text)',
                    }}
                    placeholder={t('booking.message.placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  {t('booking.submit')}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
