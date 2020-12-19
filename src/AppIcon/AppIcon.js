import React from 'react'
import Styles from './AppIcon.module.css'
import cn from 'classnames'

const AppIcon = ({src, className, alt ='icon', id, onClick, width, style}) => {
    return (
        <div id={id} className={cn([Styles.container, className])} onClick={onClick} style={style}>
            <img src={src} alt={alt} width={width} onClick={onClick}/>
        </div>
    )
}

export default AppIcon
