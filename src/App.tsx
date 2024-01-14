// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import More from "./components/more";
import Phrase from "./components/phrase";
import Time from "./components/time";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
    fetch(`http://worldtimeapi.org/api/ip/${ip}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="flex flex-col justify-between items-center h-screen  w-screen">
      {!showMore && <Phrase />}
      <Time showMore={showMore} setShowMore={setShowMore} />
      <More show={showMore} />
    </div>
  );
}

export default App;
