import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[3fr_4fr] gap-8 sm:gap-20 border border-primary-800 py-6 sm:py-3 px-6 sm:px-10 mb-12 sm:mb-24">
      <div className="relative h-64 sm:h-auto sm:scale-[1.15] sm:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-4xl sm:text-7xl mb-5 bg-primary-950 p-4 sm:p-6 sm:pb-1 sm:translate-x-[-254px] sm:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-3 sm:gap-4 mb-5 sm:mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600 shrink-0" />
            <span className="text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600 shrink-0" />
            <span className="text-base sm:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600 shrink-0" />
            <span className="text-base sm:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
