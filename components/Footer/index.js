import styles from './styles.module.scss';
export default function Footer() {

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
                <source src="/footer.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
