import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <AvailableAppoinment selectedDate={selectedDate} />
        </div>
    );
};

export default Appoinments;