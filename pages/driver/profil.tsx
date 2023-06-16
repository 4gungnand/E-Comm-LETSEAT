import Header_w_notif from "@/components/Merchant/Header_w_notif"
import Navbar_driver from "@/components/Driver/Navbar_driver";

import Link from "next/link";

export default function profil_sel() {
    return (
        <div className="font-poppins bg-[#E89005] max-h-screen">
            
            <Header_w_notif>
                Budi Santosos
            </Header_w_notif>

            <div className="mt-[254px] rounded-t-lg bg-white">
                {/* Content */}
                <div
                    className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative"
                >
                    {/* Logout Button */}
                    <button className="absolute right-0 translate-x-6 -translate-y-6">
                        <img src="/m_profil_logout.svg" alt="" />
                    </button>

                    {/* Profile Picture */}
                    <img src="/m_profil_pp.svg" className="mx-auto pt-[17px]"/>

                    {/* Nama dan Alamat */}
                    <div className="flex flex-col justify-center items-center mt-[17px]">
                        
                        {/* Nama Driver */}
                        <h1 className="font-semibold text-[21px]">
                            Budi Santosos
                        </h1>

                        {/* Alamat Driver */}
                        <p className="font-medium text-[16px]">
                        AB 1234 KC
                        </p>
                        
                    </div>

                    {/* Border Pembatas */}
                    <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[9px] mb-[17px]"></div>

                    <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">

                        {/* Nomor Telepon */}
                        <div className="flex gap-x-[17px] items-center">
                            <img src="/m_profil_telepon.svg" alt="" />
                            <h1 className="text-[14px]">
                                0812312391230
                            </h1>
                        </div>

                        {/* Email */}
                        <div className="flex gap-x-[17px] items-center">
                            <img src="/m_profil_email.svg" alt="" />
                            <h1 className="text-[14px]">
                                kenkaneki123@gmail.com
                            </h1>
                        </div>

                        {/* Lokasi */}
                        <div className="flex gap-x-[17px] items-center ml-[6px]">
                            <img src="/d_profil_location.svg" alt="" />
                            <h1 className="text-[14px]">
                                Jl. Samirono Baru VI A
                            </h1>
                        </div>
                    </div>

                    {/* Ganti Mode */}
                    <h1 className="text-[#A9A9A9] text-center font-medium text-[16px] mt-[18px]">
                        Ganti Mode
                    </h1>
                    <div className="flex justify-center gap-x-[21px]">
                        <Link href="/customer/hero">
                            <img src="/b_profil_customer.svg" alt="" />
                        </Link>
                        
                        <Link href="/merchant/signup_merchant">
                            <img src="/b_profil_merchant.svg" alt="" />
                        </Link>
                    </div>


                    {/* Button Edit Profil */}
                    <button className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[70px]
                        ">
                            <h1 className="text-white text-lg font-semibold">
                                Edit Profil
                            </h1>
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <Navbar_driver />
        </div>
    )
}
