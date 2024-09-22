import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" fixed bottom-[2vh] right-6  scale-[1.5] md:scale-[2] hover:scale-[2] md:hover:scale-[2.21]  ">
        <a href="tel:+918210342249">
          <span class="material-symbols-outlined bg-[#088AFF] p-1 rounded-lg text-[white]  transition-transform duration-200 inline-block">
            call
          </span>
        </a>
      </div>
      <nav className="flex flex-col md:flex-row justify-between items-center bg-[#b2b3b0d2] md:pl-[5vw] px-[5vw] py-2 md:py-5">
        <div className="flex flex-row justify-evenly gap-4 md:gap-3 md:justify-start  items-center ">
          <img
            className="h-[10vh] md:h-[15vh] bg-gray-800 rounded-full "
            src="./image/logo2.png"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
            alt=""
            loading="lazy"
          />
          <div className="navText text-xl md:text-4xl">
            <span className="uppercase">
              Patna Health And Surgical PVT. LTD.
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-end w-[80vw] md:w-fit items-center gap-9">
          <div className="flex flex-col gap-2">
            <a
              className="font-extrabold text-[#967252] glow-text"
              href="tel:+919708229773"
            >
              +919708229773
            </a>
            <a
              className="font-extrabold text-[#967252] glow-text"
              href="tel:+918210342249"
            >
              +918210342249
            </a>
          </div>
          <a href="tel:+919708229773">
            <span class="material-symbols-outlined bg-[#088AFF] p-1 rounded-lg text-[white] hover:scale-[1.35] transition-transform duration-200 inline-block">
              call
            </span>
          </a>
          <a href="https://wa.me/919708229773" target="_blank">
            <i className="fa fa-whatsapp text-3xl bg-[#25D366] text-white rounded-[50%] px-1 hover:scale-125 transition-transform duration-200 inline-block"></i>
          </a>
        </div>
      </nav>

      <div className="homePage">
        <img src="./image/bg1.jpg" alt="" loading="lazy" />
        <h1 className="leading-none w-[95vw] text-xl md:text-4xl font-extrabold">
          Patna Health And Surgical PVT. LTD.
        </h1>
        <h3 className="w-[80vw] text-sm md:text-xl leading-loose ">
          Delivering Quality for Healthier Futures <br />
          Reliable Equipment, Reliable Care
        </h3>
      </div>

      {/* About Us */}
      <section className="w-[95vw] md:w-[90vw] my-6 mx-auto dark:bg-gray-700 bg-[rgba(255,255,0,0.08)] p-4 rounded-3xl border border-[#4e4c4c]">
        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white ">
          About Us
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          At Patna Health and Surgical Pvt. Ltd., we are dedicated to enhancing
          the quality of healthcare in our community through innovative
          solutions and compassionate care. Founded with the mission to provide
          advanced medical equipment and surgical instruments, we are committed
          to improving patient outcomes and supporting healthcare professionals
          in their vital work.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />

        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
          Our Mission
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          Our mission is to deliver high-quality healthcare solutions that
          empower healthcare providers and enhance patient care. We strive to
          bridge the gap between cutting-edge technology and accessible
          healthcare, ensuring that every patient receives the best possible
          treatment.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />

        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
          Our Vision
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          Our mission is to deliver high-quality healthcare solutions that
          empower healthcare providers and enhance patient care. We strive to
          bridge the gap between cutting-edge technology and accessible
          healthcare, ensuring that every patient receives the best possible
          treatment.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />
        <div className="my-4">
          <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
            What We Offer
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <img
              className="md:w-[30vw] rounded-xl border dark:border-white"
              src="./image/WeOffer.jpg"
              alt=""
            />
            <div className="flex flex-col justify-evenly">
              <span className="font-bold text-black dark:text-white">
                Hospital Furniture:
              </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1 text-black dark:text-white">
                We offer a wide range of hospital furniture, including
                five-function beds, Fowler beds, and stretchers, all designed
                for durability and patient comfort in clinical environments.
              </p>
              <span className="font-bold text-black dark:text-white">
                Surgical Instruments:
              </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1 text-black dark:text-white">
                A comprehensive range of high-quality surgical tools designed
                for precision and reliability in various medical procedures.
              </p>
              <span className="font-bold text-black dark:text-white">
                Medical Equipment:{" "}
              </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1 text-black dark:text-white">
                Advanced medical devices and diagnostic tools that empower
                healthcare professionals to provide accurate and efficient care.
              </p>
              <span className="font-bold text-black dark:text-white">
                Comprehensive Services:
              </span>
              <p className="text-left text-sm pl-4 md:text-lg my-1 text-black dark:text-white">
                We also offer all kinds of services, including installation,
                maintenance, and after-sales support to ensure your equipment
                operates at peak efficiency.
              </p>
            </div>
          </div>

          <div className="my-3 flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-3 md:gap-2">
              <a
                href="./image/pdfImage/pdfImg1.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg1.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg2.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg2.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg3.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg3.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg4.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg4.jpg" alt="" className="" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 ">
              <a
                href="./image/pdfImage/pdfImg5.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg5.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg6.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg6.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg7.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg7.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg8.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg8.jpg" alt="" className="" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2">
              <a
                href="./image/pdfImage/pdfImg9.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg9.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg10.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg10.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg11.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg11.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg12.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg12.jpg" alt="" className="" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2">
              <a
                href="./image/pdfImage/pdfImg13.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg13.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg14.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg14.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg15.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg15.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg16.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg16.jpg" alt="" className="" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2">
              <a
                href="./image/pdfImage/pdfImg17.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg17.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg18.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg18.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg19.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg19.jpg" alt="" className="" />
              </a>
              <a
                href="./image/pdfImage/pdfImg20.jpg"
                className="w-[90vw] overflow-hidden pointer md:w-[23%] mx-auto rounded-lg"
                target="_blank"
              >
                <img src="./image/pdfImage/pdfImg20.jpg" alt="" className="" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />
        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
          Our Commitment to Quality
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          Quality is at the heart of everything we do. We adhere to stringent
          quality control measures and work with trusted manufacturers to ensure
          that all our products meet international standards. Our team of
          experts is continually researching and evaluating the latest
          advancements in medical technology to bring you the best solutions
          available.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />
        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
          Our Team
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          Our team consists of highly skilled professionals with extensive
          experience in the healthcare sector. We believe that a knowledgeable
          and dedicated team is essential to our success. Our experts are always
          available to provide guidance and support to our clients, ensuring
          they have the tools they need to succeed.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />
        <p className="text-left text-lg font-bold md:text-2xl my-3 text-black dark:text-white">
          Community Engagement
        </p>
        <p className="text-left text-sm md:text-lg my-3 text-black dark:text-white">
          At Patna Health and Surgical Pvt. Ltd., we believe in giving back to
          the community. We actively participate in health awareness programs
          and initiatives aimed at educating the public about health and
          wellness. We are committed to being a responsible corporate citizen
          and contributing to the overall well-being of society.
        </p>
        <hr className="border border-[#4746467d] dark:border-[#ffffff5c]" />

        <p className="text-center text-sm font-bold md:text-lg my-3 text-black dark:text-white">
          We invite you to learn more about our products and services. For
          inquiries, please contact us at{" "}
          <a className="font-extrabold" href="tel:+918210342249">
            +918210342249.
          </a>
        </p>
      </section>

      <div className="flex flex-col md:flex-col gap-4 items-center my-4">
        <div className="flex flex-col md:flex-row justify-evenly gap-3">
          <img
            src="./image/pic1.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic2.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic3.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
        </div>
        <div className="flex flex-row md:flex-row justify-evenly gap-3 md:gap-48">
          <img
            src="./image/pic4.png"
            alt=""
            className="dark:border-2 dark:border-white :border-white w-[25%] md:w-auto md:h-[40vh] rounded-lg "
          />
          <img
            src="./image/pic6.png"
            alt=""
            className="dark:border-2 dark:border-white :border-white w-[25%] md:w-auto md:h-[40vh] rounded-lg "
          />
          <img
            src="./image/pic5.png"
            alt=""
            className="dark:border-2 dark:border-white :border-white w-[25%] md:w-auto md:h-[40vh] rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-3">
          <img
            src="./image/pic7.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic8.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
          <img
            src="./image/pic9.png"
            alt=""
            className="dark:border-2 dark:border-white w-[80vw] md:w-[30%] rounded-lg"
          />
        </div>
      </div>

      <footer className="p-4 mx-auto bg-[rgba(0,0,0,0.08)] dark:bg-gray-800 ">
        <div className="w-[95vw] md:w-[80vw] flex justify-start items-center mx-auto ">
          <div>
            <div className="text-xl md:text-3xl font-bold text-black dark:text-white">
              Contact Us
            </div>
            <a
              href="https://maps.app.goo.gl/91EYinU16aLoV5jM7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start items-start cursor-pointer gap-2 my-3"
            >
              <span className="font-bold text-lg md:text-xl text-black dark:text-white">
                Address:{" "}
              </span>
              <div className="text-sm md:text-lg text-[#777777]">
                C/o - Sona Singh, Dashratha, Near Indian Oil Gate No.- 1, Patna
                Bihar - 800002
              </div>
            </a>
            <div className="flex justify-start items-start cursor-pointer gap-2 my-3">
              <span className="font-bold text-lg md:text-xl text-black dark:text-white">
                Phone:{" "}
              </span>
              <span className="text-sm md:text-lg text-[#777777]">
                <a href="tel:+919708229773"> +919708229773, </a>
                <a href="tel:+918210342249"> +918210342249 </a>
              </span>
            </div>
            <a
              href="mailto:patnasauryasolution@gmail.com"
              className="flex justify-start items-start cursor-pointer gap-2 my-3"
            >
              <span className="font-bold text-lg md:text-xl text-black dark:text-white">
                Email:{" "}
              </span>
              <span className="text-sm md:text-lg text-[#777777]">
                patnahealthandsurgical@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center my-3 text-center text-sm md:text-base text-[#777777]">
          Thank you 🙋‍♂️ for stopping by Patna Health and Surgical PVT. LTD. !
          Together, let’s embark on a journey toward a healthier tomorrow!
        </div>
        <div className="flex justify-center my-3 text-center text-xs md:text-sm ">
          <p className="text-[#777777]">
            For website-related issues, please reach out to our developer:{" "}
            <a
              href="mailto:akshayrishu4@gmail.com"
              className="font-bold text-[#967252] hover:scale-125 transition-transform duration-200 inline-block"
            >
              {" "}
              Akshay Kumar
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
