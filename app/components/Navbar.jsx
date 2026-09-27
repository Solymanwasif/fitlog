"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitlog } from "../context/FitlogContext";

export default function Navbar(){

  const pathname = usePathname();

  const {plan,saved} = useFitlog();

  const [open,setOpen] = useState(false);

  return(

    <nav className="bg-black text-white px-6 py-5">

      <div className="highest-w-7xl mx-auto flex items-center justify-between">

        <Link

          href="/"

          className="flex items-center gap-2"

        >

          <img

            src="/logo.png"

            alt="Fitlog logo"

            className="w-7 h-7"

          />

          <span className="text-2xl font-bold tracking-wider">

            FITLOG

          </span>

        </Link>

        <div className="hidden md:flex gap-10">

          <Link

            href="/"

            className={

              pathname === "/"

              ?

              "text-[#ccff00]"

              :

              "text-gray-400"

            }

          >

            Workout

          </Link>

          <Link

            href="/my-plan"

            className={

              pathname === "/my-plan"

              ?

              "text-[#ccff00]"

              :

              "text-gray-400"

            }

          >

            My Plan

          </Link>

        </div>

        <div className="flex items-center gap-3">

          <Link

            href="/my-plan"

            className="bg-[#ccff00] text-black px-4 py-2 rounded-full text-sm font-bold"

          >

            Plan {plan.length}

          </Link>

          <Link

            href="/my-plan"

            className="border border-white px-4 py-2 rounded-full text-sm"

          >

            Saved {saved.length}

          </Link>

          <button

            onClick={()=>setOpen(!open)}

            className="md:hidden text-2xl"

          >

            ☰

          </button>

        </div>

      </div>

      {

        open &&

        <div className="md:hidden mt-5 flex flex-col gap-5">

          <Link

            href="/"

            onClick={()=>setOpen(false)}

            className={

              pathname === "/"

              ?

              "text-[#ccff00]"

              :

              "text-gray-400"

            }

          >

            Workout

          </Link>

          <Link

            href="/my-plan"

            onClick={()=>setOpen(false)}

            className={

              pathname === "/my-plan"

              ?

              "text-[#ccff00]"

              :

              "text-gray-400"

            }

          >

            My Plan

          </Link>

        </div>

      }

    </nav>

  );

}