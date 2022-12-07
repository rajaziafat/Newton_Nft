import Partners from "components/Partners";
import Team from "./Team";

function TeamAndPartners() {
  return (
    <div className="relative">
      <img
        src="images/coin-bg.png"
        className="absolute bottom-0 left-0 w-full object-cover -z-20 h-full"
        alt=""
      />

      <div className="py-16 lg:py-20 xl:py-100px bg-secondary-100 z-20">
        <div className="container">
          <div className="mb-20 xl:mb-100px">
            <Partners />
          </div>
          <Team />
        </div>
      </div>
    </div>
  );
}

export default TeamAndPartners;
