import React from 'react'
import styles from './EventsSelector.module.css'
import EventButton from '../EventButton/EventButton'



const EventsSelector = ({events, eventNumber, onClick }) => {
    return (
        <div className={styles.container}>
        {events.map((event, idx) => <EventButton
          key={idx}
          label={event.label}
          onClick={() => onClick(event.value)}
          isSelected={event.value === eventNumber}
        />)}
      </div>
    )
}

export default EventsSelector
