import db from '../../config/db'
import './styles.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Services
import hours from '../../services/hours'

export default function Header() {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [hoursList, setHoursList] = useState(Array<String>)

    useEffect(() => {
        setOpen(hours.compareDate())
        setHoursList(hours.openingHoursList())
    }, [])

    return (
        <header id='header'>
            <img id='logo' src="./images/logo.jpg" alt={db.companyInfo.name} onClick={() => navigate('/')} />
            <h3>{db.companyInfo.name}</h3>
            <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split d-flex flex-row align-items-center gap-2" data-bs-toggle="dropdown" aria-expanded="false">
                {open ? <b className='text-success'>Aberto</b> : <b className='text-danger'>Fechado</b>}
                <span className="visually-hidden">Horário de funcionamento</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark text-light p-3">
                {hoursList.map((item: any, index: number) => {
                    return (
                        <div key={index} className='p-1 border-bottom border-secondary'>
                            {item}
                        </div>
                    )
                })}
            </ul>
        </header>
    )

}