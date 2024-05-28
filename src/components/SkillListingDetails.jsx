import React from "react";
import InfoStrip from "./InfoStrip";
import SkillLabelWithIcon from "./SkillLabelWithIcon";

function SkillListingDetails({ label, cardTitle }) {
  return (
    <div className="flex justify-between w-[90%] mx-auto text-left items-center">
      {/* Left */}
      <div className="w-[30%]">
        <div className="font-[500] text-[24px] mb-5">{label}</div>
        <div className="font-[400] text-[16px] text-[#202229]">
          <div className="flex justify-between mb-3">
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
          />{" "}
        </div>
      </div>

      {/* Right */}
      <div>
        <div className="w-[] bg-white rounded-md p-4">
          <p className="font-[500] text-[16px] mb-5 pl-4">{cardTitle}</p>

          <div className="grid grid-cols-6 gap-4 items- justify-">
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
