import React from 'react'
import styles from './RaceHeader.module.css';
import EventsSelector from '../EventsSelector/EventsSelector'
import { generateEvents } from '../utils/help';
import AppIcon from '../AppIcon/AppIcon'
import MenuIcon from '../assets/img/more.svg'

const RaceHeader = () => {

    const [events, setEvents] = React.useState(generateEvents(13));
    const [eventNumber, setEventNumber] = React.useState();
    const onClick = (value) => {
        setEventNumber(value);
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.body}>
                <EventsSelector eventNumber={eventNumber} events={events} onClick={onClick} />
                <AppIcon src={MenuIcon} />
            </div>
            
        </div>
    )
}

export default RaceHeader
