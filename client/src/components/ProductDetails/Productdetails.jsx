import React, { useState } from 'react'
import {BiSolidOffer,} from "react-icons/bi";
import {AiOutlineStar,} from "react-icons/ai";
import {
    MdOutlineDashboard,
    MdAccountCircle,
  } from 'react-icons/md';
const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://img.freepik.com/premium-photo/raw-jasmine-rice-grain-with-ear-paddy-agricultural-products-food-asian-thai-rice-white-bowl-sack-background_73523-3077.jpg?w=1060",
        img2 : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.edobo.in%2Fproduct%2Ftomato-1-kgs&psig=AOvVaw0IrtmWgEBi3cQBIZezJVHy&ust=1694262807193000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMj_9PiCm4EDFQAAAAAdAAAAABAa",
        img3 : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvaluemartdc.com%2Fproduct%2Ftomatoes%2F&psig=AOvVaw0IrtmWgEBi3cQBIZezJVHy&ust=1694262807193000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMj_9PiCm4EDFQAAAAAdAAAAABAj",
        img4 : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dorsetfarmfoods.co.uk%2Fstore%2Fp38%2Ftomatoes_.html&psig=AOvVaw0IrtmWgEBi3cQBIZezJVHy&ust=1694262807193000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMj_9PiCm4EDFQAAAAAdAAAAABAs"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    return (
        <div className='mx-auto flex flex-col  items-center sm:flex-row gap-5  my-3 sm:place-items-start xl:max-w-screen-xl xl:place-items-center'>
            <div className='flex w-3/5 flex-row-reverse sm:py-16 sm:pl-2 sticky sm:w-[15rem] md:w-[25rem] sm:border sm:pr-2 sm:ml-3'>
                <div>               
                     <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-sm'/>
                </div>
                <div className='flex w-[10rem] flex-col justify-between  gap-2 mr-3 border'>
                    <img src={images.img1} alt="" className='h-1/4 w-full rounded-sm cursor-pointer border-1 hover:border-blue-700' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img1} alt="" className='h-1/4 w-full rounded-sm cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img1} alt="" className='h-1/4 w-full rounded-sm cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img1} alt="" className='h-1/4 w-full rounded-sm cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex w-full flex-col gap-2 sm:w-1/2 sm:gap-1 md:gap-2 p-2 '>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Rice</span>
                    <h1 className='text-3xl font-bold hover:text-violet-700'>Golden Rice</h1>
                    <div className='flex ml-2'>
                        <h1 className='text-md font-bold hover:text-green-500'>Rating:</h1>
                        <div className='flex items-center my-1.5 ml-1'>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                        </div>   
                    </div>
                </div>
                <p className='text-gray-700 sm:text-sm md:text-xl'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
                </p>
                
                <h6 className='text-2xl font-bold'> ₹199.00</h6>
                <div >
                    <h1 className='text-xl font-bold hover:text-violet-700  sm:text-xl md:text-2xl'>Offer</h1>
                    <ul className='ml-1'>
                        <li className='flex'><BiSolidOffer className='my-1.5 sm:my-1 md:my-1.5 sm:text-sm md:text-xl'/><p className='ml-1 sm:text-sm md:text-xl'>5% cash offer if take 10kg </p></li>
                        <li className='flex'><BiSolidOffer className='my-1.5 sm:text-sm md:text-xl'/><p className='ml-1 sm:text-sm md:text-xl'>5% cash offer if take 10kg </p></li>
                    </ul>
                </div>
                
                <div className='flex flex-col'>
                    <span className='text-xl font-bold hover:text-violet-700 sm:text-xl md:text-2xl'>Seller</span>
                <div className='flex'>          
                    <MdAccountCircle className='my-1.5  sm:text-sm md:text-xl'/>
                    <p className='ml-1 text-md font-semibold hover:text-blue-500 sm:text-sm md:text-xl'>Atanu China</p>
                </div>
                </div>
                <div className='flex w-full flex-row  items-center justify-center 43 my-2 sm:justify-center'>
                        <button className='bg-violet-600 py-1.5 px-5 mr-10 sm:mr-24 text-white text-md rounded-xl hover:bg-sky-500 font-semibold sm:text-xl' onClick={() => setAmount((prev) => prev - 1)}>Chat</button>
                        <button className='bg-violet-600 text-white font-semibold py-1.5 px-5 text-md rounded-xl h-full lg:ml-2 hover:bg-sky-500 sm:text-xl'>Call</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage