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
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/cpu.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">CPU / Processor</span>
        </Link>
        <Link
          href="/motherboard"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/motherboard.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">Motherboard</span>
        </Link>
        <Link
          href="/ram"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/ram.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">RAM</span>
        </Link>
        <Link
          href="/psu"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/psu.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">Power Supply Unit</span>
        </Link>
        <Link
          href="/storage"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/storage.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">Storage</span>
        </Link>
        <Link
          href="/monitor"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/monitor.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">Monitors</span>
        </Link>
        <Link
          href="/others"
          class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
        >
          <Image src="/others.png" width={30} height={30}></Image>
          <span class="flex-1 ml-3 whitespace-nowrap">Others</span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCategories;
