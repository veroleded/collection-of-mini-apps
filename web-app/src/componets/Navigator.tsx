import { useContext } from "react";
import routes from "../routes/routes";
import { navContext } from "../context/navContext";

const Navigator = () => {
  const { setNewApp } = useContext(navContext);

  return (
    <div className="bg-black bg-opacity-60 w-1/5 m-0 ml-5 h-screen order-0">
      <ul className="list-item flex-col">
        <li className="">
          <div className="border-solid border-orange-500 border-4 flex justify-center h-10">
            <a href={routes.bin2Dec()} className=" text-center" onClick={() => setNewApp('bin2Dec')}>
              {'bin2Dec'}
            </a>
          </div>
        </li>
        <li>cxz</li>
      </ul>
    </div>
  );
};

export default Navigator;
