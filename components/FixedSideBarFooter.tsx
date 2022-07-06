import React from "react";
import FooterLinkRow from "./FooterLinkRow";
import SiteLink from "./SiteLink";
function FixedSideBarFooter() {
  return (
    <div className="hidden lg:block mt-4">
      <FooterLinkRow>
        <SiteLink linkName="About" />
        <SiteLink linkName="Tictok Browse" />
        <SiteLink linkName="Newsroom" />
        <SiteLink linkName="Contact" />
        <SiteLink linkName="ByteDance" />
      </FooterLinkRow>
      <FooterLinkRow>
        <SiteLink linkName="TikTok for Good" />
        <SiteLink linkName="Advertise" />
        <SiteLink linkName="Developers" />
        <SiteLink linkName="Transparency" />
        <SiteLink linkName="TikTok Rewards" />
      </FooterLinkRow>
      <FooterLinkRow>
        <SiteLink linkName="Help" />
        <SiteLink linkName="Safety" />
        <SiteLink linkName="Terms" />
        <SiteLink linkName="Privacy" />
        <SiteLink linkName="Creator Portal" />
        <SiteLink linkName="Community Guidelines" />
      </FooterLinkRow>
    </div>
  );
}

export default FixedSideBarFooter;
