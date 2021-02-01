import styles from './styles.module.css';
import Video from '../BackgroundVideo';

export default function Hero() {

    return (
        <div className={styles.container}>
            <Video 
                path="/hero.mp4" 
                class={styles.bg_video}
            />
        </div>
    )
}
