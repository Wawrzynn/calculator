const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-white font-bold text-xl  p-8 bg-light-grey rounded-3xl border-2 border-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
