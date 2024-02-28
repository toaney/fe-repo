import Image from "next/image";
import styles from "./styles.css";
import Logo from './images/logo-og.png';
import background from './images/cork-board.webp';
import profile from './images/profile-pic.jpg';
import profileSm from './images/profile-pic-sm.jpg';
// import Image from 'next/image';

export default function Home() {
  return (
    // style={{backgroundImage: `url(${img})`}}
    <div className="z-0 flex w-full h-screen bg-repeat" style={{backgroundImage: `url(${background.src})`}}>
      <aside className=" pg-repeat text-amber-300 w-1/4 h-full" style={{backgroundImage: `url(./cork-board)`}}>
        {/* <h4>Navigation</h4> */}
        <div className="navigation-container flex flex-row content-end justify-end">
          <div className="navigation flex flex-col w-[calc(100%_-_12px)] ">
            {/* <div className="flex flex-column">
              <div>
                hello
              </div>
              <div>
                there
              </div>
            </div> */}
{/* 
              <div className="">
                Thomas Toan
              </div> */}
              <br />


              <div className="z-10 -rotate-6 max-w-[300px] shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
                <Image src={profile.src} width={500} height={500} alt="Thomas Toan profile pic" className="-z-10 max-w-[300px] max-h-[300px] border-t-[18px] border-x-[14px] rounded-t-sm border-slate-50"/>
                <div className="bg-slate-50 w-[300px] h-16 rounded-b-sm">
                  <span className="label-maker mt-2 ml-[10%] tracking-tighter"> Thomas Toan</span>
                </div>
              </div>




              {/* <div className="-rotate-6 max-w-[150px] max-h-[240px] shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_2px]">
                <Image src={profileSm.src} width={325} height={400} alt="Thomas Toan profile pic" className="max-w-[150px] max-h-[240px] border-t-[16px] border-x-[12px] rounded-t-sm border-slate-50 shadow-[inset 0 5px 4px 0 rgba(4 0 0 / 0.25)]"/>
                <div className="bg-slate-50 w-full h-12 rounded-b-sm text-black">
                      Thomas Toan
                </div>
              </div> */}



              <div className="z-10 relative bg-sky-50 w-[300px] h-[175px] text-black shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_2px] rotate-1">
                <div className="absolute text-[10px] top-[5%] left-[5%] font-serif engraved2">+1 415 994 1694</div>
                {/* <div className="absolute right-0"></div> */}
                <div className="absolute w-full top-[35%]  font-serif text-center my-auto ">
                  <div><span className="text-[14px] engraved">T</span><span className="text-xs engraved">HOMAS </span><span className="text-[14px] engraved">TOAN</span><span className="text-xs"></span></div>
                  <div className="text-[10px] leading-3 engraved">SOFTWARE ENGINEER</div>
                </div>
                <div className="absolute flex w-full justify-center bottom-[5%] text-[8px] font-serif engraved2">San Francisco Bay Area • Toaney@gmail.com</div>
              </div>

            {/* <div className="bg-red-700 w-12 h-36 rounded-s-2xl">yo</div> */}
          </div>
          <div className="navigation flex flex-col justify-start h-screen  w-12 text-black">
            {/* <br /> */}
            {/* <br /> */}
            <div className="z-10 mb-1 bg-orange-100 w-24 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                yol
              </div>
            </div>

            <div className="z-10 mb-1 bg-orange-100 w-24 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                yolafksjaslfkj
              </div>
            </div>

            <div className="z-30 mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                resume
              </div>
            </div>
            <div className="z-10 mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2 ml-1 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                yolewfgrb
              </div>
            </div>
            <div className="z-10 mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center inset-20 shadow-[rgba(0,0,4,0.1)_-8px_2px_5px_0px]">
              <div className="rotate-[-91deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px] blur-[.25px]">
                resume
              </div>
            </div>
          </div>
{/*  writing-mode: vertical-rl; */}

        </div>


      </aside>
      
      <main className="z-10 static bg-orange-100 rounded-s-3xl w-3/4 shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
        <div className="absolute bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 -rotate-[.5px]">
        </div>
        {/* <div className="z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 rotate-2">
            <h1>yo</h1>
        </div>
        <div className="z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 rotate-1">
            <h1>yo</h1>
        </div> */}
        <div className="absolute bg-white drop-shadow-lg h-screen w-full mt-6 ml-6 rotate-1">
            <h1>yo</h1>
        </div>
        <div className="absolute bg-white drop-shadow-lg h-screen w-full mt-4 ml-7">
            <h1>yo</h1>
        </div>
        {/* <h3>Hello</h3> */}

      </main>
    </div>
  );
}
