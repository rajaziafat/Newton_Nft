const Point = ({ point }: { point: string }) => {
  return (
    <li className="flex space-x-2 text-sm">
      <span className="min-w-[4px] w-1 block h-1 rounded-full bg-secondary-800 mt-[.55em]"></span>
      <span className="text-secondary-800 font-medium">{point}</span>
    </li>
  );
};

const VARIANT_1 = "border-[rgba(27,146,255,.6)] bg-rarity-active";
const VARIANT_2 = "border-secondary-800 bg-rarity";
const VARIANT_3 = "border-[rgba(222,143,49,0.6)] bg-rarity-orange";

const variants = [VARIANT_1, VARIANT_2, VARIANT_3];

interface Props {
  title: string;
  attribute: "LOW" | "MED" | "HIGH" | "GOD MODE";
  qualities: string[];
  attributeColor?: "#FCA945" | "#86C5FF";
  isActive?: boolean;
  variant?: 0 | 1 | 2;
  lineDirection?: "left" | "right" | "full";
  showLine?: boolean;
  gap?: string;
}

function RarityCard({
  title,
  attributeColor = "#86C5FF",
  attribute,
  variant = 0,
  qualities,
  lineDirection,
  showLine = true,
  gap,
}: Props) {
  return (
    <div className="flex flex-col">
      <div
        className={`p-7 flex-1 flex flex-col border-1px ${variants[variant]}`}
      >
        <h1 className="text-center font-eras-demi text-sm xl:text-xl mb-4">
          {title}
        </h1>

        <ul className="space-y-1 mb-5 flex-1">
          {qualities.map((quality, index) => (
            <Point key={index} point={quality} />
          ))}
        </ul>

        <div className="text-center">
          <p className="font-rajdhani text-sm xl:text-lg text-secondary-1000">
            Stat attributes:
          </p>
          <p
            className="text-base xl:text-2xl font-bold font-rajdhani"
            style={{ color: attributeColor }}
          >
            {attribute}
          </p>
        </div>
      </div>

      {showLine && (
        <div className="h-[40px] relative">
          {lineDirection && (
            <>
              <div className="w-[2px] h-full bg-white mx-auto"></div>
              <div
                style={{
                  width:
                    lineDirection === "left" || lineDirection === "right"
                      ? `calc(50% + ${gap})`
                      : `calc(100% + ${gap})`,
                }}
                className={`absolute bottom-0 h-[2px] bg-white ${
                  lineDirection === "left" && "right-1/2"
                } ${lineDirection === "right" && "left-1/2"} ${
                  lineDirection === "full" && "left-0"
                }`}
              ></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default RarityCard;
