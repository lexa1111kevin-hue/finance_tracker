import logo from "../img/logo.png";

export default function Header() {
  return (
    <header class="sticky top-0 h-auto bg-slate-900 ">
      <div className="container mx-auto px-4 py-2">
        <img src={logo} alt="logo" className="w-40  m-0 p-0" />
      </div>
    </header>
  );
}
