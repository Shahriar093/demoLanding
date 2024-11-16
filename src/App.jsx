import CardS from "./components/Cards";
import Demo from "./components/Demo";
import Dropdown from "./components/Dropdown";
import Header from "./components/header";
import Highlights from "./components/Highlights";
import OurServices from "./components/OurServices";
import { motion } from "framer-motion";
export default function App() {
  return (
    <div className="w-full bg-gray-400">
      <div className="sticky top-2 z-10">
        <Header />
      </div>
      <div className="flex justify-center">
        <Highlights />
      </div>
      <div className="flex flex-col justify-center">
        <OurServices />
        <CardS />
        <Demo />
      </div>
    </div>
  );
}
