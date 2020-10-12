import React, { useEffect, useState } from "react";
import "./Projects.css";

const dataX = [
    {
        "title": "Battleship",
        "language": "C#",
        "type": "windows forms app"
    },
    {
        "title": "Covid-19",
        "language": "Javascript",
        "type": "web app"
    },
    {
        "title": "Congress",
        "language": "React Native",
        "type": "mobile app"
    }
];

//destructing spec from props - see dev tools
const Item = ({spec}) => {
    const {title, language, type} = spec;
    return(
        <div className="project-item">
            <h1>{title}</h1>
            <h2>{language}</h2>
            <h3>{type}</h3>
        </div>
    );
};

const Projects = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataX);
        console.log(data);
    });
  return (
    <div className="projects-container">
        <ul>

      {data.map(el => (
          <li>
             <Item key={el.title} spec={el}/> 
        </li>
      ))}
        </ul>
    </div>
  );
};

export default Projects;