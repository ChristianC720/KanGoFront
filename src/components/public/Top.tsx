import tropicalBg from "../../assets/images/tropical-background.jpg";
import Header from "./Header";
import * as motion from "motion/react-client";

export default function Top() {
  return (
    <div className="flex relative flex-col items-center justify-center h-[500px]  gap-8 px-12">
      <Header />
      <img
        src={tropicalBg}
        className="absolute top-1 w-full h-full object-cover blur-sm -z-10 scale-[98%]"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-6xl md:text-6xl text-center font-bold text-[#f2f6f0]"
      >
        Reserva un nuevo viaje hoy con <br />
        KanGo!
      </motion.div>
    </div>
  );
}
