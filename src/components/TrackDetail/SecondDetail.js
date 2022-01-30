import React, { useEffect, useState } from 'react';
import './TrackDetail.scss'

function SecondDetail(props) {

    const { status } = props
    const [color, setColor] = useState('')



    useEffect(() => {
        if (status === 'DELIVERED') {
            setColor('green')
        }

        else if (status === "UNDERCREATE" || status === "DELIVERED_TO_SENDER") {
            setColor('#e7e714')
        }

        else {
            setColor('red')
        }
    }, [status])

    return <div className='second-details'>
        <div>
            <p style={{
                backgroundColor:
                    status === 'DELIVERED' && 'green' ||
                    status === 'UNDERCREATE' || status === 'DELIVERED_TO_SENDER' && '#e7e714'
            }}>
                <span className='first-span' style={{ backgroundColor: color }}>✔</span>
            </p>
            تم إنشاء الشحنة

        </div>
        <div>
            <p style={{
                backgroundColor:
                    status === 'DELIVERED' && 'green' ||
                    status === 'UNDERCREATE' || status === 'DELIVERED_TO_SENDER' && '#e7e714'
            }}>
                <span className='second-span' style={{ backgroundColor: color }}>✔</span>
                <span className='fourth-span' style={{ backgroundColor: color, width: status === 'DELIVERED' ? '25px' : '50px', height: status === 'DELIVERED' ? '25px' : '50px', lineHeight: status === 'DELIVERED' ? '25px' : '45px' }}>

                    {
                        status === 'DELIVERED' ? '✔' : '🚒'
                    }
                </span>
            </p>
            تم إستلام الشحنة من التاجر
        </div>
        <div>
            <p style={{
                backgroundColor:
                    status === 'DELIVERED' && 'green' ||
                    status === 'DELIVERED_TO_SENDER' || status === 'UNDERCREATE' && '#EEE'
            }}>
                <span className='third-span' style={{
                    backgroundColor: status === 'DELIVERED' ? 'green' : '#EEE'

                }}>✔</span>
            </p>
            <span className='prev-finish'>الشحنة خرجت للتسليم</span>
            <span className='finish'>تم التسليم</span>

        </div>

    </div>;
}

export default SecondDetail;
