import { statistics } from "@/constants/data";
import Stat from "./ui/stat";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-3 md:mb-10 lg:mb-0">
      {statistics.map((stat, index) => (
        <Stat
          key={index}
          numbers={stat.numbers}
          description={stat.description}
          className={index < 2 ? "col-span-1" : "col-span-2 md:col-span-1"}
        />
      ))}
    </div>
  );
};

export default Stats;
