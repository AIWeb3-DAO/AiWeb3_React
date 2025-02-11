'use client'
import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import type { StaticImageData } from 'next/image'
let aiweb_imaga_data: StaticImageData = {
  src: '/images/aiweb3_promotion.png',
  height: 512,
  width: 512,
}
import MintNFTComponent from '@/components/nft/nft_mint'
import { useState } from 'react'
import { getUserAllImg, mintNFTwithCode,createUserProfile} from './test_code'
export default function Hero() {
  const [showMintComponent, setShowMintComponent] = useState(false);
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Build Web3 Community <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Together</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">We are AiWeb3 Community, focuing on Web3/AI tech, particularly for polkadot ecosystem.</p>
              
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  {/* <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Join Us via NFT Mint</a> */}
                  <div>
                   
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        setShowMintComponent(!showMintComponent); // Toggle the display of MintNFTComponent
                      }}
                    >
                      Join Us via NFT Mint
                    </a>
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                      onClick={async (e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        await getUserAllImg()
                        // setShowMintComponent(!showMintComponent); // Toggle the display of MintNFTComponent
                      }}
                    >
                      getUserAllImg
                    </a>
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                      onClick={async (e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        await mintNFTwithCode()
                        // setShowMintComponent(!showMintComponent); // Toggle the display of MintNFTComponent
                      }}
                    >
                      mintNFTwithCode
                    </a>
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                      onClick={async (e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        await createUserProfile()
                        // setShowMintComponent(!showMintComponent); // Toggle the display of MintNFTComponent
                      }}
                    >
                      createUserProfile
                    </a>
                    {showMintComponent && <MintNFTComponent />}
                  </div>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                  {/* <a> <MintNFTComponent /> </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={aiweb_imaga_data}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/aiweb3_promotion.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />

        </div>

      </div>
    </section>
  )
}