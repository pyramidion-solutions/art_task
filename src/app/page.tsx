import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { CustomButton } from '@/components/button';
import { CanapesCard } from '@/components/canapesCard';

const inter = Inter({ subsets: ['latin'] });
declare module '*.png';

const Vitamincanape = [
  {
    name: 'Vitamin A',
    author: 'AIMSIR Studio',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/cap1.png',
  },
  {
    name: 'Vitamin B',
    author: 'AIMSIR Studio',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/cap1.png',
  },
  {
    name: 'Vitamin C',
    author: 'AIMSIR Studio',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/cap1.png',
  },
  {
    name: 'Vitamin D',
    author: 'AIMSIR Studio',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/cap1.png',
  },
];

const DigitalCanapes = [
  {
    name: 'Ovocence',
    author: 'Luana Thomas',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Canapé#1',
    author: 'Jérémy Hervo',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Canapé#2',
    author: 'Jérémy Hervo',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Canapé#3',
    author: 'Jérémy Hervo',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
];

const AdamG = [
  {
    name: 'Anglerfish 2019',
    author: 'Adam G',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Chris-Crossing',
    author: 'Adam G',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Crowbar 2019',
    author: 'Adam G',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
  {
    name: 'Desert Session ...',
    author: 'Adam G',
    chain: 'TBD ETH',
    waitlist: true,
    imgSrc: '/digicap1.png',
  },
];

const news = [
  {
    category: 'art',
    name: 'DIGITAL CANAPES',
    waitlist: false,
    date: '2021-10-11',
    imgSrc: '/cap1.png',
  },
  {
    category: 'artwork, digital canapes',
    name: 'Crypto Canapés Art Submission',
    waitlist: false,
    imgSrc: '/digicap1.png',
    date: '2021-10-25',
  },
];

export default function Home() {
  return (
    <div>
      <div className="max-w-[1400px] m-auto">
        <div className="md:ml-28 md:mr-28 ml-10 mr-10 pt-[20px] mb-8">
          <div className="grid align-center justify-between lg:grid-cols-[200px_minmax(400px,_1fr)] grid-cols-1 gap-6">
            <div className="inline-flex align-center items-center justify-start">
              <img
                src="/artcryption_logo.png"
                alt="logo"
                className="w-[36px] hidden sm:block"
              />
              <img
                src="/menu.png"
                alt="menu"
                className="h-[20px] sm:hidden block"
              />
              <div className="ml-5 text-[26px] lowercase text-black font-bold">
                Artcryption
              </div>
            </div>
            <div className="grid sm:grid-cols-[60%_200px] grid-cols-1  justify-between gap-6">
              <div className="hidden sm:block">
                <div className="inline-flex justify-between grid-cols-5 gap-6 mt-4 lg:ml-[20%] flex-wrap">
                  <p className="text-[#292d32] text-[16px]">how it works</p>
                  <p className="text-[#292d32] text-[16px]">feed</p>
                  <p className="text-[#292d32] text-[16px]">curators</p>
                  <p className="text-[#292d32] text-[16px]">blog</p>
                  <p className="text-[#292d32] text-[16px]">drops</p>
                </div>
              </div>
              <div className="flex justify-start sm:justify-end items-center">
                <CustomButton
                  name="Join waitlist"
                  className="text-white bg-black rounded-lg px-6 h-[36px] text-[16px] leading-[28px]"
                />
              </div>
            </div>
          </div>
          <div className="relative h-[80px] mt-6">
            <div className="absolute top-2 right-0">
              <img
                src="/artcryption_logo1.png"
                alt="logo"
                className="h-[170px] lg:h-[250px] mr-0 lg:mr-20"
              />
            </div>
          </div>
          <div>
            <p className="text-[#292d32] text-[48px] font-bold leading-[48px]">
              Hello
              <br />
              Welcome to Artcryption
            </p>
            <p className="text-[#292d32] text-[28px] leading-[38px] pt-3">
              Sell, protect and share your NFTs, creative assets & IP online
            </p>
          </div>
          <div className="pt-6">
            <p className="text-[#292d32] text-[16px]">Join Our Community</p>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
              <div className="flex row flex-wrap gap-2 content-start">
                <CustomButton
                  name="LinkedIn"
                  className="text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
                />
                <CustomButton
                  name="Instagram"
                  className="text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
                />
                <CustomButton
                  name="Discord"
                  className="text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
                />
                <CustomButton
                  name="Twitter"
                  className="text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
                />
                <CustomButton
                  name="Facebook"
                  className="text-black bg-white rounded-2xl px-4 h-[36px] border border-black"
                />
              </div>
              <div className="flex md:gap-2 gap-4 lg:flex-row lg:items-end lg:justify-between lg:mr-1 flex-col mt-14 md:mb-[-20px] mb-0">
                <div className="h-[166px] w-[166px] bg-[#eef8f3] rounded-[50%] flex justify-center items-center flex-col gap-2 shadow-[8px_6px_rgba(0,0,0,0.2)]">
                  <p className="text-black text-[10px]">submit your artwork</p>
                  <p className="text-black text-[18px] font-medium">
                    Digital Canapés
                  </p>
                  <p className="text-black text-[10px] text-center">
                    curated by
                    <br />
                    bompas & parr + MA World
                  </p>
                  <p className="text-[#2f8be6] text-[8px]">
                    Artist Submission Guidelines
                  </p>
                </div>
                <div className="flex flex-row items-center justify-end gap-2 mr-0 lg:mr-20">
                  <p className="text-[#92839a] text-[14px] font-bold">
                    Submit Your Digital Canapé Artwork{' '}
                  </p>
                  <img
                    src="/arrow_right.png"
                    alt="sub_digi_can"
                    className="h-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-black text-[38px] font-bold">Featured</p>
            <div className="flex flex-col lg:mr-[10px]">
              <div className="text-right pt-10">
                <p className="text-black text-[28px]">Digital Canapés</p>
                <p className="text-[#707070] text-[14px] leading-[36px] mt-[-8px]">
                  view
                </p>
              </div>
              <div className="flex flex-row justify-between flex-wrap">
                {Vitamincanape.map((item, i) => {
                  return <CanapesCard item={item} key={i} />;
                })}
              </div>
              <div className="text-right py-4">
                <p className="text-black text-[28px]">Digital Canapés</p>
              </div>
              <div className="flex flex-row justify-between flex-wrap">
                {DigitalCanapes.map((item, i) => {
                  return <CanapesCard item={item} key={i} />;
                })}
              </div>
              <div className="text-right py-4">
                <p className="text-black text-[28px]">Adam G</p>
              </div>
              <div className="flex flex-row justify-between flex-wrap">
                {AdamG.map((item, i) => {
                  return <CanapesCard item={item} key={i} />;
                })}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-black text-[38px] leading-[46px]">
              Why Artcryption?
            </p>
            <div className="py-8 grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Time-Stamped Digital Certificates
                </p>
              </div>
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Create NFTs and one-of-a-kind collectibles
                </p>
              </div>
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Resale Royalties & Split Royalties
                </p>
              </div>
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/load.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Interoperable
                </p>
              </div>
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/clock.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Track buyers, provenance and price history
                </p>
              </div>
              <div className="flex flex-row gap-6 p-[25px]">
                <img src="/shield.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px] max-w-[70%]">
                  Alternative copyright protection
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-black text-[38px] leading-[46px] pb-[80px]">
              NFT Pop-Ups, Drops & News
            </p>
            <div className="flex flex-row justify-start flex-wrap">
              {news.map((item, i) => {
                return <CanapesCard item={item} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pt-[60px] pb-[40px] mt-[100px]">
        <div className="grid md:grid-cols-[260px_auto] grid-cols-1 max-w-[1400px] justify-center m-auto lg:ml-[-30px]">
          <p className="text-[36px] text-white leading-[43px] font-bold">
            Join Waitlist
          </p>
          <div className="flex flex-col max-w-[380px] lg:max-w-[460px]">
            <input
              className="rounded-xl w-[300px] lg:w-[460px] border border-white p-2 bg-black"
              placeholder="Enter your email"
            />
            <p className="text-white text-[12px] leading-[14px] pt-4">
              Subscribe to join waitlist and also get access to the latest news
              and drops
            </p>
          </div>
        </div>
      </div>
      <div className="px-[60px] pb-5 pt-0 pl-[80px] bg-[#dcdce0]">
        <div className="grid grid-cols-2">
          <p className="text-[50px] md:text-[80px] lg:text-[120px] text-black font-semibold md:mt-[-20px]">
            artcryption
          </p>
          <div className="flex justify-end md:mr-6">
            <img
              src="./logo1.png"
              alt="logo1"
              className="h-[117px] hidden md:block"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-[68%_32%] grid-cols-1 gap-8">
          <div className="grid lg:grid-cols-[72%_28%] grid-cols-1 gap-6">
            <div>
              <p className="text-black text-[16px] leading-[16px] pt-6">
                Artcryption is a platform for creators to share, protect and
                sell their works showcasing the best in creativity.
              </p>
            </div>
            <div className="flex items-center justify-center pt-4">
              <div className="flex flex-col gap-5">
                <p className="text-black text-[16px] leading-[16px]">Drops</p>
                <p className="text-black text-[16px] leading-[16px]">About</p>
                <p className="text-black text-[16px] leading-[16px]">
                  How It works
                </p>
                <p className="text-black text-[16px] leading-[16px]">
                  Curators
                </p>
                <p className="text-black text-[16px] leading-[16px]">Feed</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <p className="text-[16px] text-black leading-[26px] font-bold">
              Newsletter
            </p>
            <p className="text-[14px] text-[#6f6f6f] leading-[22px] max-w-[70%]">
              Subscribe to join the waitlist and get latest news, drops and
              events.
            </p>
            <div className="grid grid-cols-[60%_40%] items-center">
              <input
                type="text"
                className="rounded-xl min-w-[100px] border border-black p-2 bg-[#dcdce0]"
              />
              <div className="flex items-center justify-center">
                <CustomButton
                  name="SUBSCRIBE"
                  className="text-white bg-black rounded-lg px-6 h-[42px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[22px]">
          <div className="flex flex-row gap-2 ml-3">
            <img className="h-[20px]" src="./twiter.svg" alt="twiter" />
            <img className="h-[20px]" src="./fb.svg" alt="fb" />
            <img className="h-[20px]" src="./insta.svg" alt="insta" />
          </div>
          <div className="text-center text-[#1e1e1e] text-[12px] leading-[14px] tracking-[1.44px]">
            © Artcryption Inc. 2021, All Rights Reserved
          </div>
          <div className="flex justify-end">
            <div className="w-[80%] flex flex-row justify-between px-[10px]">
              <p className="text-black text-[12px] leading-[14px] text-center">
                PRESS
              </p>
              <p className="text-black text-[12px] leading-[14px] text-center">
                PRIVACY
              </p>
              <p className="text-black text-[12px] leading-[14px] text-center">
                TERMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
