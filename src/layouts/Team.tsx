import TeamCard from "components/TeamCard";
import React from "react";

function Team() {
  return (
    <div className="py-10 px-8 sm:px-12 lg:px-20 bg-[rgba(0,0,0,.6)] shadow-[0_0_16px_rgba(0,0,0,.6)]">
      <h1 className="mb-12 text-center text-xl xl:text-3xl font-staatliches">
        CORE TEAM
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-5 md:gap-x-8">
        <TeamCard
          img="images/member-1.png"
          title="Aurimas Barauskas"
          designation="Project CEO,"
          subtitle="Founder of Newton Mint Labs and ROA "
        />{" "}
        <TeamCard
          img="images/member-2.png"
          title="Julius Jonca"
          designation="Project Co-founder and Investor"
        />
        <TeamCard
          img="images/member-3.png"
          title="Edgaras Pokrovinas"
          designation="Project CCO, Community Manager, Visual Designer"
        />
        <TeamCard
          img="images/member-4.png"
          title="Eduardo Jaimes"
          designation="Project art director, 3D designer"
          subtitle="Concept Artist"
        />
        <TeamCard
          img="images/member-5.png"
          title="Christian Martinez "
          designation="Project CTO, Blockchain & Web3 Developer | DeFi & NFT Entrepreneur"
        />
        <TeamCard
          img="images/member-6.png"
          title="Rupraj Lagnajeet Mohanty"
          designation="Project CBO, head of IT Infrastructure, AWS Certified Professional  Architect"
        />
      </div>
    </div>
  );
}

export default Team;
