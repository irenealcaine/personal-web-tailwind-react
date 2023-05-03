const Button = ({ href, text, design, className }) => {
  let designs = "";
  if (design === "primary") {
    designs =
      "text-white hover:text-violet-900 bg-violet-900 hover:bg-white border-violet-900 ";
  } else {
    designs =
      "text-violet-900 hover:text-white bg-white hover:bg-violet-900 border-white";
  }
  return (
    <a
      href={href}
      className={`${designs} shadow inline-block font-caveat text-xl text-center px-6 py-1 border-2 rounded-lg transition-all duration-500 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
