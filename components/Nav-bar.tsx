import Container from "./Container";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="fixed w-full top-0">
      <Container>
        <div className="flex justify-around h-full">
          <div>
            <Link className="font-semibold text-2xl" href={'/'} title="TheForce">TheForce</Link>
          </div>

          <nav>
            <ul className="flex gap-3 h-full items-center flex-col sm:flex-row sm:bg-black">
              <li>
                <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Home</Link>
              </li>
              <li>
                <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>About</Link>
              </li>
              <li>
                <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Donate</Link>
              </li>
              <li>
                <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Account</Link>
              </li>
              <li>
                <Link className="hover:text-slate-500 hover:underline transition duration-500 underline-offset-4" href={"/"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
