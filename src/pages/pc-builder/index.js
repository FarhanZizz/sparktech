import RootLayout from "@/Components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const selectedComponents = useSelector((state) => ({
    cpu: state["CPU / Processor"],
    motherboard: state["Motherboard"],
    ram: state["RAM"],
    storage: state["Storage Device"],
    psu: state["Power Supply Unit"],
    monitor: state["Monitor"],
  }));

  const isAnyComponentEmpty = Object.values(selectedComponents).some(
    (component) => component === null
  );

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h1 className="text-2xl md:text-4xl my-10 text-center text-gray-900">
          PC Builder
        </h1>
        <button
          className="btn btn-outline btn-primary btn-sm md:btn-md"
          disabled={isAnyComponentEmpty}
          onClick={() => {
            alert("Build Completed");
          }}
        >
          Complete Build
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs sm:table-sm md:table-md lg:table-lg ">
          <thead>
            <tr>
              <th>Component Name</th>
              <th>Selected Component </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask w-10 h-10">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png"
                        alt="Cpu Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">CPU / Processor</div>
                  </div>
                </div>
              </td>
              <td>{selectedComponents.cpu?.["Product Name"] || "None"}</td>

              <th>
                <Link href="/pc-builder/cpu" className="btn btn-ghost btn-xs">
                  Choose
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask w-10 h-10">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png"
                        alt="Motherboard Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">MotherBoard</div>
                  </div>
                </div>
              </td>
              <td>
                {selectedComponents.motherboard?.["Product Name"] || "None"}
              </td>

              <th>
                <Link
                  href="/pc-builder/motherboard"
                  className="btn btn-ghost btn-xs"
                >
                  Choose
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask w-10 h-10">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png"
                        alt="Ram Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">RAM</div>
                  </div>
                </div>
              </td>
              <td>{selectedComponents.ram?.["Product Name"] || "None"}</td>
              <th>
                <Link href="/pc-builder/ram" className="btn btn-ghost btn-xs">
                  Choose
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/SSD-48x48_1686989668.png"
                        alt="Storage Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Storage Device</div>
                  </div>
                </div>
              </td>
              <td>{selectedComponents.storage?.["Product Name"] || "None"}</td>

              <th>
                <Link
                  href="/pc-builder/storage"
                  className="btn btn-ghost btn-xs"
                >
                  Choose
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png"
                        alt="PSU Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Power Supply</div>
                  </div>
                </div>
              </td>
              <td>{selectedComponents.psu?.["Product Name"] || "None"}</td>

              <th>
                <Link href="/pc-builder/psu" className="btn btn-ghost btn-xs">
                  Choose
                </Link>
              </th>
            </tr>
            <tr>
              <td>
                <div className="flex items-center  space-x-3">
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <Image
                        src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png"
                        alt="Monitor Image"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Monitor</div>
                  </div>
                </div>
              </td>
              <td>{selectedComponents.monitor?.["Product Name"] || "None"}</td>

              <th>
                <Link
                  href="/pc-builder/monitor"
                  className="btn btn-ghost btn-xs"
                >
                  Choose
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
