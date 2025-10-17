import Link from "next/link";

export default function Menu() {
  return (
    <ul
      tabIndex="-1"
      className="menu dropdown-content bg-background/95 border border-borders rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skills">Skills</Link>
      </li>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
}
