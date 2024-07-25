import Link from "next/link";
import React from "react";
import { HiLink } from "react-icons/hi";
export function GridBackgroundDemo() {
  const year = new Date().getFullYear();
  return (
    <div className="footer  w-full dark:bg-black bg-black  dark:bg-grid-white/[0.05] bg-grid-white/[0.2]  flex items-center justify-center">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        style={{ backgroundColor: "#100817" }}
      >
        asdsadosaidjoiklsdosadi
      </div>
      <div className="content">
        <div className="head">
          Ready To Take <span>Your digital presence</span> to the next level?
        </div>
        <div className="info">
          You can contact me at any time via email and I will be able to help at
          any time, God willing
        </div>
        <Link
          href="mailto:AbdallhSabry194@gmail.com"
          className="work relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="span1 absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="span2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Show Work{" "}
            <HiLink style={{ display: "inline-block", marginLeft: "5px" }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
