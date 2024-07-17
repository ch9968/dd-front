import React from "react";
import { useParams } from "react-router-dom";

const SettingPage = () => {
  const { memberId } = useParams();
  return <div>Setting Page for Member {memberId}</div>;
};

export default SettingPage;
