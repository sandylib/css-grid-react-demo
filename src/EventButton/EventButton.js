import React from 'react';
import cn from 'classnames';
import styles from './EventButton.module.css';

const EventButton = ({label, isSelected, onClick}) => {
    const [hover, setHover] = React.useState(false)

    return (
        <div
            className={`${isSelected ? cn(styles.item, styles.active) : hover ? cn (styles.item, styles.rollover) : styles.item }`}
            onClick={onClick}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}>
            {label}
      </div>
    )
}

export default EventButton
