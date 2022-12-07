import Chart1 from "components/Chart1";

const Points = ({ title, points }: { title: string; points: string[] }) => {
  return (
    <div className="max-w-[260px] w-full mx-auto">
      <p className="text-lg xl:text-2xl font-staatliches text-white mb-3">
        {title}
      </p>

      <div className="space-y-3">
        {points.map((point, index) => (
          <p key={index} className="text-sm xl:text-xl text-secondary-1000">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
};

function Charts() {
  return (
    <div className="py-16 lg:py-20 xl:py-100px bg-[#1C1C1C]">
      <div className="container mb-20 lg:mb-150px space-y-14 md:space-y-20">
        <Points
          title="6% buy/sell tax:"
          points={["2% Liquidity", "3% USDC reflections", "1% Marketing"]}
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-100px items-start">
          <div className="w-full min-w-full">
            <Chart1 />
          </div>
          <div className="w-full min-w-full">
            <Chart1 />
          </div>
        </div>

        <Points
          title="locking periods:"
          points={[
            "8% Team Allocation is locked for 2 years.",
            "3% Advisors allocation is locked for 2 years.",
            "5% Marketing wallet linear vesting.",
          ]}
        />
      </div>

      <div className="container">
        <h2 className="font-staatliches text-center text-xl xl:text-3xl text-white mb-10 xl:mb-16">
          Public rounds
        </h2>

        <div className="overflow-x-auto">
          <table className="bg-[#494949] rounded-xl overflow-hidden rounds-table border-collapse min-w-[800px] w-full">
            <thead>
              <tr>
                <th></th>
                <th>SEED</th>
                <th>Private sale</th>
                <th>Whitelisted presale</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-side>funds raised in dollars</td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>
              <tr>
                <td data-side>tokens allocated </td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>
              <tr>
                <td data-side>tokens price per dollar </td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>

              <tr>
                <td data-side>percentage of supply</td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>
              <tr>
                <td data-side>% of liquidity</td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>
              <tr>
                <td data-side>profit at launch</td>
                <td>$45,500</td>
                <td>$100,000</td>
                <td>$135,000</td>
                <td>$280,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Charts;
