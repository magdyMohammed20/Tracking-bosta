import React, { useState } from 'react';
import './TrackDetail.scss'
function ShippingDetail({ TransitEvents }) {

    const [hub, setHub] = useState('')



    console.log(TransitEvents)


    return <div className='shipping-detail'>
        <div className='detail-1'>
            <h3>تفاصيل الشحنة</h3>
            <table>
                <thead>
                    <tr>
                        <th>الفرع</th>
                        <th>التاريخ</th>
                        <th>الوقت</th>
                        <th>تفاصيل</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TransitEvents && TransitEvents.map(ev => (
                            <tr key={Math.random()}>
                                <td>{ev.hub}</td>
                                <td>
                                    {
                                        new Date(ev.timestamp).toLocaleDateString('ar-EG', { day: 'numeric', month: 'numeric', year: 'numeric' })
                                    }
                                </td>
                                <td>
                                    {
                                        new Date(ev.timestamp).toLocaleTimeString('ar-EG', { hour: 'numeric', minute: '2-digit' })
                                    }
                                </td>
                                <td>
                                    {
                                        ev.state === 'TICKET_CREATED' && 'تم إنشاء الشحنة' ||
                                        ev.state === "PACKAGE_RECEIVED" && 'تم إستلام الشحنة' ||
                                        ev.state === "NOT_YET_SHIPPED" && 'لم يتم شحنه بعد' ||
                                        ev.state === "OUT_FOR_DELIVERY" && 'خارج للتوصيل' ||
                                        ev.state === "RECEIVED_DELIVERY_LOCATION" && 'تم استلام موقع التسليم' ||
                                        ev.state === "DELIVERED" && 'تم التوصيل'

                                    }
                                    <span className='reason'>
                                        {
                                            ev.reason && ev.reason
                                        }
                                    </span>
                                </td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </table>
        </div>
        <div className='detail-2'>
            <h3>عنوان التسليم</h3>
            <div>
                إمبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22
            </div>
        </div>
    </div>;
}

export default ShippingDetail;
