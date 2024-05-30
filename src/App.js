import './App.css';
import Header from './components/Header';
import SkillListingDetails from './components/SkillListingDetails';
import PartialRoundedBoxWithImage from './components/PartialRoundedBoxWithImage';
import BigParagraph from './components/BigParagraph';
import SmallParagraph from './components/SmallParagraph';
import PlayListItem from './components/PlayListItem';
import ParallelContainer from './components/ParallelContainer';
import StartJourneyStep from './components/StartJourneyStep';
import CarouselCardItem from './components/CarouselCardItem';
import SingleColumnRow from './components/SingleColumnRow';
import TwoColumnRow from './components/TwoColumnRow';
import ThreeColumnRow from './components/ThreeColumnRow';
import SmallerParagraph from './components/SmallerParagraph';
import CustomActionButton from './components/CustomActionButton';
import TextWithLightWhite from './components/TextWithLightWhite';
import FooterLinkWithOptions from './components/FooterLinkWithOptions';
import UnderlinedText from './components/UnderlinedText';
import ProfileWithImageCard from './components/ProfileWithImageCard';

const jobs = [
  "Python Developer",
  "Data Scientist",
  "Shopify Developer",
  "Shopify Developer",
  "Front End Developer",
  "MERN Stack Developer",
  "Shopify Developer",
  "Full Stack Developer",
  "Full Stack Developer",
  "Python Developer"
]

