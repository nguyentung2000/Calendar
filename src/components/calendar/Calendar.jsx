import React, { useContext } from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import GlobalContext from '../context/GlobalContext';
import './calendar.css'
import { getElementError } from '@testing-library/react';
const Calendar = () => {
    const { setListInfo, listInfo } = useContext(GlobalContext)
    let blank = []
    let totalDays = []
    let totalSlots = []
    let totalSlotDate = []
    const weekdayshort = moment.weekdaysShort()
    const [infoCalendar, setInfoCalendar] = useState({
        dateObject: moment(),
        allmonths: moment.months()
    })
    const [time, setTime] = useState({
        day: '',
        month: '',
        year: ''
    })
    const handleSetModal = (i) => {
        setTime({
            day: i,
            month: shortMonth(),
            year: year()
        })
        let rootStyle = document.documentElement.style
        rootStyle.setProperty('--displayModal', 'flex')
    }
    const shortMonth = () => {
        return infoCalendar.dateObject.format("MM")
    }
    const dayInMonth = () => {
        return infoCalendar.dateObject.daysInMonth()
    }
    const year = () => {
        return infoCalendar.dateObject.format("Y")
    }
    const firstDayOfMonth = () => {
        let firstDay = moment(infoCalendar.dateObject).startOf("month").format("d")
        return firstDay
    }
    const month = () => {
        return infoCalendar.dateObject.format("MMMM")
    }
    const onPrev = () => {

        blank = []
        totalDays = []
        totalSlots = []
        totalSlotDate = []
        setInfoCalendar(({ allmonths: moment.months(), dateObject: infoCalendar.dateObject.subtract(1, "month") }))
    }

    const onNext = () => {

        blank = []
        totalDays = []
        totalSlots = []
        totalSlotDate = []
        setInfoCalendar({ allmonths: moment.months(), dateObject: infoCalendar.dateObject.add(1, "month") })
    }
    useEffect(() => {
        // const render = listInfo.map(item => {
        //     if (i === item.date.day && shortMonth() === item.date.month && year() === item.date.year) {
        //         return <div className={`info-day ${item.category}`}>{i}<br />{item.title}<br />{item.description}</div>
        //     }
        // })
        // console.log(render);
    }, []);
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blank.push(<td className='day-blank'>{""}</td>)
    }
    for (let i = 1; i <= dayInMonth(); i++) {
        totalDays.push(
            <td key={i} className={`day-in-month`} onClick={() => handleSetModal(i)}><div className={`day-${i}-${month()}-${year()}`}>{i}</div>
                {
                    listInfo.map(item => {
                        if (i === item.date.day && shortMonth() === item.date.month && year() === item.date.year) {
                            const a = document.getElementsByClassName(`day-${i}-${month()}-${year()}`)[0]
                            console.log(a);
                            a.style.display = "none"
                            return <div className={`info-day ${item.category}`}>
                                <div className='day-in-month-num'>{i}</div>
                                <div className='day-in-month-title'>{item.title}</div>
                                <div className='day-in-month-description'>{item.description}</div>
                            </div>
                        }
                    })
                }
            </td>
        )
    }
    totalSlots = [...blank, ...totalDays]
    // console.log(totalSlots);
    let arr = []
    totalSlots.forEach((item, index) => {
        // console.log(index);
        if ((index + 1) % 7 > 1) {
            arr.push(item)
        }
        if ((index + 1) % 7 === 0 || (index - blank.length) + 1 === dayInMonth()) {
            totalSlotDate.push(arr)
            arr = []
        }
        return
    })
    // console.log(totalSlotDate);
    const totals = totalSlotDate.map(item => <tr>{item.map(i => i)}</tr>)
    return (
        <div>
            <div className="right-sidebar-content">
                <div className="content-header">
                    <div className="header-button-date">
                        <button className='button-week'>Week</button>
                        <button className='button-month'>Month</button>
                    </div>
                    <div className="header-button-time">
                        <button className='header-button-before' onClick={onPrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                        </button>
                        <span className='header-button-time-title'>{month()}</span>
                        <button className='header-button-after' onClick={onNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </button>
                    </div>
                    <div className="header-button-3">
                        <button className='header-button-weekend'>Weekends</button>
                        <button className='header-button-add-task'>Add task</button>
                    </div>
                </div>
                <div className="content-main">
                    <table className='content-main-table'>
                        <thead>
                            <tr>{weekdayshort.map(day => {
                                if (day !== 'Sun' && day !== 'Sat') {
                                    return <th key={day}>{day}</th>
                                }
                            })}</tr>
                        </thead>
                        {totals}
                    </table>
                    <Modal date={time} />
                </div>

            </div>
        </div>
    );
}

export default Calendar;
