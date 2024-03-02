"use client"
import {useState, useEffect} from "react"
import Image from "next/image";
import background from './images/cork-board.webp';
import profile from './images/profile-pic.jpg';
import profileSm from './images/profile-pic-sm.jpg';
import Resume from './components/Resume';
import { Nanum_Pen_Script } from "@next/font/google";

const nanum_pen_script = Nanum_Pen_Script({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [activeTab, setActiveTab] = useState("resume")
  const [collapseSidebar, setCollapseSidebar] = useState(false)

  function handleTabClick(tab:any) {
    setActiveTab(tab)
  }

  return (
    // style={{backgroundImage: `url(${img})`}}
    <div className="z-0 flex flex-col w-full bg-repeat" style={{backgroundImage: `url(${background.src})`}}>
      <button onClick={() => {setCollapseSidebar(!collapseSidebar)}} className="z-20 absolute top-[0px] left-0 w-[70px] h-[45px] text-black flex flex-row shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px] -rotate-1">
        <div className="h-[45px] w-[15px] opacity-65 bg-indigo-50"></div>
        <div className="h-[45px] w-[55px] opacity-90 bg-yellow-300 flex justify-center items-center">
          {collapseSidebar? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2.15} stroke="#00078d" fill="purple"
            fill-opacity="0.1" stroke-opacity="0.9" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2.15} stroke="#00078d" fill="purple"
              fill-opacity="0.1" stroke-opacity="0.9" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          }
        </div>

                  {/* <div className="absolute w-full top-[35%] font-serif text-center my-auto ">
                    <div><span className="text-[14px] engraved">T</span><span className="text-xs engraved">HOMAS </span><span className="text-[14px] engraved">TOAN</span><span className="text-xs"></span></div>
                    <div className="text-[10px] leading-3 engraved">SOFTWARE ENGINEER</div>
                  </div>
                  <div className="absolute flex w-full justify-center bottom-[5%] text-[8px] font-serif engraved2">San Francisco Bay Area • Toaney@gmail.com</div> */}
      </button>



      <div className="flex">
        <aside className={`${collapseSidebar === true ? "w-[80px]" : "w-1/4" } pg-repeat`} style={{backgroundImage: `url(./cork-board)`}}>
          <div className="navigation-container mt-2 flex flex-row content-end justify-end">
            <div className="navigation flex flex-col w-[calc(100%_-_12px)] ">
                <br />
                <div className="z-10 -rotate-6 max-w-[300px] shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
                  <Image src={profile.src} width={500} height={500} alt="Thomas Toan profile pic" className="-z-10 max-w-[300px] max-h-[300px] border-t-[18px] border-x-[14px] rounded-t-sm border-slate-50"/>
                  <div className="bg-slate-50 w-[300px] h-16 rounded-b-sm">
                    <span className="label-maker mt-2 ml-[10%] tracking-tighter"> Thomas Toan</span>
                  </div>
                </div>
                {/* mini polaroid profile pic */}
                {/* <div className="-rotate-6 max-w-[150px] max-h-[240px] shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_2px]">
                  <Image src={profileSm.src} width={325} height={400} alt="Thomas Toan profile pic" className="max-w-[150px] max-h-[240px] border-t-[16px] border-x-[12px] rounded-t-sm border-slate-50 shadow-[inset 0 5px 4px 0 rgba(4 0 0 / 0.25)]"/>
                  <div className="bg-slate-50 w-full h-12 rounded-b-sm text-black">
                       Thomas Toan
                  </div>
                </div> */}
                <div className="z-10 ml-2 relative bg-sky-50 w-[290px] h-[165px] text-black shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_2px] rotate-1">
                  <div className="absolute text-[10px] top-[5%] left-[5%] font-serif engraved2">+1 415 994 1694</div>
                  <div className="absolute w-full top-[35%] font-serif text-center my-auto ">
                    <div><span className="text-[14px] engraved">T</span><span className="text-xs engraved">HOMAS </span><span className="text-[14px] engraved">TOAN</span><span className="text-xs"></span></div>
                    <div className="text-[10px] leading-3 engraved">SOFTWARE ENGINEER</div>
                  </div>
                  <div className="absolute flex w-full justify-center bottom-[5%] text-[8px] font-serif engraved2">San Francisco Bay Area • Toaney@gmail.com</div>
                </div>
                {/* yellow post-it */}
                <div className="ml-2 mt-16 relative bg-yellow-50 w-[280px] h-[280px] text-[#00078d] shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_2px] -rotate-1 font-nanum-pen-script">
                  <div className="ml-10 mt-10 text-2xl rotate-1">
                    Links:
                    <ul className="ml-10">
                      <li><a href="https://www.linkedin.com/in/thomas-toan/" target="_blank">LinkedIn</a></li>
                      <li><a href="https://github.com/toaney" target="_blank">GitHub</a></li>
                      <li><a href="https://www.behance.net/toaney" target="_blank">Behance</a></li>
                    </ul>
                  </div>
                </div>
                {/* end yellow post-it */}
            </div>
            {/* Navigation Tabs */}
            <div className="navigation flex flex-col justify-start w-11 text-black">
              <button onClick={() => {handleTabClick("1")}} className={`${activeTab === "1" ? "z-30 shadow-[rgba(0,0,5,0.4)_-10px_0px_11px_-5px]" : "z-10 shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]"} mb-1 bg-orange-100 w-16 h-36 rounded-s-2xl flex justify-start items-center `}>
                <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  yol
                </div>
              </button>
              <button onClick={() => {handleTabClick("2")}} className={`${activeTab === "2" ? "z-30 shadow-[rgba(0,0,5,0.4)_-10px_0px_11px_-5px]" : "z-10 shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]"} mb-1 pr-2 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center `}>
                <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  code
                </div>
              </button>
              {/* <button onClick={() => {handleTabClick("resume")}} className={`${activeTab === "resume" ? "z-30 shadow-[rgba(0,0,5,0.3)_-15px_0px_6px_2px]" : "z-10"} mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]`}>
                <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  resume
                </div>
              </button> */}
              <button onClick={() => {handleTabClick("resume")}} className={`${activeTab === "resume" ? "z-30 shadow-[rgba(0,0,5,0.4)_-11px_0px_10px_-5px]" : "z-10"} mb-1 bg-orange-100 w-16 h-36 rounded-s-2xl flex justify-center items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]`}>
                <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  resume
                </div>
              </button>
              <button onClick={() => {handleTabClick("4")}} className={`${activeTab === "4" ? "z-30 shadow-[rgba(0,0,5,0.4)_-10px_0px_11px_-5px]" : "z-10"} mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]`}>
                <div className="rotate-[-90deg] bg-white px-2 ml-1 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  yolewfgrb
                </div>
              </button>
              <button onClick={() => {handleTabClick("5")}} className={`${activeTab === "5" ? "z-30 shadow-[rgba(0,0,5,0.4)_-10px_0px_11px_-5px]" : "z-10"} mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center inset-20 shadow-[rgba(0,0,4,0.1)_-8px_2px_5px_0px]`}>
                <div className="rotate-[-91deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                  design
                </div>
              </button>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className={`${collapseSidebar === true ? "w-full" : "w-3/4" } static z-10 mt-2 mb-2 pb-18  bg-orange-100 rounded-s-3xl rounded-e-md shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]`}>
          {/* decorative pages */}
          {/* <div className="z-20 absolute bg-white drop-shadow-lg h-screen w-8/12 mt-4 ml-6 -rotate-[.5px]">
          </div>
          <div className="z-20 absolute bg-white drop-shadow-lg h-screen mt-6 ml-6 rotate-1">
          </div> */}
          {/* end decorative pages */}
          <div className="z-30 max-w-full">
            <Resume/>
          </div>


        </main>

      </div>
      <br/>
      {/* <body className={nanum_pen_script.className}>{children}</body> */}
      <div className="flex mb-5 text-2xl text-[#00078d] justify-center font-nanum-pen-script">
        © {new Date().getFullYear()} Thomas Toan
      </div>
    </div>
  );
}
