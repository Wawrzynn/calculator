const Display = ({ value }) => {
  return (
    <div className="flex justify-end items-end h-60 w-full rounded-3xl mb-5 p-5 bg-green">
      <span className="text-black font-sans text-5xl">{value}</span>
    </div>
  );
};

export default Display;
