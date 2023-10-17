
import TypewriterComponent from "typewriter-effect";
import TextGradient from "./TextGradient";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"/>
      <title>Home</title>
    </Head>
        <div className="w-full  relative  h-[80vh]  ">
        <video
          className="object-cover brightness-[30%]  h-[80vh] w-full"
          autoPlay={true}
          muted={true}
          loop={true}
          src="https://res.cloudinary.com/dbwc39val/video/upload/v1670660903/myportfolio/mixkit-digital-animation-of-screens-4192-medium_sdjprq.mp4"
        />
        <div className="absolute p-4 w-full gap-5 h-[80vh] text-center top-0 text-white flex flex-col items-center justify-center">
        
          <h1 className="md:text-[50px] text-[20px] font-bold">
            Hi, I'm 
          </h1>
          <TextGradient>Aditya</TextGradient>
          <TextGradient >
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "A Full-Stack Web Developer",
                  "Able to make responsive Designs.",
                  "Open to Learning New Technologies.",
                
                ],
              }}
            />
          </TextGradient>
          <p className="text-[15px] md:text-[20px]">
            I’m focused on building responsive Full-Stack web applications
          </p>
          <p className="text-[15px] md:text-[20px]">LET'S BUILD SOMETHING TOGETHER </p>
         
        </div>
      </div>
    </>
  )
}

export default Home