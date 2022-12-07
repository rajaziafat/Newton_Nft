import RarityCard from "components/RarityCard";
import useMediaQuery from "hooks/useMediaQuery";

function Levels() {
  const isAbove1024px = useMediaQuery("(min-width:1024px)");

  return (
    <div className="py-16 md:py-100px bg-[rgba(0,0,0,.5)]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 justify-between mb-8">
          <p className="text-base xl:text-2xl text-secondary-1000 uppercase">
            NFT RARITY PER CHARACTER
          </p>

          <p className="text-right text-sm xl:text-xl text-secondary-1000 font-medium">
            1 character consists of 2500 NFTs
            <br />
            Total collection of 4 characters - 10,000 NFTs
          </p>
        </div>

        <p className="text-sm xl:text-xl font-medium text-white uppercase mb-6">
          VISUAL RARITY ACCUMULATES PER EACH LEVEL GOING UP
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[2rem] items-stretch">
          <RarityCard
            title="Level 1 - rookie"
            attribute="LOW"
            lineDirection="right"
            gap={"2rem"}
            variant={0}
            showLine={isAbove1024px ? true : false}
            qualities={[
              "Various poses",
              "Crypto icons",
              "Different gadgets",
              "Different backgrounds",
              "Different colours of armor and gadgets.",
              "Level 1 turntable. ",
            ]}
          />
          <RarityCard
            title="Level 2 - Ace"
            attribute="MED"
            attributeColor="#FCA945"
            variant={1}
            lineDirection="full"
            gap={"2rem"}
            showLine={isAbove1024px ? true : false}
            qualities={[
              "Weapons",
              "weapon colours",
              "more complexed gadgets",
              "More poses",
              "Level 2 turntable.",
            ]}
          />
          <RarityCard
            title="Level 3 - Veteran"
            attribute="HIGH"
            attributeColor="#FCA945"
            lineDirection="left"
            gap={"2rem"}
            variant={1}
            showLine={isAbove1024px ? true : false}
            qualities={[
              "Fighting poses",
              "additional props",
              "Level 3 turntable",
            ]}
          />
          <RarityCard
            title="Level 4 - legendary"
            attribute="GOD MODE"
            attributeColor="#FCA945"
            variant={2}
            showLine={isAbove1024px ? true : false}
            qualities={[
              "God mode",
              "Character defining attributes",
              "3D video",
              "Level 4 turntable.",
            ]}
          />
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-[2rem] mt-10 lg:mt-0">
          <div className="col-span-3">
            {isAbove1024px && (
              <div className="w-[2px] h-[60px] bg-white mx-auto"></div>
            )}
            <p className="max-w-[249px] mx-auto py-3 border-2 border-white text-xs xl:text-sm font-medium font-rajdhani text-center">
              Turn static images in to 3D videos by achieving level 4 in the
              game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
