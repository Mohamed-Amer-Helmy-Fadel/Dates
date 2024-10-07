import {  Container } from "react-bootstrap";
import {person} from "./data.js";
import {DatesCount  } from "./component/DatesCount.js";
import {DatesList} from "./component/DatesList.js";
import DatesAction from "./component/DatesAction.js";
import { useEffect, useState } from "react";
function App() {
  const  [personData, setPersonData] = useState(person);
    
    const handleDeleteAll = () => {
        setPersonData([]);
    }
    const handleShowAll = () => {
        setPersonData(person);
    }
    useEffect((e) => {
     setPersonData([]);
    },[]
    )


  return (
    <div className="font color-body">
      <Container className="py-5">

      <DatesCount person={personData} />
      <DatesList person={personData} />
      <DatesAction deletData={handleDeleteAll} showData={handleShowAll} />

      </Container>
    </div>
  );
}

export default App;