function App() {
  return (
    <div className="App mx-auto">
      <div className='md:w-[85%] w-[90%] mx-auto mt-6'>
        <Header />
      </div>


      {/* First section */}
      <div className='mb-[10em]'>
        <div className='lg:w-[50%] md:w-[80%] sm:w-full mx-auto mt-[8em] px-[1em] md:px-0'>
          <BigParagraph imageCustomClass={"ml-2 w-[1.5em]"} split={true} text={"Finding the right fit"} otherText="has never been easier.">
            <img
              style={{ height: "1em", width: "2em" }}
              src="/assets/jason-gif.gif"
            />
          </BigParagraph>

          <SmallParagraph text={"With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again."} colorClass="text-[#202229]" />
        </div>

        <div className='lg:w-[45%] md:w-[60%] sm:w-[70%] w-[80%] mx-auto mt-6'>
          <div className='border w-full flex items-center rounded-lg'>
            <div className='w-[100%] flex items-center justify-end'>
              <p className='font-[600] lg:text-[16px] md:text-[14px] w-[10em] sm:text-[12px] text-[11px] text-right'>Looking for </p>
              <input className='h-[3em] px-1 outline-none w-full text-[#959595]' />
            </div>
            <div className='lg:p-7 md:p-4 p-4 sm:flex bg-[#FFBE2E] flex items-center justify-center rounded-lg'>
              <img src='/assets/input-vector.png' />
            </div>
          </div>
        </div>


        <div className='lg:w-[70%] mx-auto bg-[#F8F8F8] pt-5 pb-8 mt-16 rounded-lg mb-12 lg:px-0 px-3'>
          <div className='font-[600] sm:text-[16px] text-[12px] flex items-center gap-4 rounded-[1.2em] bg-[#D2D2D2] mx-auto lg:w-[55%] md:w-[70%] w-full mb-4'>
            <div className='bg-[#C7F4C2] rounded-[1.2em] w-full sm:px-8 px-2 py-3'>{"IT & Development"}</div>
            <div className='w-full'>{"Design and Creative"}</div>
          </div>

          <div className='grid grid-cols-3 gap-3 justify-center w-[85%] mx-auto'>
            {jobs.map((job, index) => {
              return <div className={`${index == 6 ? "font-[500]" : "font-[400]"} sm:text-[16px] text-[12px] text-[#959595] text-left`}>{job}</div>
            })}
            <div className='font-[500] sm:text-[16px] text-[12px] text-[#959595] text-left'>Explore More</div>
          </div>

        </div>
      </div>


      {/* Pre second section */}
      <ParallelContainer className={"bg-gradient-to-r from-white via-[#525AA0] to-white p-[0.5em] mb-2"}> </ParallelContainer>
      <ParallelContainer className={"bg-gradient-to-r from-white via-[#525AA0] to-white p-[0.4em] mb-2"}> </ParallelContainer>
      <ParallelContainer className={"bg-gradient-to-r from-white via-[#525AA0] to-white p-[0.3em] mb-2"}> </ParallelContainer>
      <ParallelContainer className={"bg-gradient-to-r from-white via-[#525AA0] to-white p-[0.2em] mb-2"}> </ParallelContainer>
      <ParallelContainer className={"bg-gradient-to-r from-white via-[#525AA0] to-white p-[0.1em] mb-2"}> </ParallelContainer>
      {/* Second section */}
      <ParallelContainer className={"bg-[#EDEFFF]"}>
        <section className='w-full bg-[#] pt-[10em] pb-[3em]'>
          <BigParagraph widthClass="w-[70%]" text={"Your one-stop marketplace for finding the talent your business needs."} />
          <div className='my-[5em]'>
            <SkillListingDetails label={"Find Dev and IT professionals to scale your business."} cardTitle={"IT & Development"} />
            <hr className="md:hidden block mt-8"></hr>
            <div className='my-8'></div>
            <SkillListingDetails label={"Explore Creative individuals with a keen eye for detail."} cardTitle={"Design & Creative"} />

            <div className='flex justify-between lg:w-[90%] sm:w-[50em] mx-auto text-left items-center mt-4 md:px-0 px-3'>
              <div className='flex gap-5 items-center'>
                <PartialRoundedBoxWithImage smallText={false} text="Explore More" bgClass={"bg-black"} roundedClass={"rounded-[2em]"} heightClass={"h-[70px]"} widthClass={"w-[70px]"} imagePath='/assets/forward-arrow-icon-white.png' />

              </div>
              <div className="lg:w-[35em] font-[500] text-[20px]">
                <span>30 more </span>
                <span className="text-black font-[400]">to explore</span>
              </div>
            </div>
          </div>
        </section>
      </ParallelContainer>

      {/* Third section */}
      <ParallelContainer className={"bg-black py-[3em]"}>
        <section className="w-full text-white text-left py-[8em]">
          <div className='w-[90%] mx-auto md:flex md:flex-row items-end block'>
            <div className='md:w-[50%]'>
              <p className="my-8">
                <BigParagraph marginClass='' text={"How it worked for Jason"} split otherText="at" widthClass="w-[70%]">
                  <img className="rounded-full" src='/assets/jason-image.png' />
                </BigParagraph>
                <div className='mt-3'></div>
                <img src='/assets/groove-icon.png' />
              </p>

              <SmallParagraph marginClass='' otherClasses="lg:w-[80%]" marginTop='' text={"Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since."} />

              <div className="flex gap-4 mt-5">
                <PartialRoundedBoxWithImage roundedClass={"rounded-[1.8em]"} bgClass={"bg-white"} padding={6} heightClass={"h-[55px]"} widthClass={"w-[55px]"} imagePath='/assets/back-light-purple-icon.png' />
                <PartialRoundedBoxWithImage roundedClass={"rounded-[1.8em]"} bgClass={"bg-white"} padding={6} heightClass={"h-[55px]"} widthClass={"w-[55px]"} imagePath='/assets/forward-light-purple-icon.png' />

              </div>

            </div>
            <div className="md:w-[50%] md:mt-0 mt-10">
              <div className='flex gap-3 md:items-end items-start mb-[4em]'>
                <div><img className='vsm:w-[4em] vsm:h-[4em] sm:w-[6em] sm:h-[6em]' src="/assets/groove-image.png" /></div>
                <div className="">
                  <p className='font-[600] text-[34px] opacity-100'>Jason Makki</p>
                  <p className='text-[16px] font-[500] opacity-70'>Engineer at GROOVE</p>
                  <p className='text-[16px] font-[500] opacity-70'>San Francisco</p>
                </div>
              </div>
              <SmallParagraph otherClasses={"lg:w-[90%]"} marginClass='' text={"Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they've been heavy hitters."} />
            </div>
          </div>
        </section>
      </ParallelContainer>



      {/* Fourth section */}
      <div className='py-[5.5em] mt-[5em]'>
        <div className='w-[90%] mx-auto'>
          <BigParagraph otherClasses='text-left' text={"How we ensure you're in good hands."} widthClass={"lg:w-[48%] md:w-[80%]"} marginClass="" />
          <SmallParagraph marginClass='' otherClasses={"text-left lg:w-[55%] md:w-[80%]"} text={"With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days."} />


          {/* PlayList */}
          <div className="lg:w-[50%] md:w-[80%] mt-6">
            <PlayListItem text={"Resume Screening"} step={"Step 1"} selected={false} description={"Candidates resumes are being screened"} />
            <PlayListItem text={"Video Inteview"} step={"Step 2"} selected={true} description={"Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."} />
            <PlayListItem text={"Technical Evaluation"} step={"Step 3"} selected={false} description={"Candidates are assessed through technical evaluation. Allowing you to test their technical skills"} />
            <PlayListItem text={"Application Review"} step={"Step 4"} selected={false} description={"Candidates applications' are being reviewed"} />
            <PlayListItem text={"Lets get to work"} step={"Step 5"} selected={false} description={"We reward candidates by giving them an offer."} />
          </div>

        </div>
      </div>


      {/* Fifth section */}
      <div className='py-[5.5em]'>
        <div className='w-[90%] mx-auto'>
          <BigParagraph text={"Start your journey today."} />
          <div className='my-20'></div>
          <ParallelContainer className={"bg-[#EDEFFF]"}>
            <section className='py-[3em] px-[1em] h-[22em]'>
              <StartJourneyStep buttonSideText={"Join Now"} description={"Explore the vast Zwilt marketplace to find the candidate that meets your needs."} label={"Find your next star performer."} value={1} mainColor={"#A387D1"} subColor={"white"}>
                <div className="lg:flex gap-4 hidden">
                  <div>
                    <div className="-mt-[5em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#ffdace]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-1.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#d8d2ff]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-3.png"}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="-mt-[6em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#c8efc4]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-2.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#fddd8b]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-4.png"}
                      />
                    </div>
                  </div>
                </div>
              </StartJourneyStep>
            </section>
          </ParallelContainer>
          <div className='my-8'></div>
          <ParallelContainer className={"bg-[#FFF7E1]"}>
            <section className='py-[3em] px-[1em] h-[22em]'>
              <StartJourneyStep buttonSideText={"Browse More"} description={"Assess the candidate through work history, transparent tests and video interviews."} label={"Evaluate to your heart's content."} value={2} mainColor={"#FFBE2E"} subColor={"white"} >
                <div className="lg:flex gap-4 hidden">
                  <div>
                    <div className="-mt-[5em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#ffdace]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-1.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#d8d2ff]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-3.png"}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="-mt-[6em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#c8efc4]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-2.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#fddd8b]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-4.png"}
                      />
                    </div>
                  </div>
                </div>
              </StartJourneyStep>
            </section>
          </ParallelContainer>
          <div className='my-8'></div>
          <ParallelContainer className={"bg-[#F3F3F3]"}>
            <section className='py-[3em] px-[1em] h-[22em]'>
              <StartJourneyStep buttonSideText={"Join Now"} description={"Onboard your candidate right away and start creating the next big thing."} label={"Start building your team."} value={3} mainColor={"black"} subColor={"#F3F3F3"} >
                <div className="lg:flex gap-4 hidden">
                  <div>
                    <div className="-mt-[5em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#ffdace]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-1.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"Ruby Developer"}
                        bgColor={"bg-[#d8d2ff]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-3.png"}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="-mt-[6em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#c8efc4]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-2.png"}
                      />
                    </div>
                    <div className="mt-[1em]">
                      <ProfileWithImageCard
                        jobRole={"System Ops Engineer"}
                        bgColor={"bg-[#fddd8b]"}
                        otherDescription={"Redwood Ciity, California 7 years of experience"}
                        imagePath={"/assets/image-4.png"}
                      />
                    </div>
                  </div>
                </div>
              </StartJourneyStep>
            </section>
          </ParallelContainer>
        </div>
      </div>

      {/* Sixth section */}
      <div className=''>
        <ParallelContainer className={"bg-[#EDEFFF] py-[6em] px-[1em]"}>
          <section className="lg:flex flex-nowrap gap-6" style={{ overflowX: "scroll" }}>
            <div className='lg:min-w-[40%] text-left p-[3em] flex flex-col justify-center '>
              <BigParagraph text="Why choose Zwilt?" widthClass='w-[100%]' marginClass=''>
              </BigParagraph>
              <SmallParagraph otherClasses={"w-[80%]"} marginClass="" text="We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool."></SmallParagraph>
            </div>
            <div className='flex flex-nowrap gap-6'>
              <CarouselCardItem buttonText="Learn More" title={"Onboard without the risk."} bulletIconColor={"bg-[#50589F]"} itemDetails={["We pick the best for you to select", "Thousands of vetted candidates in dozens of categories.", "Risk-free resource swapping for the best fit."]}>
                <img className='h-[30em]' style={{ objectFit: "cover" }} src="/assets/onboarding-image.png" />
              </CarouselCardItem >
              <CarouselCardItem buttonText="Learn More" title={"An open book."} bulletIconColor={"bg-[#FFBE2E]"} itemDetails={["Easy and transparent one-to-one chat with candidates.", "Simple and convenient payment methods.", "Review past ratings."]}>
                <img className='h-[30em]' style={{ objectFit: "cover" }} src="/assets/open-book.png" />
              </CarouselCardItem >
              <CarouselCardItem buttonText="Learn More" title={"Stay in the loop."} bulletIconColor={"bg-[#C7F4C2]"} itemDetails={["Track your staff activity down to every minute with screenshots.", "Comprehensive timesheet data to process payments.", "Create projects to organize and assign tasks more effectively."]}>
                <img className='h-[30em]' style={{ objectFit: "cover" }} src="/assets/stay-in-loop.png" />
              </CarouselCardItem >
            </div>
          </section>
        </ParallelContainer>

      </div>


      {/* Seventh Section */}
      <div>
        <ParallelContainer className={"bg-[#F3F3F3] py-[6em]"}>
          <section>
            <BigParagraph text={"Frequently asked questions"} />
            <div className='mb-[5em]'></div>
            {/* Table Rows */}
            <div className='text-[22px]'>
              <TwoColumnRow text1={"General"} topBorder text2={"I want to work part-time, is that possible"} />
              <SingleColumnRow text="How long are the average projects?" />
              <SingleColumnRow text="How does the payment work?" selected />
              <SingleColumnRow text="How long are the average projects?" />
              <SingleColumnRow text="How much can I earn?" />
              <ThreeColumnRow text1="General" text2="Joining Process" text3="I want to work part-time, is that possible" />
              <SingleColumnRow text="How long are the average projects?" />
              <SingleColumnRow text="How long are the average projects?" />
              <SingleColumnRow text="How much can I earn?" />
            </div>
          </section>
        </ParallelContainer>
      </div>

      {/* Footer Section */}
      <div className='text-white text-left'>
        <ParallelContainer className={"bg-black py-[5em]"}>
          <section>
            <ParallelContainer className={"bg-[#525AA0] py-[7em] w-[90%] mx-auto"}>
              <section className=''>
                <BigParagraph widthClass='w-[60%]' fontClass='font-[600]' otherClasses='text-white' text={"Need a job done, and done well? Get started"} />
                <div className='flex justify-center mt-8'>
                  <PartialRoundedBoxWithImage className="rotate-90" roundedClass={"rounded-[1.8em]"} bgClass={"bg-black"} padding={6} heightClass={"h-[65px]"} widthClass={"w-[65px]"} imagePath='/assets/forward-arrow-icon-white.png' />
                </div>
              </section>
            </ParallelContainer>
          </section>
        </ParallelContainer>

        <div className='py-[5em] bg-black mt-[-3em]'>
          <div className='sm:flex sm:flex-row block w-[90%] mx-auto pt-[5em]'>
            {/* Left */}
            <div className='w-full'>
              <div><img src='/assets/header-logo.png' /></div>
              <SmallerParagraph widthClass='sm:w-[70%]' marginClass='' otherClasses='opacity-70 text-white text-left mt-6' text={"We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool."} />
              <div className='mt-[3em]'>
                <TextWithLightWhite text={"Links and redirects"} />
                <div className='flex gap-5 mt-4'>
                  <CustomActionButton className="bg-[#292B34]" label={"Hire Now"} />
                  <CustomActionButton className="bg-[#292B34]" label={"Apply Now"} />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='sm:mt-0 mt-10'>
              <BigParagraph widthClass='' fontClass='font-[600]' otherClasses='text-white' text={"Connecting the right people to the right businesses."} />
              {/* Footer links and option */}
              <div className='lg:flex lg:flex-row md:grid md:grid-cols-3 lg:gap-0 md:gap-6 grid grid-cols-2 block justify-between mt-[2.6em]'>
                <FooterLinkWithOptions label={"Platform"} options={["Find Work", "Find Talent", "Categories", "About Us"]} />
                <FooterLinkWithOptions label={"Categories"} options={["Data Science", "IT & Networking", "Web & Mobile"]} />
                <FooterLinkWithOptions label={"Help"} options={["FAQ's", "Contact Us"]} />
                <FooterLinkWithOptions label={"Get in touch @"} options={["Instagram", "Linkedin", "Twitter"]} />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-black'>
          <div className='border'></div>
          <div className='sm:flex justify-between mx-auto w-[90%] py-8 font-[500] text-[16px]'>
            <p>All rights reserved by Zwilt</p>
            <p className='sm:flex sm:flex-row sm:justify-between flex gap-6 opacity-80 '>
              <UnderlinedText text={"Privacy Policy"} />
              <UnderlinedText text={"Terms and Conditions"} />
            </p>
          </div>
        </div>

        {/* <ProfileWithImageCard jobRole={"Ruby Developer"} otherDescription={"Redwood Ciity, California 7 years of experience"} imagePath={"/assets/image-4.png"} /> */}
      </div>
    </div>
  );
}

export default App;
