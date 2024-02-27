import Image from "next/image";
import styles from "./styles.css";
import Logo from './images/logo-og.png';
import background from './images/cork-board.webp';
import profile from './images/profile-pic.jpg';
// import Image from 'next/image';

export default function Home() {
  return (
    // style={{backgroundImage: `url(${img})`}}
    <div className="flex w-full h-screen bg-repeat" style={{backgroundImage: `url(${background.src})`}}>
      <aside className="pg-repeat text-amber-300 w-1/4 h-full" style={{backgroundImage: `url(./cork-board)`}}>
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
              <div className="-rotate-6 max-w-[300px]">
                <Image src={profile.src} width={500} height={500} alt="Thomas Toan profile pic" className="border-8 border-slate-50"/>
                <div className="bg-slate-50 w-full h-12 text-black">
                  Thomas Toan

                </div>
              </div>

            {/* <div className="bg-red-700 w-12 h-36 rounded-s-2xl">yo</div> */}
          </div>
          <div className="z-10 navigation flex flex-col justify-start h-screen  w-12 text-black">
            {/* <br /> */}
            {/* <br /> */}
            <div className="mb-1 bg-orange-100 w-24 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2">
                yol
              </div>
            </div>

            <div className="mb-1 bg-orange-100 w-24 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2">
                yolafksjaslfkj
              </div>
            </div>

            <div className="mb-1 bg-orange-100 w-12 h-36 rounded-s-2xl flex justify-center items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2">
                resume
              </div>
            </div>
            <div className="mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-start items-center shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
              <div className="rotate-[-90deg] bg-white px-2 ml-1">
                yolewfgrb
              </div>
            </div>
            <div className="z-40 mb-1 bg-orange-100 w-14 h-36 rounded-s-2xl flex justify-center items-center inset-20 shadow-[rgba(0,0,4,0.1)_-8px_2px_5px_0px]">
              <div className="rotate-[-91deg] bg-white px-2 shadow-[rgba(0,0,4,0.1)_-1px_1px_2px_0px]">
                resume
              </div>
            </div>
          </div>
{/*  writing-mode: vertical-rl; */}

        </div>


      </aside>
      
      <main className="z-20 static bg-orange-100 rounded-s-3xl w-3/4 shadow-[rgba(0,0,5,0.2)_-3px_2px_3px_0px]">
        <div className="absolute z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 -rotate-1">
        </div>
        {/* <div className="z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 rotate-2">
            <h1>yo</h1>
        </div>
        <div className="z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-6 rotate-1">
            <h1>yo</h1>
        </div> */}
        <div className="absolute z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-8 rotate-1">
            <h1>yo</h1>
        </div>
        <div className="absolute z-20 bg-white drop-shadow-lg h-screen w-full mt-4 ml-8">
            <h1>yo</h1>
        </div>
        {/* <h3>Hello</h3> */}

      </main>
    </div>
  );
}
