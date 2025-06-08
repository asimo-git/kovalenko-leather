import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary  py-4 shadow-md">
      <div className="mx-auto flex justify-between items-center px-4">
        <Link href="/" className="mr-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="logo" width={60} height={60}></Image>
            <h1 className="title">
              Мастерская<br></br> Павла Коваленко
            </h1>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
