import React, { useContext, useState } from 'react';
// import listInfo from '../store/store';
import GlobalContext from '../context/GlobalContext';
import './modal.css'
const Modal = ({ date }) => {
    const [value, setValue] = useState({
        date,
        category: '',
        title: '',
        description: ''
    })
    const handleCancel = () => {
        let rootStyle = document.documentElement.style
        rootStyle.setProperty('--displayModal', 'none')
    }
    const handleChange = (e) => (option) => {
        setValue((prev) => ({ ...prev, date, [option]: e.target.value }))
    }
    const { setListInfo, listInfo } = useContext(GlobalContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        listInfo.map((item, index) => {
            if (item.date.day === value.date.day && item.date.month === value.date.month && item.date.year === value.date.year) {
                listInfo.splice(index, 1)
            }
        })
        setListInfo([...listInfo, value])
        let rootStyle = document.documentElement.style
        rootStyle.setProperty('--displayModal', 'none')
        setValue(() => ({ date, category: '', title: '', description: '' }))
    }
    console.log(listInfo);
    return (
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <div className="modal-header">
                    <select defaultValue={value.category} value={value.category} onChange={(e) => handleChange(e)('category')} name="Category" id="categories">
                        <option value="" style={{ display: "none" }}></option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Development">Development</option>
                        <option value="Finance">Finance</option>
                    </select>
                    <div className="modal-calendar">
                        <div className="calendar-icon"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#ababb4" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                            <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg></div>
                        <span className='modal-calendar-date'>{date.year}/{date.month}/{date.day}</span>
                    </div>
                </div>
                <div className="modal-main">
                    <div className="check-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#4d7afd" className="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                    </div>
                    <div className="modal-form">
                        <input type="text" placeholder='Title of the task' value={value.title} onChange={(e) => handleChange(e)('title')} className='modal-input-title' />
                        <textarea placeholder='...Description' value={value.description} onChange={(e) => handleChange(e)('description')} className='modal-input-description' /><br />
                        <button className='modal-button-submit' type='submit'>Add task</button>
                        <button className='modal-button-cancel' type='button' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Modal;
