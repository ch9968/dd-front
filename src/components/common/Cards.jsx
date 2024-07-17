import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople([
      {
        partnerId: "2",
        name: "Kieran",
        age: "22",
        gender: "male",
        imageLink: "https://postimg.cc/WtDDfk9h",
        location1: "Seoul",
        location2: "Mapo",
      },
    ]);

    // Uncomment this block when you have a valid URL
    /*
    const fetchPeopleData = async () => {
      try {
        const response = await fetch("https://api.example.com/people"); // Replace with the actual URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error("Failed to fetch people data:", error);
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
            <h3>{person.name}</h3>
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
  position: relative; /* Changed from absolute to relative for better stacking */
`;

const SCardWrapper = styled.div`
  position: relative;
  width: 330px;
  padding: 20px;
  max-width: 330px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  h3 {
    position: absolute;
    bottom: 10px;
    color: white;
  }
`;
