interface Props {
  img: string;
  title: string;
  designation?: string;
  subtitle?: string;
}

function TeamCard({ img, designation, subtitle, title }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img src={img} className="w-full mb-5" alt="" />

      <p className="text-xs font-staatliches text-white mb-1 text-center">
        {title}
      </p>
      {designation && (
        <p className="text-xs text-white text-center mb-1">{designation}</p>
      )}
      {subtitle && <p className="text-xs text-white text-center">{subtitle}</p>}
    </div>
  );
}

export default TeamCard;
