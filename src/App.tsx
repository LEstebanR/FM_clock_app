// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import More from "./components/more";
import Phrase from "./components/phrase";
import Time from "./components/time";
import clsx from "clsx";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [time, setTime] = useState("");
  const [isDay, setIsDay] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org/?format=json");
        const ipData = await ipResponse.json();
        const timeResponse = await fetch(
          `http://worldtimeapi.org/api/ip/${ipData.ip}`
        );
        const timeData = await timeResponse.json();
        setTime(timeData.datetime);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      <Time showMore={showMore} setShowMore={setShowMore} time={time} />
      <More show={showMore} />
    </div>
  );
}

export default App;
