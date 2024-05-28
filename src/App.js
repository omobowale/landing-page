import './App.css';
import Header from './components/Header';
import InfoStrip from './components/InfoStrip';
import SkillLabelWithIcon from './components/SkillLabelWithIcon';
import SkillListingDetails from './components/SkillListingDetails';
import PartialRoundedBoxWithImage from './components/PartialRoundedBoxWithImage';
import BigParagraph from './components/BigParagraph';
import SmallParagraph from './components/SmallParagraph';
import PlayListItem from './components/PlayListItem';
import ParallelContainer from './components/ParallelContainer';
import StartJourneyStep from './components/StartJourneyStep';

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
    <div className="App">
      <div className='w-[80%] mx-auto mt-6'>
        <Header />
      </div>


      {/* First section */}
      <div className='mb-[10em]'>
        <div className='w-[50%] mx-auto mt-[8em]'>
          <BigParagraph text={"Finding the right fit has never been easier."} />
          <SmallParagraph text={"With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again."} colorClass="text-[#202229]" />
        </div>

        <div className='w-[40%] mx-auto mt-6'>
          <div className='border w-full flex items-center rounded-lg'>
            <div className='w-[90%] flex items-center justify-end'>
              <p className='font-[600] text-[16px]'>Looking for </p>
              <input className='h-[3em] px-1 outline-none w-[78%] text-[#959595]' />
            </div>
            <div className='py-7 w-[15%] bg-[#FFBE2E] flex items-center justify-center rounded-lg'>
              <img src='/assets/input-vector.png' />
            </div>
          </div>
        </div>


        <div className='w-[70%] mx-auto bg-[#F8F8F8] pt-5 pb-8 mt-16 rounded-lg mb-12'>
          <div className='font-[600] text-[16px] flex items-center gap-4 rounded-[1.2em] bg-[#D2D2D2] mx-auto w-[40%] mb-4'>
            <div className='bg-[#C7F4C2] rounded-[1.2em] px-8 py-3'>{"IT & Development"}</div>
            <div>{"Design and Creative"}</div>
          </div>

          <div className='grid grid-cols-3 gap-3 justify-center w-[85%] mx-auto'>
            {jobs.map(job => {
              return <div className='font-[400] text-[16px] text-[#959595] text-left'>{job}</div>
            })}
          </div>

        </div>
      </div>


      {/* Second section */}
      <ParallelContainer className={"bg-[#EDEFFF]"}>
        <section className='w-full bg-[#] pt-[10em] pb-[3em]'>
          <BigParagraph widthClass="w-[70%]" text={"Your one-stop marketplace for finding the talent your business needs."} />
          <div className='my-[5em]'>
            <SkillListingDetails label={"Find Dev and IT professionals to scale your business."} cardTitle={"IT & Development"} />
            <div className='my-8'></div>
            <SkillListingDetails label={"Explore Creative individuals with a keen eye for detail."} cardTitle={"Design & Creative"} />

            <div className='flex justify-between w-[90%] mx-auto text-left items-center mt-4'>
              <div className='w-[30%] flex gap-5 items-center'>
                <PartialRoundedBoxWithImage bgClass={"bg-black"} roundedClass={"rounded-[2em]"} heightClass={"h-[74px]"} widthClass={"w-[74px]"} imagePath='/assets/forward-arrow-icon-white.png' />

                <p className="font-[500] text-[22px]">Explore More</p>
              </div>
              <div className="w-[55.5%] font-[500] text-[22px]">
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
          <div className='w-[90%] mx-auto flex items-end'>
            <div className='w-[50%]'>
              <p className="my-8">
                <BigParagraph marginClass='' text={"How it worked for Jason at"} widthClass="w-[70%]" />
                <div className='mt-3'></div>
                <img src='/assets/groove-icon.png' />
              </p>

              <SmallParagraph marginClass='' text={"Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since."} />
              {/* <p className="text-[22px] font-[400] mb-8 w-[80%]">Z</p> */}

              <div className="flex gap-4 mt-5">
                <PartialRoundedBoxWithImage roundedClass={"rounded-[1.8em]"} bgClass={"bg-white"} padding={6} heightClass={"h-[55px]"} widthClass={"w-[55px]"} imagePath='/assets/forward-light-purple-icon.png' />
                <PartialRoundedBoxWithImage roundedClass={"rounded-[1.8em]"} bgClass={"bg-white"} padding={6} heightClass={"h-[55px]"} widthClass={"w-[55px]"} imagePath='/assets/back-light-purple-icon.png' />

              </div>

            </div>
            <div className="w-[50%]">
              <div className='flex gap-3 items-end'>
                <div><img src="/assets/groove-image.png" /></div>
                <div className="">
                  <p className='font-[600] text-[34px] opacity-100'>Jason Makki</p>
                  <p className='text-[16px] font-[500] opacity-70'>Engineer at GROOVE</p>
                  <p className='text-[16px] font-[500] opacity-70'>San Francisco</p>
                </div>
              </div>
              <SmallParagraph marginClass='' text={"Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they've been heavy hitters."} />
              {/* <p className="text-[22px] font-[400] w-[80%] mt-8"></p> */}
            </div>
          </div>
        </section>

      </ParallelContainer>



      {/* Fourth section */}
      <div className='py-[5.5em] mt-[5em]'>
        <div className='w-[90%] mx-auto'>
          <BigParagraph otherClasses='text-left' text={"How we ensure you're in good hands."} widthClass={"w-[48%]"} marginClass="" />
          <SmallParagraph marginClass='' otherClasses={"text-left w-[52%]"} text={"With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days."} />


          {/* PlayList */}
          <div className="w-[50%] mt-6">
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
            <section className='py-[3em] px-[1em]'>
              <StartJourneyStep buttonSideText={"Join Now"} description={"Explore the vast Zwilt marketplace to find the candidate that meets your needs."} label={"Find your next star performer."} value={1} mainColor={"#A387D1"} subColor={"white"} />
            </section>
          </ParallelContainer>
          <div className='my-8'></div>
          <ParallelContainer className={"bg-[#FFF7E1]"}>
            <section className='py-[3em] px-[1em]'>
              <StartJourneyStep buttonSideText={"Browser More"} description={"Assess the candidate through work history, transparent tests and video interviews."} label={"Evaluate to your heart's content."} value={2} mainColor={"#FFBE2E"} subColor={"white"} />
            </section>
          </ParallelContainer>
          <div className='my-8'></div>
          <ParallelContainer className={"bg-[#F3F3F3]"}>
            <section className='py-[3em] px-[1em]'>
              <StartJourneyStep buttonSideText={"Join Now"} description={"Onboard your candidate right away and start creating the next big thing."} label={"Start building your team."} value={3} mainColor={"black"} subColor={"#F3F3F3"} />
            </section>
          </ParallelContainer>
        </div>
      </div>


    </div>
  );
}

export default App;
