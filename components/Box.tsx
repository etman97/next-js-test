interface BoxProps {
  num: string;
  client: string;
}

export default function Box({ num, client }: BoxProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-[42px] text-white font-bold">+ {num}</h3>
      <h6 className="text-amber-500 text-[22px]">{client}</h6>
    </div>
  );
}
