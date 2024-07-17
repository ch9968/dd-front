import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cat from "../../assets/common/cat.jpg";

const Cards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople([
      {
        partnerId: "2",
        name: "Kieran",
        age: "22",
        gender: "male",
        imageLink: cat,
        location1: "Seoul",
        location2: "Mapo",
        hobby1: "수영",
        hobby2: "찬희랑 놀기",
        hobby3: "자기",
      },
    ]);

    /*
    const fetchPeopleData = async () => {
      try {
        const response = await fetch("https://api.example.com/people"); 
        if (!response.ok) {
          throw new Error("네트워크 에러");
        }
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchPeopleData();
    */
  }, []);

  return (
    <SLayout>
      {people.map((person) => (
        <SCardContainer key={person.partnerId}>
          <SCardWrapper
            style={{ backgroundImage: `url(${person.imageLink})` }}
            className="card"
          >
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <h3>{person.location}</h3>
            <h3>{person.veganType}</h3>
            <h4>{person.hobby1}</h4>
            <h4>{person.hobby2}</h4>
            <h4>{person.hobby3}</h4>
          </SCardWrapper>
        </SCardContainer>
      ))}
    </SLayout>
  );
};

export default Cards;

const SLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const SCardContainer = styled.div`
  position: relative;
`;

const SCardWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 400px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  h1 {
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  h3 {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  h4 {
    color: #d9d9d9;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
