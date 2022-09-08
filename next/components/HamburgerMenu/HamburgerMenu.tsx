const HamburgerMenu = ({
  boxStyles,
  lineStyles,
}: {
  boxStyles: string;
  lineStyles: string;
}) => {
  return (
    <button
      className={`h-9 w-8  rounded flex flex-col justify-evenly items-center ${boxStyles} xl:hidden`}
    >
      <div className={`h-1 w-5/6 bg-black rounded-xl ${lineStyles}`}></div>
      <div className={`h-1 w-5/6 bg-black rounded-xl ${lineStyles}`}></div>
      <div className={`h-1 w-5/6 bg-black rounded-xl ${lineStyles}`}></div>
    </button>
  );
};

export default HamburgerMenu;
