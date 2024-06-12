"use client";
import FooterSection from "./FooterSection";

function FollowUsToggle({ handleFollow }) {
  return (
    <div className="flex-1">
      <FooterSection label="CONNECT">
        Sign up for first access to latest collections, campaigns and videos.
      </FooterSection>
      <button onClick={handleFollow}>Follow Us</button>
    </div>
  );
}

export default FollowUsToggle;
