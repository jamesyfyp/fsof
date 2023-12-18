import Image from "next/image";


export default function Header () {
    return (
        <div className="col-span-12 bg-black h-[100px] grid grid-cols-12">
            <Image className="col-span-1 my-auto" style={{filter: "grayscale(100%)"}} alt="fleet services logo" height={80} width={80} src="/FleetServicesLogo.png" />
            <div className="col-span-9 flex items-center justify-center">
                <h1 className="text-2xl font-black text-center"> Simplify Your Fleet Management with Our Comprehensive  Maintenance Program!<br /> Start Driving Efficiency and Savings Today! </h1>
            </div>
            <button className="col-span-2 bg-stone-200 text-black m-4 rounded-md font-black text-xl">Contact Us!</button>
        </div>
    )
}