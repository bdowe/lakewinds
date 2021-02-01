import styles from './styles.module.css';
import Video from '../BackgroundVideo';
export default function Footer() {

    return (
        <div className={styles.container}>
            <Video 
                path="/footer.mp4" 
                class={styles.bg_video}
            />
        </div>
    )
}
