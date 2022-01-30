import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './TrackDetail.scss'
import FirstDetail from './FirstDetail'
import SecondDetail from './SecondDetail'
import ShippingDetail from './ShippingDetail'


function TrackDetail() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [lastUpdate, setLastUpdate] = useState('')
    useEffect(async () => {
        await axios.get(`https://tracking.bosta.co/shipments/track/${id}`).then(data => {
            setData(data.data)
        })
    }, [id])

    // Get Day Name : new Date("2022-01-24T11:08:38.483Z").toLocaleDateString('ar-EG', { weekday: 'long' })

    const {
        TrackingNumber,
        TransitEvents,
        CurrentStatus,
        CreateDate
    } = data

    console.log(data)


    return (
        <>
            <div className='detail-parent'>
                <FirstDetail
                    trackNumber={TrackingNumber}
                    status={CurrentStatus?.state}
                    lastUpdate={CurrentStatus?.timestamp}
                    CreateDate={CreateDate}
                />
                <SecondDetail
                    status={CurrentStatus?.state}
                />
            </div>

            <>
                <ShippingDetail TransitEvents={TransitEvents} />
            </>
        </>
    )
}

export default TrackDetail
