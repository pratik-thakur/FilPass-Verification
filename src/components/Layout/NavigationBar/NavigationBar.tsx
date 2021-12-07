import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navItems: { id: string; label: string; path: string }[] = [
  {
    id: "registry",
    label: "Business",
    path: "https://filpass.ph/business",
  },
  {
    id: "collaborate",
    label: "Solutions",
    path: "https://filpass.ph/solutions",
  },
  {
    id: "faq",
    label: "Individuals",
    path: "https://filpass.ph/individuals",
  },
  {
    id: "faq",
    label: "Contact",
    path: "https://filpass.ph/contact-us",
  },
  {
    id: "faq",
    label: "About Us",
    path: "https://filpass.ph/about-us",
  },
];

export const NavigationBar: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <nav className="flex-shrink-0 py-6">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6 mr-auto mb-6 md:mb-0">
            <Link href="/">
              <a className="font-montserrat">
                <img src="/static/images/filpass_logo.png" alt="FilPass" />
              </a>
            </Link>
          </div>
          {navItems.map((n, i) => (
            <div className="w-full md:w-auto md:pl-8 mb-2 md:mb-0" key={i}>
              <Link href={n.path}>
                <a className={`hover:text-black ${router.pathname === n.path ? "text-black" : "text-black"}`} style={{"font-family": "'DM Sans', sans-serif"}}>
                  {n.label}
                </a>
              </Link>
            </div>
          ))}
          <div className="w-full md:w-auto md:pl-8 mb-2 md:mb-0">
            <Link href="https://forms.office.com/pages/responsepage.aspx?id=wU7CXqDrjUGnCs-iw37qhCEk17Zt2GlJi77d_5Ejpw9UN1JJSkw5RUVWNEtaN0I2MldEMzU1S1owMC4u">
              <a className="bg-yellow-400 rounded-lg px-4 p-1 font-bold text-black hover:text-black" >Book Demo</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
