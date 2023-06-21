import { PlayButton } from '@component/components/play-button/play-button'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <PlayButton />
    </main>
  )
}
