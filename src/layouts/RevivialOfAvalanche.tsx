import Stripe from "components/Stripe";
import Video from "./Video";

function RevivialOfAvalanche() {
  return (
    <div className="pb-100px relative">
      <div className="pb-16 lg:py-150px flex flex-col items-center lg:block relative">
        <img
          src="images/wahmen.png"
          className="lg:absolute top-[43%] lg:-translate-y-1/2 left-[4%] max-w-[16rem] lg:max-w-none w-full lg:w-[40%] h-[90%] max-h-full object-contain mb-8 lg:mb-0"
          alt=""
        />

        <img
          src="images/back_image.png"
          className="absolute top-1/2 left-0 -translate-y-1/2 w-full -z-20 h-full object-cover lg:h-auto"
          alt=""
        />

        <div className="container flex items-center justify-center lg:justify-end">
          <div className="relative flex flex-col items-center">
            <img
              src="images/logo-secondary.svg"
              className="w-[100%] max-w-[300px] md:max-w-[400px] xl:max-w-[640px] mx-auto mb-3 lg:mb-6"
              alt=""
            />
            <p className="text-sm xl:text-xl max-w-[500px] xl:max-w-[600px]  text-white opacity-90 text-center font-light">
              Is a unique fighting game on Avalanche(AVAX) blockchain which
              involves skill and planning to play. It is a game resembling
              Tekken, Street Fighter, and Mortal Kombat. The main difference,
              most character and guild data is saved on the blockchain, and you
              can earn crypto playing it. It also has some RPG elements to it.
              When fighting other players and participating in tournaments, your
              level and rank will increase.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 lg:mb-20">
        <Stripe direction="left" />
      </div>

      <Video />

      <img
        src="images/jahanum.png"
        className="absolute top-0 left-0 object-cover w-full h-full -z-20"
        alt=""
      />
    </div>
  );
}

export default RevivialOfAvalanche;
