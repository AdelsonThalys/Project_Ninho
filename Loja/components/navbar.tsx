import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import logo from "../app/favicon.png";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container >
        <div className="flex items-center gap-5 px-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="a" width={100} height={100} className="flex"  ></Image>
          </Link>
          <p>O equipamento que você precisa para a segurança da sua obra</p>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-tra px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
            placeholder="O que você procura"
            value="">

          </input>
          <NavbarActions />
        </div>

        <div className="flex ml-28 items-center pb-6">




          <MainNav data={categories} />

        </div>
        <div className="h-10 bg-gradient-to-t from-bgcolor to-white"></div>
      </Container>
    </div>
  );
};

export default Navbar;
