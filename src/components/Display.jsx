const Display = ({ value }) => {
  return (
    <div className="h-60 w-full rounded-3xl mb-5 p-5 bg-green">
      <span className="text-black text-4xl">{value}</span>
    </div>
  );
};

export default Display;
