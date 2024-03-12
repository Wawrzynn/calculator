const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-white text-2xl font-sans p-8 shadow-white shadow-sm rounded-3xl ${className} hover:bg-opacity-70 active:shadow-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
