import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20 ">
      <div>
        <h1 className="text-4xl my-7 text-center text-gray-900">
          Featured Categories
        </h1>
        <p className="text-gray-500 md:px-5 text-xl">
          Experience computing excellence: top CPUs, motherboards & RAM for peak
          performance. Power up efficiently with PSUs & storage devices. Immerse
          in visuals with premium monitors. Elevate gaming with powerful GPUs &
          peripherals. Discover ultimate computing in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/cpu"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image alt="CPU" src="/cpu.png" width={30} height={30}></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">CPU / Processor</span>
        </Link>
        <Link
          href="/motherboard"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image
            alt="Motherboard"
            src="/motherboard.png"
            width={30}
            height={30}
          ></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">Motherboard</span>
        </Link>
        <Link
          href="/ram"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image alt="RAM" src="/ram.png" width={30} height={30}></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">RAM</span>
        </Link>
        <Link
          href="/psu"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image alt="PSU" src="/psu.png" width={30} height={30}></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">
            Power Supply Unit
          </span>
        </Link>
        <Link
          href="/storage"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image
            alt="Storage"
            src="/storage.png"
            width={30}
            height={30}
          ></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">Storage</span>
        </Link>
        <Link
          href="/monitor"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image
            alt="Monitor"
            src="/monitor.png"
            width={30}
            height={30}
          ></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">Monitors</span>
        </Link>
        <Link
          href="/others"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image alt="Others" src="/others.png" width={30} height={30}></Image>
          <span className="flex-1 ml-3 whitespace-nowrap">Others</span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCategories;
