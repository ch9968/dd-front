import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/common/icn_back.svg";
import heartIcon from "../../assets/common/icn_heart.svg";
import thumbsIcon from "../../assets/common/icn_thumbs.svg";
import passIcon from "../../assets/common/icn_pass.svg";

const SwipeButtons = () => {
  return (
    <SLayout>
      <img src={backIcon} alt="Back Icon" />
      <img src={heartIcon} alt="Heart Icon" />
      <img src={thumbsIcon} alt="Thumbs Icon" />
      <img src={passIcon} alt="Pass Icon" />
    </SLayout>
  );
};

export default SwipeButtons;

const SLayout = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-around;
`;
