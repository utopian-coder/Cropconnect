import { GiPoliceBadge } from "react-icons/gi";

function Box()
{
    return <>
    <div className=" flex flex-row m-4 p-4 border-solid rounded-2xl text-center bg-slate-300 2xl:w-60 md:flex-col md:w-2/6">
        <div className="md:flex md:justify-center md:items-center md:my-[-2rem]"><GiPoliceBadge size="50px" color="yellow" /></div>
        <div className="mb-4 md:my-[2rem]">
            <h3 className="text-2xl font-medium text-left md:text-center">Curated Opportunities</h3>
            <p className="text-xl m-2.5 font-normal text-left md:text-center ">Unique investment opportunities qualified through reputed partners and rigorous due diligence</p>
        </div>
    </div>
    </>
}
export default Box;
