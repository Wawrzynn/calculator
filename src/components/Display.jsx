const Display = ({ value }) => {
  return (
    <div className="h-40 flex flex-col">
      <span className="text-white text-4xl">{value}</span>
    </div>
  );
};

export default Display;
