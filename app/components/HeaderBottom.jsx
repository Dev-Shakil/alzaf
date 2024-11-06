import Image from 'next/image'
import React from 'react'

const HeaderBottom = () => {
  return (
    <div className="bg-white shadow-sm ">
    <div className="flex bg-white py-3 justify-between items-center px-4 py-1 w-[75%] gap-x-6 mx-auto">
        <Image src="/alzaf_logo.png" alt="logo" height="30" width="100" />
        <input className="bg-[#EFF0F5] w-[50%] py-2 rounded-xl" />
        <div className="flex gap-x-5 items-center">
            <p className="px-4 py-2 rounded-xl bg-[#EFF0F5]">p</p>
            <p className="px-4 py-2 rounded-xl bg-[#EFF0F5]">p</p>
            <p className="px-4 py-2 rounded-xl bg-[#EFF0F5]">p</p>
        </div>
        <Image src="/cloud.png" alt="logo" height="50" width="170" />
    </div>
    </div>
  )
}

export default HeaderBottom