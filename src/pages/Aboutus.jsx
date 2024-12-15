import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <>
      <Header />
      <motion.div initial={{ y:2000 }} animate={{ y:50 }} transition={{ duration: 1 }}>
      <div className="mx-44">
        <br />
        <h1 className="text-red-600 text-6xl font-extrabold italic text-center hover:animate-pulse hover:text-black">
          Welcome to Mudra Technologies
        </h1>
        <br />
        <div className="max-w-4xl mx-auto text-center">
            
            <p className="text-lg text-red-600 font-mono">Explore the latest advancements in weigh machine technologies designed to provide precision, efficiency, and innovation in all your weighing needs.</p>
        </div>

        <div style={{ borderBottom: '4px solid red', width: '100%', margin: '10px 0' }} />
        <div className="flex">
          <p className="text-red-600 text-2xl">
            At Mudra Technologies, we are committed to delivering unparalleled value to our customers by blending innovation with efficiency. Our brand ethos is built on providing unique and tailored solutions that cater to the evolving needs of our clients. With a dedication to excellence, we strive to serve our customers in the most efficient and effective manner, ensuring that every interaction is meaningful and every service is impactful.
            <br />
            <br />
            We believe that true success comes from understanding our clients’ goals and challenges. By fostering a culture of trust and reliability, we aim to build lasting relationships that go beyond the typical service-provider dynamic. At Mudra Technologies, our mission is to empower our customers through technology, making their lives easier, more productive, and more connected.
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-600 p-4 rounded-lg shadow-md">
                <i className="fas fa-balance-scale fa-3x text-blue-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-white">Precision Engineering</h3>
                <p className="text-white font-mono"> Our weigh machines are engineered with precision to ensure accurate measurements every time.</p>
            </div>
            <div className="bg-red-600 p-4 rounded-lg shadow-md">
                <i className="fas fa-cogs fa-3x text-blue-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-white">Innovative Design</h3>
                <p className="text-white font-mono">Experience cutting-edge design that combines functionality with modern aesthetics.</p>
            </div>
            <div className="bg-red-600 p-4 rounded-lg shadow-md">
                <i className="fas fa-chart-line fa-3x text-blue-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-white">Efficiency</h3>
                <p className="text-white font-mono">Our technology ensures efficient operations, saving you time and resources.</p>
            </div>
        </div>
    </section>
      <br/>
      <br/>
      <Footer />
      </motion.div>
      
     
    </>
   
  );
}

export default AboutUs;