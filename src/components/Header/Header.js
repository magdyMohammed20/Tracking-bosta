import './Header.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Header() {
    const [term, setTerm] = useState('')
    const [search, setSearch] = useState(true)


    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        if (term.trim()) {
            setSearch(false)
            navigate(`/track/${term}`, { replace: true })
        } else {
            alert('Enter Valid Track Code')
        }
    }
    return (
        <div className='header'>
            <div className='user'>
                <img src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg" />
            </div>

            <div className='lists'>
                <ul className='list-1'>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>


                </ul>
                <ul className='list-1'>
                    <li onClick={() => setSearch(!search)}>Tracking Shipment <i className="fas fa-chevron-down fa-lg"></i></li>
                </ul>

            </div>

            {
                search && (
                    <div className='search-bar'>
                        <h2>Track your shipment</h2>
                        <p>Enter your tracking No.</p>
                        <form onSubmit={submitHandler}>
                            <input type='text' placeholder='Tracking No' value={term} onChange={e => setTerm(e.target.value)} required />
                            <button type='submit'><i className='fa fa-search'></i></button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Header
