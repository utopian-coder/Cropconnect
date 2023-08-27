import { MdAndroid } from "react-icons/md";
import { GoBroadcast } from "react-icons/go";
import Box from "./Box";
function Goals() {
  return (
    <section className='bg-blue-100 h-screen'>
      <header bg>
        <h1 className='text-4xl text-center font-medium'>
          Goals{" "}
          <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Section
          </span>
        </h1>
      </header>
      <main className='bg-gradient-to-r'>
        <div className='mt-32 flex w-full flex-col border-solid h-full md:flex-row md:text-center md:items-center md:box-border md:justify-between xl:justify-center'>
          <Box />
          <div className=' flex flex-row m-4 p-4 border-solid rounded-2xl text-center bg-slate-300 2xl:w-60 md:flex-col md:w-2/6'>
            <div className='md:flex md:justify-center md:items-center md:my-[-2rem]'>
              <MdAndroid size='50px' color='yellow' />
            </div>
            <div className='mb-4 md:my-[2rem]'>
              <h3 className='text-2xl font-medium text-left md:text-center'>
                Curated Opportunities
              </h3>
              <p className='text-xl m-2.5 font-normal text-left md:text-center '>
                Unique investment opportunities qualified through reputed
                partners and rigorous due diligence
              </p>
            </div>
          </div>
          <div className='flex m-4 p-4 w- border-solid rounded-2xl text-center  bg-slate-300  2xl:w-60 md:flex-col md:w-2/6'>
            <div className=' md:flex md:justify-center md:items-center md:my-[-2rem]'>
              <GoBroadcast size='50px' color='purple' />
            </div>
            <div className='mb-4 md:my-[2rem]'>
              <h3 className='text-2xl font-medium text-left md:text-center'>
                Curated Opportunities
              </h3>
              <p className='m-2.5 text-xl font-normal text-left md:text-center'>
                Unique investment opportunities qualified through reputed
                partners and rigorous due diligence
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
export default Goals;
