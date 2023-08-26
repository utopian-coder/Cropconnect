import { BsArrowRightShort } from "react-icons/bs";

function HomePage() {
  return (
    <>
    <section className='lg:grid lg:grid-cols-2 lg:justify-center lg:w-[85%] lg:mx-auto 2xl:items-center'>
      <div className='text-center lg:text-left'>
        <h1 className='heading'>
          Direct Harvest{" "}
          <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
            Empower{" "}
          </span>
          Farmers, Connect Consumers
        </h1>
        <div className='justify-center items-center'>
          <img
            className='lg:hidden h-[40vh] mx-auto'
            src='https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-banner.e4ab8edd.png&w=640&q=75'
          />
        </div>

        <p className='text-xm lg:text-left pt-4 text-center px-8 lg:px-0 lg:text-xl'>
          Fostering Innovation in Agriculture: Empowering Farmers, Connecting
          Markets, Ensuring Sustainability for a Brighter Future
        </p>

        <button className='btn my-8'>
          Get Started <BsArrowRightShort />
        </button>
      </div>
      <div>
        <img
          className='hidden lg:block lg:h-[80%] lg:aspect-square lg:ml-auto 2xl:w-[80%]'
          src='https://bytebytego.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome-banner.e4ab8edd.png&w=640&q=75'
        />
      </div>
    </section>
    
    </>
  );
}

export default HomePage;
