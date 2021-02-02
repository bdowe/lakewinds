import styles from './styles.module.scss';

export default function Hero() {

    return (
        <div className={styles.container}>
            <video
                className={styles.bg_video} 
                playsInline 
                autoPlay 
                muted 
                loop
                /*poster="placeholder.jpg"*/ 
                width="x" 
                height="y"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
