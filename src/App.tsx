// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import More from "./components/more";
import Phrase from "./components/phrase";
import Time from "./components/time";
import clsx from "clsx";

const location = {
  data: {
    location: {
      geonames_id: 421186687,
      latitude: 4.635456,
      longitude: -74.08768,
      zip: "111156",
      continent: {
        code: "SA",
        name: "South America",
        name_translated: "South America",
        geonames_id: 6255150,
        wikidata_id: "Q18",
      },
      country: {
        alpha2: "CO",
        alpha3: "COL",
        calling_codes: ["+57"],
        currencies: [
          {
            symbol: "CO$",
            name: "Coombian Peso",
            symbol_native: "$",
            decimal_digits: 0,
            rounding: 0,
            code: "COP",
            name_plural: "Colombian pesos",
            type: "fiat",
          },
          {
            symbol: "COU",
            name: "Unidad de Valor Real",
            symbol_native: "COU",
            decimal_digits: 0,
            rounding: 0,
            code: "COU",
            name_plural: "Unidad de Valor Reals",
            type: "fiat",
          },
        ],
        emoji: "🇨🇴",
        ioc: "COL",
        languages: [
          {
            name: "Castilian",
            name_native: "Castellano",
          },
        ],
        name: "Colombia",
        name_translated: "Colombia",
        timezones: ["America/Bogota"],
        is_in_european_union: false,
        fips: "CO",
        geonames_id: 85632519,
        hasc_id: "CO",
        wikidata_id: "Q739",
      },
      city: {
        fips: null,
        alpha2: null,
        geonames_id: 421186687,
        hasc_id: null,
        wikidata_id: "Q2841",
        name: "Bogotá",
        name_translated: "Bogotá",
      },
      region: {
        fips: "CO34",
        alpha2: "CO-DC",
        geonames_id: 85670165,
        hasc_id: "CO.DC",
        wikidata_id: "Q2841",
        name: "Bogota D.C.",
        name_translated: "Bogota D.C.",
      },
    },
  },
};

function App() {
  const [showMore, setShowMore] = useState(false);
  const [time, setTime] = useState("");
  const [isDay, setIsDay] = useState<boolean>(false);
  // const [location, setLocation] = useState<any>({});
  const [ipData, setIpData] = useState<{ ip?: string }>({});

  useEffect(() => {
    const getIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org/?format=json");
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    getIp();
  }, []);

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();
        setTime(data.datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    getTime();
    const intervalId = setInterval(getTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const locationResponse = await fetch(
        //   `https://api.ipbase.com/v2/info?apikey=ipb_live_TGKGAOGv9DtvFagbq768HvpBdIpFUETHhrjbRQZs&ip=${ipData.ip}`
        // );
        // const locationData = await locationResponse.json();
        // setLocation(locationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (ipData.ip) fetchData();
  }, [ipData]);

  useEffect(() => {
    const hour = parseInt(time.slice(11, 13));
    if (hour > 6 && hour < 18) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }
  }, [time]);

  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center h-screen  w-screen bg-no-repeat bg-cover bg-center p-6",
        isDay
          ? "bg-day-mobile md:bg-day-tablet lg:bg-day-desktop "
          : "bg-night-mobile md:bg-night-tablet lg:bg-night-desktop"
      )}
    >
      {!showMore && <Phrase />}
      <Time
        showMore={showMore}
        setShowMore={setShowMore}
        time={time}
        isDay={isDay}
        location={location?.data.location}
      />
      <More show={showMore} />
    </div>
  );
}

export default App;
