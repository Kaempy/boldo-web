"use client";

import useNavBg from "@src/hooks/useNavBg";
import { CloseIcon, MenuIcon } from "@src/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.png";
import Navmenu from "./Navmenu";
import Portal from "./Portal";

const Navbar = () => {
  const backgroundTransparent = useNavBg();
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-10 mx-auto flex w-dvw items-center justify-between px-6 transition-all ease-out lg:w-screen ${
        backgroundTransparent <= 0 ? "bg-transparent" : "bg-primary"
      } ${backgroundTransparent <= 0 ? "shadow-none" : "shadow-xl"} `}
    >
      <nav className="mx-auto flex h-[70px] w-full max-w-[1560px] items-center justify-between">
        <div>
          <Link href="/">
            <Image
              placeholder="blur"
              src={logo}
              alt="Boldo"
              width={162}
              height={42}
              className="h-[42px] w-[162px] object-contain"
            />
          </Link>
        </div>
        <div className="relative hidden lg:block">
          <Navmenu dir="row" />
        </div>
        <div className="relative block lg:hidden">
          <MenuIcon
            onClick={showDrawer}
            style={{ fontSize: "21px" }}
            fill="white"
          />
        </div>
        {open && (
          <Portal onClose={onClose}>
            <div
              className="absolute right-0 top-0 h-full w-3/5 gap-4 bg-[#FFFCFA] p-4 pt-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-[90%]">
                <Navmenu dir="col" />
              </div>
              <div onClick={onClose} className="absolute right-4 top-4 h-max">
                <CloseIcon />
              </div>
            </div>
          </Portal>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
