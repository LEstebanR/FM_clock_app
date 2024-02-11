import { FC, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

type TimeProps = {
  showMore: boolean;
  setShowMore: (show: boolean) => void;
  time: string;
  isDay: boolean;
  location: {
    city: {
      name: string;
    };
    country: {
      alpha2: string;
    };
  };
};

const Time: FC<TimeProps> = ({
  showMore,
  setShowMore,
  time,
  isDay,
  location,
}) => {
  const date = new Date(time);
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full flex flex-col gap-4 md:mb-24 md:ml-8 lg:ml-24">
        <span className="flex gap-2">
          {isDay ? (
            <SunIcon className="text-white h-6 w-6" />
          ) : (
            <MoonIcon className="text-white h-6   w-6" />
          )}
          <span className="text-gray-300 uppercase flex font-thin md:text-2xl">
            <p>{`goog ${isDay ? "morning" : "evening"}`}</p>
            <p className="hidden md:block ">, it's currently</p>
          </span>
        </span>
        <p className="text-white text-6xl md:text-9xl">
          {date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
        <p className="text-white uppercase md:text-xl">
          in {location.city.name}, {location.country.alpha2}
        </p>
      </div>
      <Switch
        checked={showMore}
        onChange={() => setShowMore(!showMore)}
        as={Fragment}
      >
        {({ checked }) => (
          /* Use the `checked` state to conditionally style the button. */
          <button
            className={`${
              checked ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                checked ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
    </div>
  );
};

export default Time;
