'use client'
import { MouseEventHandler, ReactElement, useState } from "react"
import styles from './play-button.module.scss'
import { PauseIcon, PlayIcon } from "lucide-react"
import classnames from "classnames"

const PlayButton = (): ReactElement => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const handleClickPlay = (): void => {
        setIsActive(!isActive)
    }

    const handleClickPause = (): void => {
        setIsPaused(!isPaused)
        setIsActive(!isActive)

    }

    return <div className={styles.playButtonWrapper}>
        {isActive ? <PauseIcon className={styles.icon} onClick={handleClickPause} /> : <PlayIcon className={styles.icon} onClick={handleClickPlay} />}
        <div className={classnames({ [styles.active]: isActive, [styles.reverse]: isPaused })}></div>
        <div className={classnames({ [styles.active]: isActive }, styles.secondary)}></div>
    </div>

}

export { PlayButton }