import Header from "../compenents/Header";
import Footer from '../compenents/Footer';
import { motion } from 'framer-motion';

function OurExpertize(){
    return (
        <>
        <Header/>
        <motion.div initial={{ y:2000 }} animate={{ y:50 }} transition={{ duration: 1 }}>
        
        <div className="mx-44">
            <br></br>
            <h1 className="text-red-600 text-6xl font-extrabold italic text-center hover:animate-pulse hover:text-black">Our Expertise</h1>
            <br></br>
            <div style={{ borderBottom: '4px solid red', width: '100%', margin: '10px 0' }} />
            <p className=" text-red-600 text-2xl"> At Mudra Technologies, we have strategically focused our expertise on domains that reflect our commitment to precision and reliability. Our core competencies lie in the design and development of advanced weighing solutions, including weighbridges, industrial weighing scales, and tank weighing systems.
                <br></br>
                <br></br>

Each solution is crafted with meticulous attention to detail to meet the specific needs of our clients. By concentrating on these areas, we ensure that our products not only meet industry standards but also offer unparalleled accuracy and durability. Mudra Technologies is dedicated to empowering businesses with tools that enhance efficiency and accuracy, supporting industries that rely on precise measurements for their operations.</p>
<div className="max-w-4xl mx-auto">
    <br/>
    <br/>
            <h2 className="text-2xl font-bold text-center mb-4 text-red-600"> Our Sample Weigh Machines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="assets/Product-1.png" alt="A modern digital weigh machine with a sleek design" className="rounded-lg shadow-md h-72 w-80 border-4"/>
                <img src="assets/Product-2.png" alt="An industrial weigh machine in a factory setting" className="rounded-lg shadow-md h-72 w-80 border-4"/>
                <img src="assets/Product-3.png" alt="A portable weigh scale with a compact design" className="rounded-lg shadow-md h-72 w-80 border-4"/>
            </div>
        </div>
            </div>
            
            <div className="mt-44">
            <Footer />
            </div>
            
            
            </motion.div>
            
        </>
    );
}

export default OurExpertize;