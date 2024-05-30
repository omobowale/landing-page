import React from "react";
import InfoStrip from "./InfoStrip";
import SkillLabelWithIcon from "./SkillLabelWithIcon";

function SkillListingDetails({ label, cardTitle }) {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:w-[90%] mx-auto text-left items-center">
      {/* Left */}
      <div className="lg:w-[30%] md:w-[78%] sm:w-[100%] lg:mb-0 mb-[1em]">
        <div className="font-[500] text-[24px] mb-5 lg:text-left sm:text-center vsm:text-left sm:ml-0 ml-7">{label}</div>
        <div className="font-[400] text-[16px] text-[#202229] lg:block block sm:flex sm:flex-row justify-center items-center gap-8 vsm:flex-col sm:mb-0 mb-4 sm:ml-0 ml-7">
          <div className="block sm:mb-0 sm:flex sm:flex-row vsm:flex-col items-center justify-between lg:gap-0 gap-8 lg:mb-3">
            <InfoStrip
              imageLink={"/assets/skills-vector.png"}
              value={989}
              text={"Skills"}
            />
            <InfoStrip
              imageLink={"/assets/subcategories-vector.png"}
              value={45}
              text={"Sub-categories"}
            />
          </div>
          <InfoStrip
            imageLink={"/assets/profiles-vector.png"}
            value={1011}
            text={"Profiles"}
          />
        </div>
      </div>

      {/* Right */}
      <div className="sm:w-auto w-full">
        <div className=" bg-white rounded-md p-4">
          <p className="font-[500] text-[16px] mb-5 pl-4 sm:text-left text-center">
            {cardTitle}
          </p>

          <div className="grid sm:grid-cols-6 grid-cols-2 vsm:items-center vsm:gap-4">
            <SkillLabelWithIcon
              label={"Shopify Developer"}
              imageLink={"/assets/shopify-icon.png"}
            />
            <SkillLabelWithIcon
              label={"Magento Developer"}
              imageLink={"/assets/magento-icon.png"}
            />
            <SkillLabelWithIcon
              label={"Data Scientist"}
              imageLink={"/assets/data-scientist-icon.png"}
            />
            <SkillLabelWithIcon
              label={"Webflow Developer"}
              imageLink={"/assets/web-flow-icon.png"}
            />
            <SkillLabelWithIcon
              label={"Dot Net Developer"}
              imageLink={"/assets/dot-net-icon.png"}
            />
            <SkillLabelWithIcon
              label={"Shopify Developer"}
              imageLink={"/assets/shopify-icon.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillListingDetails;
