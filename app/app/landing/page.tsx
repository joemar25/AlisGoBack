import React from "react";
import { Group } from "@/app/components/Group/Group";
import { PropertyDefaultWrapper } from "@/app/components/PropertyDefaultWrapper/PropertyDefaultWrapper";

export const Landing = (): JSX.Element => {
  return (
    <div className="bg-[#fefefe] flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[9288px] relative">
        <div className="absolute w-[1246px] h-[1788px] top-[17px] left-[97px]">
          <div className="absolute w-[768px] h-[1059px] top-[729px] left-[3px]">
            <div className="absolute top-[78px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
              Categories
            </div>
            <img className="absolute w-[30px] h-[30px] top-0 left-0" alt="Sparkle icon" src="static/img/sparkle-icon.svg" />
            <p className="absolute top-[137px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
              Discover NFT art by categories.
            </p>
            <div className="absolute w-[289px] h-14 top-[1003px] left-[477px]">
              <div className="relative w-[287px] h-14 rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]">
                <div className="left-5 absolute top-[13px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-white text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                  Explore Categories
                </div>
                <img
                  className="absolute w-[41px] h-[15px] top-[21px] left-[223px]"
                  alt="Arrow icon"
                  src="static/img/arrow-icon-6.svg"
                />
              </div>
            </div>
          </div>
          <Group className="!absolute !left-[3px] !top-[936px]" property1="default" text="Cagsawa" />
          <PropertyDefaultWrapper className="!absolute !left-[3px] !top-[1337px]" property1="default" />
          <div className="absolute w-[1246px] h-[840px] top-0 left-0">
            <div className="absolute w-[1250px] h-[728px] top-28 left-0">
              <div className="absolute w-[1250px] h-[728px] top-0 left-0">
                <div className="absolute w-[1205px] h-[390px] top-0 left-px">
                  <div className="top-0 left-0 text-[length:var(--heading-1-font-size)] leading-[var(--heading-1-line-height)] absolute font-heading-1 font-[number:var(--heading-1-font-weight)] text-black tracking-[var(--heading-1-letter-spacing)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
                    Join the
                  </div>
                  <div className="absolute top-0 left-[507px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
                    New Travel
                  </div>
                  <div className="absolute top-48 left-[935px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
                    AlisGo
                  </div>
                  <div className="absolute top-24 left-[417px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
                    Revolution with
                  </div>
                  <p className="absolute top-[330px] left-[344px] font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                    Your one-stop place to discover, buy, and sell digital art directly.
                    <br />
                    From you, by you, for you.
                  </p>
                  <div className="w-[132px] h-[68px] top-3.5 left-[351px] bg-[url(/static/img/image-placeholder-22.png)] absolute bg-cover bg-[50%_50%]" />
                  <div className="w-72 h-[68px] top-[206px] left-[630px] bg-[url(/static/img/image-placeholder-23.png)] absolute bg-cover bg-[50%_50%]" />
                </div>
                <div className="absolute w-[166px] h-[86px] top-[101px] left-[1076px]">
                  <div className="relative h-[86px]">
                    <div className="absolute w-[86px] h-[86px] top-0 left-[57px] rounded-[43px] border border-solid border-black" />
                    <div className="absolute w-[47px] h-[86px] top-0 left-[119px] rounded-[23.5px/43px] border border-solid border-black" />
                    <img
                      className="absolute w-[100px] h-[7px] top-[39px] left-0 object-cover"
                      alt="Vector"
                      src="static/img/vector.svg"
                    />
                  </div>
                </div>
                <div className="w-[297px] top-[132px] left-0 absolute h-[398px]">
                  <div className="relative w-[295px] h-[398px] bg-white rounded-[25px] shadow-drop-shadow-1">
                    <div className="absolute w-[263px] h-[235px] top-4 left-4 bg-[url(/static/img/image-placeholder-24.png)] bg-cover bg-[50%_50%]">
                      <div className="relative w-[124px] h-9 top-2.5 left-2.5">
                        <div className="relative w-[122px] h-9 bg-white rounded-[50px]">
                          <div className="absolute top-[5px] left-10 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                            Collection
                          </div>
                          <div className="absolute w-[22px] h-[22px] top-[7px] left-2.5 bg-[#d9d9d9] rounded-[11px]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[265px] h-[115px] top-[267px] left-4">
                      <p className="absolute w-[258px] top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                        Mayon Volcano view at Cagsawa Ruins
                      </p>
                      <div className="absolute w-[265px] h-10 top-[75px] left-0">
                        <div className="relative w-[263px] h-10 rounded-[50px] border border-solid border-black">
                          <p className="top-px left-[63px] absolute font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                            01 : 08 : 25 : 12
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[299px] top-[330px] left-[951px] absolute h-[398px]">
                  <div className="relative w-[295px] h-[398px] bg-white rounded-[25px] shadow-drop-shadow-1">
                    <div className="absolute w-[263px] h-[235px] top-4 left-[11px] bg-[url(/static/img/image-placeholder-25.png)] bg-cover bg-[50%_50%]" />
                    <div className="absolute top-[348px] left-[11px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      0.60 SOL
                    </div>
                    <div className="h-[34px] top-[346px] left-[189px] absolute w-[87px]">
                      <div className="relative w-[85px] h-[34px] rounded-[10px] border border-solid border-gray">
                        <div className="absolute top-px left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                          BID
                        </div>
                      </div>
                    </div>
                    <p className="absolute w-[257px] top-[267px] left-[11px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                      Donsol Whale Shark Interaction Cente
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-[237px] h-14 top-[430px] left-[660px]">
                <div className="relative w-[235px] h-14 rounded-[50px]">
                  <div className="absolute top-[13px] left-7 [font-family:'Syne',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                    Sell Your Creation
                  </div>
                </div>
              </div>
              <div className="absolute w-[289px] h-14 top-[430px] left-[345px]">
                <div className="relative w-[287px] h-14 rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]">
                  <div className="left-6 absolute top-[13px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-white text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    Explore Collection
                  </div>
                  <img
                    className="absolute w-[41px] h-[15px] top-[21px] left-[223px]"
                    alt="Arrow icon"
                    src="static/img/arrow-icon-6.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-[1250px] h-14 top-0 left-px">
              <p className="absolute top-[15px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-transparent text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                <span className="text-[#a70bce] font-heading-4 [font-style:var(--heading-4-font-style)] font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  Alis.
                </span>
                <span className="text-[#24282b] font-heading-4 [font-style:var(--heading-4-font-style)] font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  Go
                </span>
              </p>
              <div className="left-[417px] absolute top-[15px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                Products
              </div>
              <div className="left-[545px] absolute top-[15px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                Creators
              </div>
              <div className="left-[670px] absolute top-[15px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                Blog
              </div>
              <div className="left-[766px] absolute top-[15px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                Contact
              </div>
              <div className="absolute w-[162px] h-14 top-0 left-[1080px]">
                <div className="relative w-40 h-14 bg-black rounded-[50px]">
                  <div className="absolute top-[15px] left-11 font-heading-7 font-[number:var(--heading-7-font-weight)] text-white text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    My Wallet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1242px] h-[538px] top-[1885px] left-[100px]">
          <img
            className="w-[30px] h-[30px] left-[605px] absolute top-0"
            alt="Sparkle icon"
            src="static/img/sparkle-icon-1.svg"
          />
          <div className="absolute top-[78px] left-[452px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] text-center tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Featured Creators
          </div>
          <div className="absolute w-[1240px] h-[274px] top-[177px] left-0">
            <div className="absolute w-[406px] h-[125px] top-[149px] left-[840px]">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute top-[63px] left-[158px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  Numbers of NFT Art:
                </div>
                <div className="absolute top-[61px] left-[311px] font-heading-7 font-[number:var(--heading-7-font-weight)] text-black text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  30
                </div>
                <div className="top-[34px] left-[158px] font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                  Richard Ong
                </div>
                <div className="absolute w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder.png)] bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[406px] h-[125px] top-[149px] left-[420px]">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute w-[169px] h-[55px] top-[34px] left-[158px]">
                  <div className="absolute top-[29px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Numbers of NFT Art:
                  </div>
                  <div className="absolute w-[169px] h-[53px] top-0 left-0">
                    <div className="top-[27px] left-[153px] font-[number:var(--heading-7-font-weight)] text-[length:var(--heading-7-font-size)] leading-[var(--heading-7-line-height)] absolute font-heading-7 text-black tracking-[var(--heading-7-letter-spacing)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                      35
                    </div>
                    <div className="absolute top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                      Mia Johnson
                    </div>
                  </div>
                </div>
                <div className="w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder-1.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[406px] h-[125px] top-[149px] left-0">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute w-[188px] h-[55px] top-[34px] left-[158px]">
                  <div className="absolute top-[29px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Numbers of NFT Art:
                  </div>
                  <div className="absolute w-[188px] h-[53px] top-0 left-0">
                    <div className="top-[27px] left-[153px] font-[number:var(--heading-7-font-weight)] text-[length:var(--heading-7-font-size)] leading-[var(--heading-7-line-height)] absolute font-heading-7 text-black tracking-[var(--heading-7-letter-spacing)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                      45
                    </div>
                    <div className="absolute top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                      Jennifer Chung
                    </div>
                  </div>
                </div>
                <div className="w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder-2.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[406px] h-[125px] top-0 left-[840px]">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute top-[63px] left-[158px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  Numbers of NFT Art:
                </div>
                <div className="absolute top-[61px] left-[311px] font-heading-7 font-[number:var(--heading-7-font-weight)] text-black text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  15
                </div>
                <div className="top-[34px] left-[158px] font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                  Eric Kim
                </div>
                <div className="w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder-3.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[406px] h-[125px] top-0 left-[420px]">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute top-[63px] left-[158px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  Numbers of NFT Art:
                </div>
                <div className="absolute top-[61px] left-[311px] font-heading-7 font-[number:var(--heading-7-font-weight)] text-black text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  20
                </div>
                <div className="top-[34px] left-[158px] font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                  Emily Chen
                </div>
                <div className="w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder-4.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[406px] h-[125px] top-0 left-0">
              <div className="relative w-[400px] h-[125px] bg-white rounded-[10px] shadow-drop-shadow-1">
                <div className="absolute top-[63px] left-[158px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  Numbers of NFT Art:
                </div>
                <div className="absolute top-[61px] left-[311px] font-heading-7 font-[number:var(--heading-7-font-weight)] text-black text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  25
                </div>
                <div className="absolute top-[34px] left-[158px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Lil Chan
                </div>
                <div className="w-[104px] h-[93px] top-4 left-4 bg-[url(/static/img/image-placeholder-5.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>
          <div className="absolute w-[243px] h-[31px] top-[507px] left-[499px]">
            <div className="absolute top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] text-center tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
              Load more creators
            </div>
            <div className="w-[241px] top-[30px] left-0 bg-black absolute h-px" />
          </div>
        </div>
        <div className="absolute w-[404px] h-[1465px] top-[2503px] left-[100px]">
          <div className="absolute top-[78px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Collections
          </div>
          <img className="absolute w-[30px] h-[30px] top-0 left-0" alt="Sparkle icon" src="static/img/sparkle-icon-2.svg" />
          <p className="absolute top-[137px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
            Explore NFT Art Collections by our creators.
          </p>
          <div className="absolute w-[289px] h-14 top-[1409px] left-0">
            <div className="relative w-[287px] h-14 rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]">
              <div className="absolute top-[13px] left-6 [font-family:'Syne',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
                Explore Collection
              </div>
              <img
                className="absolute w-[41px] h-[15px] top-[21px] left-[223px]"
                alt="Arrow icon"
                src="static/img/arrow-icon-6.svg"
              />
            </div>
          </div>
          <div className="w-[404px] h-[350px] top-[223px] absolute left-0">
            <div className="relative w-[400px] h-[350px] bg-white rounded-[25px] shadow-drop-shadow-1">
              <div className="top-[53px] left-[105px] opacity-75 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] leading-[var(--heading-7-line-height)] whitespace-nowrap absolute font-heading-7 tracking-[var(--heading-7-letter-spacing)] [font-style:var(--heading-7-font-style)]">
                Emily Chen&nbsp;&nbsp;•&nbsp;&nbsp;150 followers
              </div>
              <div className="absolute top-5 left-[105px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Yacht Club
              </div>
              <div className="w-[67px] h-[67px] top-4 left-4 bg-[url(/static/img/image-placeholder-6.png)] absolute bg-cover bg-[50%_50%]" />
              <div className="absolute w-[367px] h-[235px] top-[99px] left-4">
                <div className="w-[127px] h-[235px] top-0 left-0 bg-[url(/static/img/2022-12-10-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-28 h-[113px] top-0 left-[136px] bg-[url(/static/img/2022-04-22-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[110px] h-[113px] top-0 left-[257px] bg-[url(/static/img/2020-03-14-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[231px] h-[113px] top-[122px] left-[136px] bg-[url(/static/img/2021-02-20-1.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>
          <div className="absolute w-[404px] h-[350px] top-[613px] left-0">
            <div className="relative w-[400px] h-[350px] bg-white rounded-[25px] shadow-drop-shadow-1">
              <div className="top-[53px] left-[105px] opacity-75 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] leading-[var(--heading-7-line-height)] whitespace-nowrap absolute font-heading-7 tracking-[var(--heading-7-letter-spacing)] [font-style:var(--heading-7-font-style)]">
                Lily Chan&nbsp;&nbsp;•&nbsp;&nbsp;360 followers
              </div>
              <div className="absolute top-5 left-[105px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Azuki
              </div>
              <div className="w-[67px] h-[67px] top-4 left-4 bg-[url(/static/img/image-placeholder-7.png)] absolute bg-cover bg-[50%_50%]" />
              <div className="w-[367px] h-[236px] top-[98px] absolute left-4">
                <div className="w-[127px] h-[236px] top-0 left-0 bg-[url(/static/img/unnamed-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-28 h-[111px] top-[3px] left-[136px] bg-[url(/static/img/2022-07-11-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[110px] h-[111px] top-[3px] left-[257px] bg-[url(/static/img/2024-02-25-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[231px] top-[123px] bg-[url(/static/img/psx-20200603-205843-1.png)] absolute h-[113px] left-[136px] bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>
          <div className="absolute w-[404px] h-[350px] top-[1003px] left-0">
            <div className="relative w-[400px] h-[350px] bg-white rounded-[25px] shadow-drop-shadow-1">
              <div className="top-[53px] left-[105px] opacity-75 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] leading-[var(--heading-7-line-height)] whitespace-nowrap absolute font-heading-7 tracking-[var(--heading-7-letter-spacing)] [font-style:var(--heading-7-font-style)]">
                Jennifer Chung&nbsp;&nbsp;•&nbsp;&nbsp;275 followers
              </div>
              <div className="absolute top-5 left-[105px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Travel Club
              </div>
              <div className="w-[67px] h-[67px] top-4 left-4 bg-[url(/static/img/image-placeholder-8.png)] absolute bg-cover bg-[50%_50%]" />
              <div className="w-[368px] h-[235px] top-[99px] absolute left-4">
                <div className="w-[127px] h-[235px] top-0 left-0 bg-[url(/static/img/2020-01-24-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-28 h-[113px] top-0 left-[136px] bg-[url(/static/img/pxl-20221230-043602149-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[111px] h-[113px] top-0 left-[257px] bg-[url(/static/img/2022-10-18-1.png)] absolute bg-cover bg-[50%_50%]" />
                <div className="w-[232px] top-[122px] bg-[url(/static/img/20220711-071501-1.png)] absolute h-[113px] left-[136px] bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1296px] h-[911px] top-[2503px] left-[520px]">
          <div className="absolute w-[820px] h-2 top-[903px] left-0">
            <div className="relative h-2 rounded-[10px]">
              <div className="absolute w-[820px] h-2 top-0 left-0 bg-gray rounded-[10px] opacity-10" />
              <div className="absolute w-[610px] h-2 top-0 left-0 rounded-[10px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]" />
            </div>
          </div>
          <p className="absolute top-[78px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Get in on the Action
          </p>
          <img className="absolute w-[30px] h-[30px] top-0 left-0" alt="Sparkle icon" src="static/img/sparkle-icon-3.svg" />
          <p className="absolute top-[137px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
            Bid on One-of-a-Kind NFT Art in Artify&#39;s Featured Live Auction
          </p>
          <div className="w-[610px] h-[624px] top-[223px] absolute left-0">
            <div className="absolute w-[610px] h-[439px] top-0 left-0 bg-[url(/static/img/download-16.png)] bg-cover bg-[50%_50%]">
              <div className="absolute w-[225px] h-14 top-8 left-8">
                <div className="relative w-[223px] h-14 bg-white rounded-[50px]">
                  <img className="absolute w-6 h-6 top-4 left-5" alt="Timer icon" src="static/img/timer-icon.svg" />
                  <p className="top-3 left-14 absolute font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    02 : 05 : 20 : 30
                  </p>
                </div>
              </div>
              <div className="absolute w-[114px] h-14 top-8 left-[466px]">
                <div className="relative w-28 h-14 bg-white rounded-[35px]">
                  <img className="absolute w-6 h-6 top-4 left-5" alt="User icon" src="static/img/user-icon.svg" />
                  <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] text-center leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    258
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[620px] h-[183px] top-[441px] left-0">
              <div className="relative w-[610px] h-[183px] bg-white rounded-[0px_0px_10px_10px] shadow-drop-shadow-1">
                <div className="top-[95px] left-[92px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                  Maria Martinez
                </div>
                <div className="absolute top-[121px] left-[494px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-green text-[length:var(--heading-5-font-size)] text-right tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                  0.50 ETH
                </div>
                <div className="absolute top-[125px] left-[92px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  See all bidders
                </div>
                <div className="absolute top-[95px] left-[491px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] text-right tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                  Current price:
                </div>
                <div className="absolute top-7 left-6 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
                  ChokletHill
                </div>
                <div className="w-14 h-14 top-[95px] left-6 bg-[url(/static/img/image-placeholder-9.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>
          <div className="absolute w-[662px] h-[624px] top-[223px] left-[630px]">
            <div className="relative h-[624px]">
              <div className="w-[662px] h-[536px] top-0 absolute left-0">
                <div className="relative w-[290px] h-[536px] bg-[url(/static/img/image-placeholder-10.png)] bg-cover bg-[50%_50%]">
                  <img
                    className="absolute w-[290px] h-[441px] top-0 left-0 object-cover"
                    alt="Download"
                    src="static/img/download-17.png"
                  />
                </div>
              </div>
              <div className="absolute w-[225px] h-14 top-8 left-8">
                <div className="relative w-[223px] h-14 bg-white rounded-[50px]">
                  <img className="absolute w-6 h-6 top-4 left-5" alt="Timer icon" src="static/img/timer-icon-1.svg" />
                  <p className="top-3 left-14 absolute font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    03 : 01 : 35 : 10
                  </p>
                </div>
              </div>
              <div className="absolute w-[114px] h-14 top-8 left-[466px]">
                <div className="absolute w-28 h-14 top-0 left-0 bg-white rounded-[35px]">
                  <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] text-center leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    352
                  </div>
                </div>
                <img
                  className="absolute w-6 h-6 top-[3203px] left-[2614px]"
                  alt="User icon"
                  src="static/img/user-icon-1.png"
                />
              </div>
              <div className="absolute w-[620px] h-[183px] top-[441px] left-0">
                <div className="relative w-[610px] h-[183px] bg-white rounded-[0px_0px_10px_10px] shadow-drop-shadow-1">
                  <div className="top-[95px] left-[92px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                    Jason Lee
                  </div>
                  <div className="absolute top-[121px] left-[502px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-green text-[length:var(--heading-5-font-size)] text-right tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    1.20 ETH
                  </div>
                  <div className="absolute top-[125px] left-[92px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    See all bidders
                  </div>
                  <div className="absolute top-[95px] left-[491px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] text-right tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Current price:
                  </div>
                  <div className="absolute top-7 left-6 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
                    CryptoLake
                  </div>
                  <div className="w-14 h-14 top-[95px] left-6 bg-[url(/static/img/image-placeholder-11.png)] absolute bg-cover bg-[50%_50%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[826px] h-[498px] top-[3470px] left-[520px]">
          <div className="relative w-[824px] h-[498px]">
            <div className="absolute w-[824px] h-[498px] top-0 left-0">
              <div className="relative h-[498px] rounded-[25px]">
                <div className="absolute w-[824px] h-[498px] top-0 left-0 bg-black rounded-[25px] shadow-drop-shadow-1 opacity-20" />
                <img
                  className="absolute w-[820px] h-[498px] top-0 left-0 object-cover"
                  alt="Element"
                  src="static/img/2023-05-05-1.png"
                />
              </div>
            </div>
            <p className="absolute top-[66px] left-[61px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-[#000000] text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Discover More
              <br />
              Unique Digital
              <br />
              Art on Alis-Go!
            </p>
            <button className="all-[unset] box-border absolute w-[202px] h-14 top-[376px] left-[563px]">
              <div className="relative w-[200px] h-14 bg-white rounded-[50px]">
                <div className="top-[13px] left-6 text-[length:var(--heading-5-font-size)] text-center leading-[var(--heading-5-line-height)] absolute font-heading-5 font-[number:var(--heading-5-font-weight)] text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                  Join Now
                </div>
                <img
                  className="absolute w-[41px] h-[15px] top-[21px] left-[136px]"
                  alt="Arrow icon"
                  src="static/img/arrow-icon-5.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="absolute w-[1251px] h-[1226px] top-[4048px] left-[93px]">
          <div className="absolute top-[78px] left-[7px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Newest Art
          </div>
          <img
            className="w-[30px] h-[30px] left-[7px] absolute top-0"
            alt="Sparkle icon"
            src="static/img/sparkle-icon-4.svg"
          />
          <p className="absolute top-[137px] left-[7px] font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
            Explore the Newest NFT Art.
          </p>
          <div className="absolute w-[125px] h-[30px] top-[127px] left-[633px]">
            <div className="absolute top-0 left-7 font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Category
            </div>
            <img className="w-5 h-5 top-[5px] absolute left-0" alt="Menu icon" src="static/img/menu-icon.svg" />
          </div>
          <div className="absolute w-[181px] h-8 top-[127px] left-[1068px]">
            <div className="absolute top-0 left-0 font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Most Recent
            </div>
            <img className="absolute w-8 h-8 top-0 left-[147px]" alt="Arrow icon" src="static/img/arrow-icon-3.svg" />
          </div>
          <div className="absolute w-[153px] h-[30px] top-[127px] left-[780px]">
            <div className="absolute top-0 left-7 font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Price Range
            </div>
            <img className="w-5 h-5 top-[5px] absolute left-0" alt="Money icon" src="static/img/money-icon.svg" />
          </div>
          <div className="absolute w-[83px] h-[30px] top-[127px] left-[955px]">
            <div className="absolute top-0 left-7 font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Likes
            </div>
            <img className="w-5 h-5 top-[5px] absolute left-0" alt="Heart icon" src="static/img/heart-icon.svg" />
          </div>
          <div className="w-[1247px] h-[1031px] top-[195px] absolute left-0">
            <div className="absolute w-[940px] h-[484px] top-[3px] left-0">
              <div className="w-[310px] h-[484px] top-0 absolute left-0">
                <div className="absolute w-[295px] h-[300px] top-0 left-[7px] bg-[url(/static/img/unnamed-2.png)] bg-cover bg-[50%_50%]">
                  <div className="relative w-[114px] h-14 top-3 left-3">
                    <div className="relative w-28 h-14 bg-white rounded-[35px]">
                      <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                        150
                      </div>
                      <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                    </div>
                  </div>
                </div>
                <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                  Emily Chen
                </div>
                <div className="absolute w-[126px] h-[51px] top-[433px] left-0">
                  <div className="absolute w-[119px] h-[51px] top-0 left-[7px]">
                    <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                      Starting price:
                    </div>
                    <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      0.50 ETH
                    </div>
                  </div>
                  <img
                    className="absolute w-6 h-6 top-[26px] left-0"
                    alt="Ethereum icon"
                    src="static/img/ethereum-icon-1.svg"
                  />
                </div>
                <div className="absolute top-[332px] left-[7px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Boracay
                </div>
                <div className="absolute w-[87px] h-[50px] top-[433px] left-[217px]">
                  <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                    <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      BID
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-12.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
              <div className="absolute w-[330px] h-[484px] top-0 left-[308px]">
                <div className="absolute w-[322px] h-[322px] top-0 left-0">
                  <div className="w-[322px] h-[322px] top-0 absolute left-0">
                    <img
                      className="absolute w-[295px] h-[300px] top-0 left-3.5 object-cover"
                      alt="Element"
                      src="static/img/2023-12-09-1.png"
                    />
                  </div>
                  <div className="absolute w-[114px] h-14 top-3 left-[26px]">
                    <div className="relative w-28 h-14 bg-white rounded-[35px]">
                      <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                        200
                      </div>
                      <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                    </div>
                  </div>
                </div>
                <div className="top-[382px] left-[82px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                  Richard Ong
                </div>
                <div className="absolute w-[126px] h-[51px] top-[433px] left-[7px]">
                  <div className="absolute w-[119px] h-[51px] top-0 left-[7px]">
                    <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                      Starting price:
                    </div>
                    <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      0.80 ETH
                    </div>
                  </div>
                  <img
                    className="absolute w-6 h-6 top-[26px] left-0"
                    alt="Ethereum icon"
                    src="static/img/ethereum-icon-1.svg"
                  />
                </div>
                <div className="top-[332px] left-3.5 text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                  Greenbelt
                </div>
                <div className="h-[50px] top-[433px] left-56 absolute w-[87px]">
                  <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                    <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      BID
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 top-[369px] left-3.5 bg-[url(/static/img/image-placeholder-13.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
              <div className="absolute w-[310px] h-[484px] top-0 left-[630px]">
                <div className="absolute w-[295px] h-[300px] top-0 left-[7px] bg-[url(/static/img/2021-10-29-1.png)] bg-cover bg-[50%_50%]">
                  <div className="relative w-[114px] h-14 top-3 left-3">
                    <div className="relative w-28 h-14 bg-white rounded-[35px]">
                      <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                        125
                      </div>
                      <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                    </div>
                  </div>
                </div>
                <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                  Alex Kim
                </div>
                <div className="absolute w-[125px] h-[51px] top-[433px] left-0">
                  <div className="absolute w-[118px] h-[51px] top-0 left-[7px]">
                    <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                      Starting price:
                    </div>
                    <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      0.70 ETH
                    </div>
                  </div>
                  <img
                    className="absolute w-6 h-6 top-[26px] left-0"
                    alt="Ethereum icon"
                    src="static/img/ethereum-icon-3.svg"
                  />
                </div>
                <div className="absolute top-[332px] left-[7px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Siargao Island
                </div>
                <div className="absolute w-[87px] h-[50px] top-[433px] left-[217px]">
                  <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                    <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      BID
                    </div>
                  </div>
                </div>
                <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-14.png)] absolute bg-cover bg-[50%_50%]" />
              </div>
            </div>
            <div className="absolute w-[310px] h-[486px] top-0 left-[945px]">
              <div className="absolute w-[295px] h-[303px] top-0 left-[7px] bg-[url(/static/img/the-sleeping-lion-mountain-on-the-foreground-of-mayon-volcano-1.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[114px] h-14 top-3 left-3">
                  <div className="relative w-28 h-14 bg-white rounded-[35px]">
                    <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      180
                    </div>
                    <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                  </div>
                </div>
              </div>
              <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                Mia Johnson
              </div>
              <div className="absolute w-[126px] h-[51px] top-[433px] left-0">
                <div className="absolute w-[119px] h-[51px] top-0 left-[7px]">
                  <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Starting price:
                  </div>
                  <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    0.60 ETH
                  </div>
                </div>
                <img
                  className="absolute w-6 h-6 top-[26px] left-0"
                  alt="Ethereum icon"
                  src="static/img/ethereum-icon-3.svg"
                />
              </div>
              <div className="absolute top-[332px] left-[7px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Mayon Volcano
              </div>
              <div className="h-[50px] top-[436px] left-[217px] absolute w-[87px]">
                <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-15.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
            <div className="absolute w-[310px] h-[484px] top-[542px] left-0">
              <div className="absolute w-[295px] h-[300px] top-0 left-[7px] bg-[url(/static/img/dscn2574-1.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[114px] h-14 top-3 left-3">
                  <div className="relative w-28 h-14 bg-white rounded-[35px]">
                    <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      250
                    </div>
                    <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                  </div>
                </div>
              </div>
              <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                Eric Kim
              </div>
              <div className="absolute w-[126px] h-[51px] top-[433px] left-0">
                <div className="absolute w-[119px] h-[51px] top-0 left-[7px]">
                  <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Starting price:
                  </div>
                  <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    0.90 ETH
                  </div>
                </div>
                <img
                  className="absolute w-6 h-6 top-[26px] left-0"
                  alt="Ethereum icon"
                  src="static/img/ethereum-icon-5.svg"
                />
              </div>
              <div className="absolute top-[332px] left-[7px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Kayangan Lake
              </div>
              <div className="absolute w-[87px] h-[50px] top-[433px] left-[217px]">
                <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-16.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
            <div className="absolute w-[310px] h-[489px] top-[542px] left-[315px]">
              <div className="absolute w-[295px] h-[300px] top-0 left-[7px] bg-[url(/static/img/2021-12-14-1.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[114px] h-14 top-3 left-3">
                  <div className="relative w-28 h-14 bg-white rounded-[35px]">
                    <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      150
                    </div>
                    <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                  </div>
                </div>
              </div>
              <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                James Lee
              </div>
              <div className="absolute top-[433px] left-[7px] opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                Starting price:
              </div>
              <div className="absolute top-[332px] left-[7px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Magellan&#39;s Cross
              </div>
              <div className="absolute top-[459px] left-8 font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                0.70 ETH
              </div>
              <img className="absolute w-6 h-6 top-[459px] left-0" alt="Ethereum icon" src="static/img/ethereum-icon-5.svg" />
              <div className="absolute w-[87px] h-[50px] top-[433px] left-[217px]">
                <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-17.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
            <div className="absolute w-[310px] h-[484px] top-[542px] left-[630px]">
              <div className="absolute w-[295px] h-[300px] top-0 left-[7px] bg-[url(/static/img/2021-01-11-1.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[114px] h-14 top-3 left-3">
                  <div className="relative w-28 h-14 bg-white rounded-[35px]">
                    <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      120
                    </div>
                    <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                  </div>
                </div>
              </div>
              <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                Lily Chan
              </div>
              <div className="absolute w-[126px] h-[51px] top-[433px] left-0">
                <div className="absolute w-[119px] h-[51px] top-0 left-[7px]">
                  <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Starting price:
                  </div>
                  <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    0.80 ETH
                  </div>
                </div>
                <img
                  className="absolute w-6 h-6 top-[26px] left-0"
                  alt="Ethereum icon"
                  src="static/img/ethereum-icon-7.svg"
                />
              </div>
              <div className="top-[332px] left-[7px] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                Cebu City
              </div>
              <div className="absolute w-[87px] h-[50px] top-[433px] left-[217px]">
                <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-18.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
            <div className="absolute w-[310px] h-[486px] top-[539px] left-[945px]">
              <div className="absolute w-[302px] h-[300px] top-0 left-0 bg-[url(/static/img/2021-03-10-1.png)] bg-cover bg-[50%_50%]">
                <div className="relative w-[114px] h-14 top-3 left-[19px]">
                  <div className="relative w-28 h-14 bg-white rounded-[35px]">
                    <div className="top-3 left-14 font-[number:var(--heading-5-font-weight)] text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] absolute font-heading-5 text-black tracking-[var(--heading-5-letter-spacing)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                      180
                    </div>
                    <img className="absolute w-6 h-6 top-4 left-5" alt="Heart icon" src="static/img/heart-icon-8.svg" />
                  </div>
                </div>
              </div>
              <div className="top-[382px] left-[75px] font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] leading-[var(--paragraph-line-height)] whitespace-nowrap absolute font-paragraph tracking-[var(--paragraph-letter-spacing)] [font-style:var(--paragraph-font-style)]">
                Michael Kim
              </div>
              <div className="absolute w-[121px] h-[51px] top-[433px] left-0">
                <div className="absolute w-[114px] h-[51px] top-0 left-[7px]">
                  <div className="absolute top-0 left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Starting price:
                  </div>
                  <div className="absolute top-[21px] left-[25px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    1.00 ETH
                  </div>
                </div>
                <img
                  className="absolute w-6 h-6 top-[26px] left-0"
                  alt="Ethereum icon"
                  src="static/img/ethereum-icon-7.svg"
                />
              </div>
              <div className="top-[332px] left-[7px] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] absolute font-heading-4 font-[number:var(--heading-4-font-weight)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                Coron
              </div>
              <div className="h-[50px] top-[436px] left-[217px] absolute w-[87px]">
                <div className="relative w-[85px] h-[50px] rounded-[10px] border border-solid border-gray">
                  <div className="absolute top-[9px] left-[23px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-black text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                    BID
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 top-[369px] left-[7px] bg-[url(/static/img/image-placeholder-19.png)] absolute bg-cover bg-[50%_50%]" />
            </div>
          </div>
        </div>
        <div className="absolute w-[1244px] h-[1291px] top-[6325px] left-[100px]">
          <div className="absolute top-[78px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Blog &amp; News
          </div>
          <img className="absolute w-[30px] h-[30px] top-0 left-0" alt="Sparkle icon" src="static/img/sparkle-icon-5.svg" />
          <p className="absolute top-[137px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
            Explore the World of NFT Art with Collossus Blog.
          </p>
          <div className="absolute w-[1228px] h-[1068px] top-[223px] left-0">
            <div className="w-[505px] top-[294px] left-[715px] bg-gray opacity-25 absolute h-px" />
            <div className="absolute w-[513px] h-[733px] top-[335px] left-[715px]">
              <div className="w-[505px] h-[455px] top-[278px] bg-[url(/static/img/image-placeholder-20.png)] bg-[100%_100%] absolute left-0" />
              <div className="top-[198px] left-0 font-[number:var(--heading-5-font-weight)] text-gray text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] whitespace-nowrap absolute font-heading-5 tracking-[var(--heading-5-letter-spacing)] [font-style:var(--heading-5-font-style)]">
                Richard Ong
              </div>
              <div className="absolute top-[228px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                March 5, 2023
              </div>
              <p className="absolute w-[505px] top-[45px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                The Rise of NFT Art: A Look at the Future of Digital Collectibles
              </p>
              <div className="absolute top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-green text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                NFT ART
              </div>
            </div>
            <div className="absolute w-[513px] h-[254px] top-0 left-[715px]">
              <div className="top-[198px] left-0 font-[number:var(--heading-5-font-weight)] text-gray text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] whitespace-nowrap absolute font-heading-5 tracking-[var(--heading-5-letter-spacing)] [font-style:var(--heading-5-font-style)]">
                Mia Johnson
              </div>
              <div className="absolute top-[228px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                May 22, 2023
              </div>
              <p className="absolute w-[505px] top-[45px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                Navigating the NFT Marketplace: A Guide for Collectors and Creators
              </p>
              <div className="absolute top-0 left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-green text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                NFT MARKETPLACE
              </div>
            </div>
            <div className="absolute w-[728px] h-[1068px] top-0 left-0">
              <div className="w-[630px] h-[790px] top-0 bg-[url(/static/img/image-placeholder-21.png)] bg-cover bg-[50%_50%] absolute left-0" />
              <div className="top-[1012px] left-0 font-[number:var(--heading-5-font-weight)] text-gray text-[length:var(--heading-5-font-size)] leading-[var(--heading-5-line-height)] whitespace-nowrap absolute font-heading-5 tracking-[var(--heading-5-letter-spacing)] [font-style:var(--heading-5-font-style)]">
                Lily Chan
              </div>
              <div className="absolute top-[1042px] left-px opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                April 12, 2023
              </div>
              <p className="absolute w-[720px] top-[859px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                The Art of NFT Creation: Tips and
                <br />
                Tricks for Making Your Digital Art
                <br />
                Stand Out
              </p>
              <div className="absolute top-[814px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-green text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                NFT ART
              </div>
            </div>
          </div>
          <div className="absolute w-[266px] h-14 top-[103px] left-[976px]">
            <div className="relative w-[264px] h-14 rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]">
              <div className="absolute top-[13px] left-6 font-heading-5 font-[number:var(--heading-5-font-weight)] text-white text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                View All Articles
              </div>
              <img
                className="absolute w-[41px] h-[15px] top-[21px] left-[200px]"
                alt="Arrow icon"
                src="static/img/arrow-icon-6.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[830px] h-[989px] top-[7696px] left-[307px]">
          <img
            className="w-[30px] h-[30px] left-[401px] absolute top-0"
            alt="Sparkle icon"
            src="static/img/sparkle-icon-6.svg"
          />
          <div className="absolute w-[826px] h-[690px] top-[299px] left-0">
            <div className="w-[830px] h-[137px] top-0 absolute left-0">
              <div className="w-[774px] top-[136px] left-[52px] bg-gray absolute h-px" />
              <p className="absolute w-[774px] top-[52px] left-[52px] font-paragraph font-[number:var(--paragraph-font-weight)] text-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                NFT stands for Non-Fungible Token, which is a unique digital asset that is stored on a blockchain and
                represents ownership of a particular piece of content.
              </p>
              <div className="absolute top-[7px] left-[52px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                What is an NFT?
              </div>
              <img
                className="w-[42px] h-[42px] left-0 absolute top-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-7.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[161px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  What kind of digital art can I buy on{" "}
                </span>
                <span className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#24282b] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] leading-[var(--heading-4-line-height)]">
                  AlisGo
                </span>
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  ?
                </span>
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-8.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-60 left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  How can I sell my NFT art on{" "}
                </span>
                <span className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#24282b] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] leading-[var(--heading-4-line-height)]">
                  Collossus
                </span>
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  ?
                </span>
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-9.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[319px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                Can I buy NFT art with fiat currency?
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-10.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[398px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                What happens if I buy an NFT and the creator deletes it?
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-11.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[477px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  Can I resell NFT art that I have bought on{" "}
                </span>
                <span className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#24282b] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] leading-[var(--heading-4-line-height)]">
                  Collossus
                </span>
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  ?
                </span>
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-12.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[556px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  How long does an auction last on{" "}
                </span>
                <span className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[#24282b] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)] leading-[var(--heading-4-line-height)]">
                  Collossus
                </span>
                <span className="font-[number:var(--heading-4-font-weight)] font-heading-4 [font-style:var(--heading-4-font-style)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] text-[length:var(--heading-4-font-size)]">
                  ?
                </span>
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-13.svg"
              />
            </div>
            <div className="absolute w-[822px] h-[55px] top-[635px] left-1.5">
              <div className="absolute w-[774px] h-px top-[54px] left-[46px] bg-gray" />
              <p className="absolute top-px left-[46px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                How do I know if an NFT is authentic?
              </p>
              <img
                className="absolute w-[30px] h-[30px] top-0 left-0"
                alt="Sparkle icon"
                src="static/img/sparkle-icon-14.svg"
              />
            </div>
          </div>
          <div className="absolute top-[129px] left-[164px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
            QUESTIONS
          </div>
          <div className="absolute top-[78px] left-[257px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] text-center tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
            Frequently Asked
          </div>
        </div>
        <div className="absolute w-[1246px] h-[910px] top-[5335px] left-[100px]">
          <div className="relative w-[1240px] h-[910px]">
            <div className="absolute top-[129px] left-0 font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] whitespace-nowrap [font-style:var(--heading-1-font-style)]">
              Collossus
            </div>
            <img
              className="absolute w-[30px] h-[30px] top-0 left-0"
              alt="Sparkle icon"
              src="static/img/sparkle-icon-15.svg"
            />
            <div className="absolute top-[78px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
              Why choose
            </div>
            <p className="absolute top-[233px] left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
              for Your NFT Art Collection?
            </p>
            <div className="w-[1240px] h-[578px] top-[332px] absolute left-0">
              <div className="w-[275px] h-[236px] top-0 absolute left-0">
                <p className="absolute w-[271px] top-[158px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  Our platform features a wide variety of NFT art collections from talented creators around the world.
                </p>
                <img className="absolute top-0 left-0 w-14 h-14" alt="Menu icon" src="static/img/menu-icon-1.svg" />
                <div className="absolute top-[84px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Diverse NFT Art
                  <br />
                  Collections
                </div>
              </div>
              <div className="absolute w-64 h-[262px] top-0 left-[315px]">
                <p className="absolute w-[252px] top-[158px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  We offer a range of creator-friendly features, making it easy for creators to showcase and sell their
                  unique digital art.
                </p>
                <img className="w-[60px] h-[60px] top-0 absolute left-0" alt="Pen icon" src="static/img/pen-icon.svg" />
                <div className="absolute top-[84px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Creator-Friendly
                  <br />
                  Features
                </div>
              </div>
              <div className="absolute w-[299px] h-[262px] top-0 left-[630px]">
                <p className="absolute w-[295px] top-[158px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  Our platform is designed with the user in mind, making it easy to navigate and find the perfect NFT
                  art piece for your collection.
                </p>
                <img className="w-[60px] h-[60px] top-0 absolute left-0" alt="Heart icon" src="static/img/heart-icon-9.svg" />
                <div className="absolute top-[84px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  User-Friendly
                  <br />
                  Interface
                </div>
              </div>
              <div className="absolute w-[299px] h-[236px] top-[342px] left-[315px]">
                <p className="absolute w-[295px] top-[158px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  Our customer support team is available around the clock to assist with any questions or concerns you
                  may have.
                </p>
                <img className="w-[60px] h-[60px] top-0 absolute left-0" alt="Element icon" src="static/img/24-7-icon.svg" />
                <div className="absolute top-[84px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  24/7 Available
                  <br />
                  Customer Support
                </div>
              </div>
              <div className="absolute w-[299px] h-[236px] top-[342px] left-[630px]">
                <p className="absolute w-[295px] top-[158px] left-0 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  We use advanced security measures to ensure that all transactions on our platform are safe and secure.
                </p>
                <img className="w-[60px] h-[60px] top-0 absolute left-0" alt="Secure icon" src="static/img/secure-icon.svg" />
                <div className="absolute top-[84px] left-0 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Secure
                  <br />
                  Transactions
                </div>
              </div>
              <div className="absolute w-[299px] h-[236px] top-[342px] left-[945px]">
                <p className="absolute w-[293px] top-[158px] left-0.5 opacity-75 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] [font-style:var(--heading-7-font-style)]">
                  We strive to keep our pricing competitive to ensure that you get the best value for your money.
                </p>
                <img className="w-[60px] h-[60px] top-0 absolute left-0" alt="Money icon" src="static/img/money-icon-1.svg" />
                <div className="absolute top-[84px] left-0.5 font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  Competitive
                  <br />
                  Pricing
                </div>
              </div>
            </div>
            <img className="absolute w-[1240px] h-[902px] top-0 left-0" alt="Ornaments" src="static/img/ornaments.png" />
          </div>
        </div>
        <div className="absolute w-[1442px] h-[523px] top-[8765px] left-0">
          <div className="relative w-[1440px] h-[523px] bg-black">
            <p className="absolute top-[255px] left-[100px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-transparent text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              <span className="text-[#a70bce] font-heading-2 [font-style:var(--heading-2-font-style)] font-[number:var(--heading-2-font-weight)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] text-[length:var(--heading-2-font-size)]">
                Collou.
              </span>
              <span className="text-[#fefefe] font-heading-2 [font-style:var(--heading-2-font-style)] font-[number:var(--heading-2-font-weight)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] text-[length:var(--heading-2-font-size)]">
                Ssus
              </span>
            </p>
            <div className="absolute w-[450px] h-[26px] top-[295px] left-[501px]">
              <div className="absolute top-0 left-0 opacity-75 font-heading-6 font-[number:var(--heading-6-font-weight)] text-white text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
                Products
              </div>
              <div className="absolute top-0 left-[139px] opacity-75 font-heading-6 font-[number:var(--heading-6-font-weight)] text-white text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
                Creators
              </div>
              <div className="absolute top-0 left-[274px] opacity-75 font-heading-6 font-[number:var(--heading-6-font-weight)] text-white text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
                Blog
              </div>
              <div className="top-0 left-[374px] opacity-75 text-white text-[length:var(--heading-6-font-size)] leading-[var(--heading-6-line-height)] whitespace-nowrap absolute font-heading-6 font-[number:var(--heading-6-font-weight)] tracking-[var(--heading-6-letter-spacing)] [font-style:var(--heading-6-font-style)]">
                Contact
              </div>
            </div>
            <img
              className="absolute w-60 h-12 top-[279px] left-[1100px]"
              alt="Social media"
              src="static/img/social-media.png"
            />
            <div className="absolute w-[1244px] h-9 top-[407px] left-[100px]">
              <div className="w-[1240px] top-0 left-0 bg-gray absolute h-px" />
              <p className="absolute top-[17px] left-0 opacity-50 [font-family:'Syne',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Copyright © Collou.Ssus 2023. All rights reserved.
              </p>
              <p className="absolute top-[17px] left-[987px] opacity-50 [font-family:'Syne',Helvetica] font-normal text-white text-base text-right tracking-[0] leading-[normal] whitespace-nowrap">
                Privacy Policy. Terms and Condition.
              </p>
            </div>
            <div className="absolute w-[1244px] h-[119px] top-20 left-[100px]">
              <p className="absolute top-0 left-0 font-heading-3 font-[number:var(--heading-3-font-weight)] text-white text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] whitespace-nowrap [font-style:var(--heading-3-font-style)]">
                <span className="font-[number:var(--heading-3-font-weight)] font-heading-3 [font-style:var(--heading-3-font-style)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] text-[length:var(--heading-3-font-size)]">
                  Stay Up to Date with{" "}
                </span>
                <span className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-[#fefefe] text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] [font-style:var(--heading-3-font-style)] leading-[var(--heading-3-line-height)]">
                  AlisGo
                </span>
              </p>
              <p className="absolute w-[420px] top-[59px] left-0 opacity-50 font-paragraph font-[number:var(--paragraph-font-weight)] text-white text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                Subscribe to our newsletter for more updates and details on our promotions.
              </p>
              <div className="absolute w-[507px] h-[72px] top-[39px] left-[735px]">
                <div className="relative w-[505px] h-[72px] bg-white rounded-[50px]">
                  <div className="absolute w-[105px] h-[72px] top-0 left-[400px] rounded-[50px] [background:linear-gradient(180deg,rgb(105,134.92,241)_0%,rgb(126.58,49.96,193.37)_52.08%,rgb(231.63,78.17,216.28)_100%)]">
                    <img
                      className="absolute w-[41px] h-[15px] top-[29px] left-[33px]"
                      alt="Arrow icon"
                      src="static/img/arrow-icon-5.svg"
                    />
                  </div>
                  <p className="absolute top-[23px] left-10 font-heading-7 font-[number:var(--heading-7-font-weight)] text-gray text-[length:var(--heading-7-font-size)] tracking-[var(--heading-7-letter-spacing)] leading-[var(--heading-7-line-height)] whitespace-nowrap [font-style:var(--heading-7-font-style)]">
                    Enter your email address ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
