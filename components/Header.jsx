
import { ThemeToggler } from "./ThemeToggler";
const Header = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const currentMonthName = monthNames[currentDate.getMonth()];

  return (
    <div className="flex items-center justify-between mx-10 border-b mt-2">
      <div className="text-2xl ">
        {" "}
        <div className="flex ">
          <h1>{currentMonthName}</h1> <p className="ml-3">{year}</p>
        </div>
      </div>
      <div className="space-x-10">
       <h1>(if you want i will make nextWeek prevWeek functionality)</h1>
      </div>
      <div>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
