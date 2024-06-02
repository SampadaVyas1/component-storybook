import React, { useRef, useState } from 'react';
import ChevronDownIcon from '../../icons/ChevronDownIcon';
import ChevronLeftIcon from '../../icons/ChevronLeftIcon';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import style from './DatePicker.module.scss';
import { IDatePicker } from './IDatePicker';
import CalendarIcon from '../../icons/CalendarIcon';
import useOutsideClick from '../../hooks/useOutsideClick';
import ChevronUpIcon from '../../icons/ChevronUpIcon';
import { Typography } from '../Typography/Typography';

const DatePicker: React.FC<IDatePicker> = ({
  date,
  className,
  TriggerComponent,
  onChange,
  variant = 'DatePicker',
  onDateRangeSelected,
  startDate,
  endDate
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date || new Date());
  const [displayedDate, setDisplayedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<string>('days');
  const [yearOffset, setYearOffset] = useState(0);
  const [startingDate, setStartDate] = useState<Date | null>(null);
  const [endingDate, setEndDate] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState(0);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedYear, setSelectedYear] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleCalendar = () => {
    setShowCalendar((prevShowCalender) => !prevShowCalender);
    setCurrentView('days');
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (variant === 'RangePicker') {
      if (!startingDate) {
        setDisplayedDate(currentDate);
        setSelectedDate(currentDate);
      } else if (startingDate && endingDate) {
        setSelectedDate(startingDate);
        setSelectedYear(startingDate.getFullYear());
      }
    }

    setYearOffset(0);
  };

  useOutsideClick(containerRef, () => setShowCalendar(false));

  const selectDate = (day: number) => {
    const newDate = new Date(displayedDate.getFullYear(), displayedDate.getMonth(), day);

    if (variant === 'RangePicker') {
      if (dateRange[0] === null || (dateRange[0] && startingDate && newDate < startingDate)) {
        if (startingDate && endingDate && newDate > startingDate && newDate > endingDate) {
          setEndDate(null);
        }
        setStartDate(newDate);
        setDateRange([newDate, null]);
      } else if (dateRange[0] && startingDate && newDate > startingDate) {
        setEndDate(newDate);
        setDateRange([dateRange[0], newDate]);
        onDateRangeSelected?.(startingDate ?? newDate, newDate);
        toggleCalendar();
        setDateRange([null, null]);
      }
    } else {
      setSelectedDate(newDate);
    }

    setDisplayedDate(newDate);
    if (variant === 'DatePicker') toggleCalendar();
    onChange?.(newDate);
  };

  const selectMonth = (month: number) => {
    const newDate = new Date(selectedYear, month, selectedDate.getDate());
    setSelectedDate(newDate);
    setDisplayedDate(newDate);
    setCurrentView('days');
    onChange?.(newDate);
  };

  const selectYear = (year: number) => {
    setCurrentView('months');
    setSelectedYear(year);
  };

  const days = (date: Date) => {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const dayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const totalSlots = Math.ceil((daysInMonth + dayOfWeek) / 7) * 7;

    const daysArray = Array.from({ length: totalSlots }, (_, key) => {
      const day = key + 1 - dayOfWeek;
      return {
        day,
        currentMonth: day >= 1 && day <= daysInMonth,
        month: date.getMonth(),
        year: date.getFullYear()
      };
    });

    return (
      <>
        <div className={style.weekdays}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <Typography variant="b4-regular" key={d} className={style.weekday}>
              {d}
            </Typography>
          ))}
        </div>
        <div className={style.daysGrid}>
          {daysArray.map(({ day, currentMonth, month, year }, key) => {
            const dateOfDay = currentMonth && new Date(year, month, day);
            const isRangePicker = variant === 'RangePicker';
            const isCurrentMonth = currentMonth;
            const isSameDayAsStartDate =
              day === startingDate?.getDate() &&
              month === startingDate?.getMonth() &&
              year === startingDate?.getFullYear();
            const isSameDayAsEndDate =
              day === endingDate?.getDate() &&
              month === endingDate?.getMonth() &&
              year === endingDate?.getFullYear();
            const isSameDayAsSelectedDate =
              day === selectedDate.getDate() &&
              month === selectedDate.getMonth() &&
              year === selectedDate.getFullYear();
            const isSameDayAsTodaysDate =
              day === new Date().getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear();
            const isInRange =
              isRangePicker &&
              currentMonth &&
              dateOfDay > (startingDate ?? dateOfDay) &&
              dateOfDay < (endingDate ?? dateOfDay);
            const isDayDisabled =
              isRangePicker && dateOfDay < new Date(new Date().setHours(0, 0, 0, 0));

            return (
              <div
                aria-hidden
                key={`day-${key}`}
                onMouseEnter={() => {
                  if (
                    currentMonth &&
                    startingDate &&
                    (day > startingDate.getDate() ||
                      month >= startingDate.getMonth() ||
                      year >= startingDate.getFullYear())
                  ) {
                    setHoveredDate(day);
                  }
                }}
                onMouseLeave={() => setHoveredDate(0)}
                className={[
                  style.day,
                  isCurrentMonth ? style.current : '',
                  (isRangePicker && (isSameDayAsStartDate || isSameDayAsEndDate)) ||
                  (!isRangePicker && isSameDayAsSelectedDate)
                    ? style.selected
                    : '',
                  isRangePicker && isSameDayAsTodaysDate ? style.currentDate : '',
                  isInRange ||
                  (isCurrentMonth &&
                    startingDate &&
                    dateOfDay > (startingDate ?? dateOfDay) &&
                    dateOfDay < (new Date(year, month, hoveredDate) ?? dateOfDay) &&
                    !endingDate)
                    ? style.inRangeDate
                    : '',
                  isDayDisabled ? style.disabledDate : ''
                ].join(' ')}
                onClick={currentMonth ? () => selectDate(day) : undefined}
              >
                {day > 0 && day <= daysInMonth ? (
                  <Typography variant="b4-regular">{day}</Typography>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const months = () => {
    const months = Array.from({ length: 12 }, (_, key) =>
      new Date(0, key).toLocaleString('default', { month: 'long' })
    );

    return (
      <div className={style.monthsGridContainer}>
        <div className={style.monthsGridHeader}>
          <Typography
            variant="b3-medium"
            aria-hidden
            onClick={() => setCurrentView('years')}
            className={style.selectedYearContainer}
          >
            <span>{selectedYear}</span>
            <ChevronUpIcon />
          </Typography>
        </div>
        <hr />
        <div className={style.monthsGrid}>
          {months.map((month, key) => (
            <div
              aria-hidden
              key={`${month}_key`}
              className={style.month}
              onClick={() => selectMonth(key)}
            >
              {month.substring(0, 3)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const years = () => {
    const startYear = selectedDate.getFullYear() - 5 + yearOffset;
    const years = Array.from({ length: 24 }, (_, key) => startYear + key);

    return (
      <div className={style.yearGridMainContainer}>
        <div aria-hidden className={style.back}>
          <Typography
            variant="b3-medium"
            role="button"
            tabIndex={0}
            className={style.yearsRange}
            onKeyDown={() => setCurrentView('days')}
            onClick={() => {
              setCurrentView('days');
            }}
          >
            <span>
              {years[0]}&nbsp;-&nbsp;{years[years.length - 1]}
            </span>
            <ChevronUpIcon />
          </Typography>
          <div className={style.yearControls}>
            <div
              aria-hidden
              className={style.prevButton}
              onClick={() => setYearOffset(yearOffset - 24)}
            >
              <ChevronLeftIcon />
            </div>
            <div
              aria-hidden
              className={style.nextButton}
              onClick={() => setYearOffset(yearOffset + 24)}
            >
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        {currentView === 'years' ? <hr /> : ''}

        <div className={style.yearGridContainer}>
          <div className={style.yearsGrid}>
            {years.map((year, i) => (
              <div
                aria-hidden
                key={i}
                className={`${style.year} ${
                  year === selectedDate.getFullYear() ? `${style.selected}` : ''
                }`}
                onClick={() => selectYear(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const prevMonth = () => {
    setDisplayedDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const nextMonth = () => {
    setDisplayedDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <div
      className={[style.datePicker, TriggerComponent ? style.noStyles : '', className].join(' ')}
      ref={containerRef}
    >
      {TriggerComponent ? (
        <TriggerComponent
          type="text"
          readOnly
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          onClick={toggleCalendar}
        />
      ) : variant === 'RangePicker' ? (
        <input
          type="text"
          readOnly
          placeholder="MM/DD/YYYY - MM/DD/YYYY"
          value={
            startingDate || startDate || endingDate || endDate
              ? `${
                  startingDate || startDate
                    ? startingDate?.toLocaleDateString() ?? startDate?.toLocaleDateString()
                    : ''
                } - ${
                  endingDate || endDate
                    ? endingDate?.toLocaleDateString() ?? endDate?.toLocaleDateString()
                    : ''
                }`
              : ''
          }
          className={style.input}
          onClick={toggleCalendar}
        />
      ) : (
        <input
          type="text"
          readOnly
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          className={style.input}
          onClick={toggleCalendar}
        />
      )}
      {showCalendar && (
        <div className={style.calendar}>
          {currentView === 'days' && (
            <div className={style.header}>
              <Typography
                variant="b3-medium"
                aria-hidden
                className={style.monthView}
                onClick={() => {
                  setCurrentView('years');
                }}
              >
                <span>
                  {displayedDate.toLocaleString('default', { month: 'short' }).toUpperCase()}
                </span>
                <span>{displayedDate.getFullYear()}</span>
                <ChevronDownIcon />
              </Typography>

              {currentView === 'days' && (
                <div className={style.changeMonth}>
                  <div aria-hidden onClick={prevMonth} className={style.prevButton}>
                    <ChevronLeftIcon />
                  </div>
                  <div aria-hidden onClick={nextMonth} className={style.nextButton}>
                    <ChevronRightIcon />
                  </div>
                </div>
              )}
            </div>
          )}
          {currentView === 'days' ? <hr /> : ''}
          {currentView === 'days' && days(displayedDate)}
          {currentView === 'months' && months()}
          {currentView === 'years' && years()}
        </div>
      )}
      {!TriggerComponent && (
        <CalendarIcon onClick={toggleCalendar} className={style.calendarIcon} />
      )}
    </div>
  );
};

export default DatePicker;
