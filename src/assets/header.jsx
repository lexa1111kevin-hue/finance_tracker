import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 h-auto bg-slate-900 ">
      <div className="container  items-center flex justify-between mx-auto px-4 py-2">
        <img src={logo} alt="logo" className="w-40  m-0 p-0" />

        <button className="bg-white hover:bg-gray-200 h-full px-4 py-2 m-0 rounded-lg transition">
          Sign In
        </button>
      </div>
      <div></div>
    </header>
  );
}
