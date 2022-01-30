import React from 'react';
import './TrackDetail.scss'

function FirstDetail(props) {

    const { trackNumber, status, lastUpdate, CreateDate } = props

    // Method To Form Date In Arabic
    function convDate(date, special = false) {

        if (special) {
            return new Date(date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'short', year: 'numeric' })
        } {
            return new Date(date).toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
        }
    }



    return <div className='first-details'>
        <div>
            <div className='det-header'>رقم الشحنة : {trackNumber}</div>
            <div>
                {
                    status === "DELIVERED" && <span style={{ color: 'green' }}>تم تسليم الشحنة</span> ||
                    (status === "DELIVERED_TO_SENDER" || status === "UNDERCREATE") && <span style={{ color: 'rgb(231, 231, 20)' }}>لم يتم تسليم الشحنة</span> ||
                    status === "CANCELED" && <span style={{ color: 'red' }}>تم إلغاء الشحنة</span>
                }
            </div>
        </div>
        <div>
            <div className='det-header'>أخر تحديث</div>
            <div> {convDate(CreateDate).replace(',', '')}</div>
        </div>
        <div>
            <div className='det-header'>أسم التاجر</div>
            <div>SOUQ.COM</div>
        </div>
        <div>
            <div className='det-header'>موعد التسليم خلال</div>
            <div>{convDate(lastUpdate, true)}</div>
        </div>
    </div>;
}

export default FirstDetail;
