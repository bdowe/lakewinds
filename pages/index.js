import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from '../styles/Landing.module.css';

const Landing = () => {
    return (
        <>
            <Head>
                <title>Lakewinds Rental Property</title>
            </Head>
            <Header />
            <Hero />
            <div className={styles.section}>
                <h1>This is the next section</h1>
            </div>
            <Footer />
        </>
    )
}

export default Landing;
