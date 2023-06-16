import Header_w_notif from "@/components/Merchant/Header_w_notif";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import Image from "next/image";
import Link from "next/link";

type User = {
  _id: string;
  nama: string;
  email: string;
  phone: number | null;
  imgURL: string;
  alamat: string | null;
};

type UserProps = {
  users: User[];
};

export default function Profil_sel({ users }: UserProps) {
  const user: User[] = users.filter(
    (user: User) => user.nama === "Billy Fahd Qodama"
  );
  const imgURL: string = user[0].imgURL;
  return (
    <div className="font-poppins bg-[#E89005] max-h-screen">
      <Header_w_notif>Ahmad Santoso</Header_w_notif>

      <div className="mt-[254px] bg-white">
        {/* Content */}
        <div
          className="w-[294px] h-[585px] -translate-y-[196px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative"
        >
          {/* Logout Button */}
          <button className="absolute right-0 translate-x-6 -translate-y-6">
            <img src="/m_profil_logout.svg" alt="" />
          </button>

          {/* Profile Picture */}
          <Image
            src={imgURL}
            className="mx-auto pt-[17px] rounded-full border border-gray-100 shadow-sm"
            alt="Profile Pic"
            width={130}
            height={130}
          />

          {/* Nama*/}
          <div className="flex flex-col justify-center items-center mt-[17px]">
            {/* Nama Customer */}
            <h1 className="font-semibold text-[21px]">{user[0].nama}</h1>
          </div>

          {/* Border Pembatas */}
          <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[16px] mb-[45px]"></div>

          <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">
            {/* Nomor Telepon */}
            <div className="flex gap-x-[17px] items-center">
              <img src="/m_profil_telepon.svg" alt="" />
              <h1 className="text-[14px]">
                {user[0].phone == null ? "Belum diisi" : user[0].phone}
              </h1>
            </div>

            {/* Email */}
            <div className="flex gap-x-[17px] items-center">
              <img src="/m_profil_email.svg" alt="" />
              <h1 className="text-[14px]">{user[0].email}</h1>
            </div>

            {/* Lokasi */}
            <div className="flex gap-x-[17px] items-center ml-[6px]">
              <img src="/b_profil_alamat.svg" alt="" />
              <h1 className="text-[14px]">
                {user[0].alamat == null ? "Belum diisi" : user[0].alamat}
              </h1>
            </div>
          </div>

          {/* Button Edit Profil */}
          <Link
            href="/customer/profil_update"
            className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[70px]
                            "
          >
            <h1 className="text-white text-lg font-semibold">Edit Profil</h1>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <C_Navbar />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}