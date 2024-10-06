import Link from "next/link";

type Props = {
  dir: "row" | "col";
};

const Navmenu = ({ dir }: Props) => {
  const navLinks = ["Product", "Services", "About"];

  return (
    <ul
      className={`flex justify-center font-semibold ${
        dir === "col" ? "items-start" : "items-center"
      } gap-6 flex-${dir}`}
    >
      {navLinks.map((item) => (
        <li key={item}>
          <Link
            href="#"
            className={`font-semibold ${
              item.toLowerCase() === "about"
                ? "text-secondary hover:text-green-600"
                : dir === "col"
                  ? "text-dark-gray hover:text-black"
                  : "text-white hover:text-white/70"
            }`}
          >
            {item}
          </Link>
        </li>
      ))}
      <button
        className={`rounded-full px-4 py-1.5 text-base ${
          dir === "col"
            ? "w-full bg-primary text-white hover:bg-slate-800"
            : "w-32 bg-white text-primary hover:bg-slate-200"
        }`}
      >
        Log in
      </button>
    </ul>
  );
};

export default Navmenu;
