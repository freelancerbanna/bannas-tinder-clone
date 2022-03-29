import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { ChatContainer } from "../components";
const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://images.pexels.com/photos/11012766/pexels-photo-11012766.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: "https://images.pexels.com/photos/11500407/pexels-photo-11500407.jpeg",
    },
    {
      name: "Monica Hall",
      url: "https://images.pexels.com/photos/11459874/pexels-photo-11459874.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "https://images.pexels.com/photos/11012766/pexels-photo-11012766.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://images.pexels.com/photos/11500407/pexels-photo-11500407.jpeg",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="relative flex justify-between w-screen overflow-hidden">
      <ChatContainer />
      <div className="overflow-hidden flex flex-col h-screen justify-center items-center w-[70%]">
        <div className="!w-[400px] !h-[650px]">
          {characters.map((character) => (
            <TinderCard
              className="absolute"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="relative bg-[#fff] !w-[400px] !h-[650px] rounded-[20px] bg-cover bg-center shadow-lg "
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection && (
          <p className="mt-2 text-[#811b1b] font-semibold">
            You swiped {lastDirection}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
