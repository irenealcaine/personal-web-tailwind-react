const Button = ({ href, text, style, className }) => {
  let styles = "";
  if (style === "primary") {
    styles =
      "text-white hover:text-violet-900 bg-violet-900 hover:bg-white border-white hover:border-violet-900";
  } else {
    styles =
      "text-violet-900 hover:text-white bg-white hover:bg-violet-900 border-violet-900 hover:border-white";
  }
  return (
    <a
      href={href}
      className={`${styles} font-caveat text-xl px-5 py-1 rounded-lg border-2 transition-all duration-500 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
