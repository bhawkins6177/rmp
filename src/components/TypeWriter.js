import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter(){
    return(
        <Typewriter 
        color= "secondary"
        options={{
            strings: [
              "Lawn Care",
              "Aeeration",
              "Seeding",
              "Great Prices",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    )
}

export default TypeWriter;