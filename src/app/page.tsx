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
                <div className="inline-flex justify-between grid-cols-5 gap-6 mt-2 lg:ml-[20%] xl:ml-[30%] flex-wrap">
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
                  className="text-white bg-black rounded-lg px-6 h-[36px]"
                />
              </div>
            </div>
          </div>
          <div className="relative h-[80px]">
            <div className="absolute top-2 right-0">
              <img
                src="/artcryption_logo1.png"
                alt="logo"
                className="h-[170px]"
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
              <div className="flex md:gap-2 gap-4 lg:flex-row lg:items-end lg:justify-between lg:mr-20 flex-col mt-4 md:mb-[-20px] mb-0">
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
                <div className="flex flex-row items-center justify-end gap-2">
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
            <div className="flex flex-col gap-2">
              <div className="text-right pt-10">
                <p className="text-black text-[28px]">Digital Canapés</p>
                <p className="text-[#707070] text-[14px] leading-[36px]">
                  view
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {Vitamincanape.map((item, i) => {
                  return <CanapesCard item={item} key={i} />;
                })}
              </div>
              <div className="text-right pt-4">
                <p className="text-black text-[28px]">Digital Canapés</p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {DigitalCanapes.map((item, i) => {
                  return <CanapesCard item={item} key={i} />;
                })}
              </div>
              <div className="text-right pt-4">
                <p className="text-black text-[28px]">Adam G</p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
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
              <div className="flex flex-row gap-6 p-4">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">
                  Time-Stamped Digital Certificates
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">
                  Create NFTs and one-of-a-kind collectibles
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <img src="/tik.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">
                  Resale Royalties & Split Royalties
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <img src="/load.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">Interoperable</p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <img src="/clock.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">
                  Track buyers, provenance and price history
                </p>
              </div>
              <div className="flex flex-row gap-6 p-4">
                <img src="/shield.png" alt="tikIcon" className="h-[35px]" />
                <p className="text-black text-[22px]">
                  Alternative copyright protection
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-black text-[38px] leading-[46px]">
              NFT Pop-Ups, Drops & News
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
              {news.map((item, i) => {
                return <CanapesCard item={item} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pt-[60px] pb-[40px]">
        <div className="grid md:grid-cols-[260px_auto] grid-cols-1 max-w-[1400px] justify-center m-auto">
          <p className="text-[36px] text-white leading-[43px] font-bold p-4">
            Join Waitlist
          </p>
          <div className="flex flex-col p-4 max-w-[380px]">
            <input
              className="rounded-xl w[300px] border border-white p-2 bg-black"
              placeholder="Enter your email"
            />
            <p className="text-white text-[12px] leading-[14px] pt-4">
              Subscribe to join waitlist and also get access to the latest news
              and drops
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 pt-0 bg-[#dcdce0]">
        <div className="grid grid-cols-2">
          <p className="text-[50px] md:text-[80px] lg:text-[120px] text-black font-semibold">
            artcryption
          </p>
          <div className="flex justify-end">
            <img
              src="./logo1.png"
              alt="logo1"
              className="h-[117px] hidden md:block"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-[65%_35%] grid-cols-1 gap-8">
          <div className="grid lg:grid-cols-[75%_25%] grid-cols-1 gap-6">
            <div>
              <p className="text-black text-[16px] leading-[16px] pt-6">
                Artcryption is a platform for creators to share, protect and
                sell their works showcasing the best in creativity.
              </p>
            </div>
            <div className="flex items-center justify-center pt-4">
              <div className="flex flex-col gap-6">
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
          <div className=" flex flex-col font-bold gap-4 pr-4">
            <p className="text-[16px] text-black leading-[26px]">Newsletter</p>
            <p className="text-[14px] text-[#6f6f6f] leading-[22px] max-w-[70%]">
              Subscribe to join the waitlist and get latest news, drops and
              events.
            </p>
            <div className="grid grid-cols-[60%_40%] gap-2 items-center">
              <input
                type="text"
                className="rounded-xl min-w-[100px] border border-black p-2 bg-[#dcdce0]"
              />
              <div className="flex items-center justify-center">
                <CustomButton
                  name="SUBSCRIBE"
                  className="text-white bg-black rounded-lg px-6 h-[36px] max-w-[128px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-row gap-2">
            <img className="h-[20px]" src="./twiter.svg" alt="twiter" />
            <img className="h-[20px]" src="./fb.svg" alt="fb" />
            <img className="h-[20px]" src="./insta.svg" alt="insta" />
          </div>
          <div className="text-center text-[#1e1e1e] text-[12px] leading-[14px]">
            © Artcryption Inc. 2021, All Rights Reserved
          </div>
          <div className="grid grid-cols-3">
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
  );
}
