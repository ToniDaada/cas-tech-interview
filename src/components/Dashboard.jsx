// app/components/Dashboard.jsx (or wherever your components live)
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-wrap gap-6 m-5 mt-6 items-stretch">
      {/* Left Card */}
      <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-xl shadow p-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 mb-1">Built by Developers</p>
          <h2 className="text-lg font-semibold">Purity UI Dashboard</h2>
          <p className="text-sm text-gray-500 mt-2">
            From simple cards, typography to complex elements, you will find the
            full documentation.
          </p>
          <a
            href="#"
            className="mt-3 inline-block text-sm font-medium text-blue-500 hover:underline"
          >
            Read more →
          </a>
        </div>
        <Image
          src="/chakra-logo.png" // ensure this is placed in /public/
          alt="Chakra Logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>

      {/* Right Card */}
      <div className="w-full md:w-[calc(50%-0.75rem)] relative rounded-xl overflow-hidden shadow">
        <Image
          src="/team-image.jpg" // place a relevant image in /public/
          alt="Team Working"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end text-white rounded-xl">
          <h2 className="text-lg font-semibold">Work with the Rockets</h2>
          <p className="text-sm text-gray-200 mt-2">
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who takes the opportunity first.
          </p>
          <a
            href="#"
            className="mt-3 inline-block text-sm font-medium text-white underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
