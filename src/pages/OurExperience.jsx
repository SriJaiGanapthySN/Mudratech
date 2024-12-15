import Header from "../compenents/Header";
import Footer from '../compenents/Footer';
import { motion } from 'framer-motion';

function OurExperience(){
    return (
        <>
        <Header/>
        <motion.div initial={{ y:2000 }} animate={{ y:50 }} transition={{ duration: 1 }}>
        <div className="mx-44">
            <br></br>
            <h1 className="text-red-600 text-6xl font-extrabold italic text-center hover:animate-pulse hover:text-black">Our Experience</h1>
            <br></br>
            <div style={{ borderBottom: '4px solid red', width: '100%', margin: '10px 0' }} />
            <p className="text-red-600 text-2xl">With over 25 years of experience, Mudra Technologies has proudly reached a significant milestone, celebrating the silver jubilee of our trusted brand, Digiweigh. Throughout the years, we have connected with more than 1 lakh customers, providing reliable and innovative solutions that have strengthened our bond with the community we serve.
                <br></br>
                <br></br>

Our journey is defined by a commitment to quality, precision, and customer satisfaction. We are dedicated to leveraging our extensive expertise to deliver unparalleled products and services, always focused on exceeding expectations and advancing the standards in our industry.
<br></br>
<br></br>

Join us as we continue to build on our legacy, fostering connections and setting new benchmarks in technology and service.</p>
        </div>
        <Footer />
        </motion.div>
        
        </>
    );
}

export default OurExperience;