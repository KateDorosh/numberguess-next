import Header from "../../components/layouts/Header";
import StaticBody from "../../components/layouts/StaticBody";
import MainField from "../../components/game/MainField";

const MathWorldleUnlimited = () => {
  const challengeLink = "true";
  return (
    <div>
      <Header challengeLink={challengeLink} />
      <MainField challengeLink={challengeLink} />
      <StaticBody />
    </div>
  );
};

export default MathWorldleUnlimited;
