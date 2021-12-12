import './App.css';
import { useState } from "react";

function App() {
  
    const [name, nameChange] = useState("");
  // getter setter
  const [rollNo, setRollNo] = useState();
  // name is the state (current data of you app/component) here
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => nameChange(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter roll no."
        onChange={(event) => setRollNo(event.target.value)}
      />
      {name ? 
        <p>
          Hi {name}!! Welcome to Guvi. {name} ({rollNo}) nice day.
        </p>
      :  ""
      }
    
       <button onClick={() => setColor(color === "orange" ? "grey" : "orange")}>
        Change the color of the div orange to grey to orange
      </button>

       <div
        style={{ backgroundColor: "grey", height: "25px", width: "100px" }}
      ></div>
      
    </div>
  );
}

export default App;














import { useState } from "react";
import "./styles.css";

// Two types of component - function & class (old)
// function component
// function useState1(initalvalue){
//   let state = initalvalue;
//   function fn(value){
//     state = value
//   }

//   return [state, fn];
// }

export default function App() {
  const [name, nameChange] = useState("");
  // getter setter
  const [rollNo, setRollNo] = useState();
  const [color, setColor] = useState("orange");
  const [newColor, setNewColor] = useState("");
  const defaultColors = [
    "Pink",
    "orange",
    "blue",
    "teal",
    "cyan",
    "papayawhip"
  ];
  const [colors, setColors] = useState(defaultColors);
  // defaultColors onetime will be set to colors
  // After that React only monitor only setColors (if called will change colors)

  // name is the state (current data of you app/component) here
  //  rollNo = 4; // JS in world it is not allowing to change
  // ctr + /
  //  jsx starts here
  return (
    <main className="App">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => nameChange(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter roll no."
        onChange={(event) => setRollNo(event.target.value)}
      />
      {/* Task is to not show any message when there is no name */}
      {/* Clue is that inside braces the expression would be evaluated */}
      {/* ternary operator condition? <true> : <false> */}
      {/* Interpolation */}
      {name ? (
        <p>
          Hi {name}!! Welcome to Guvi. {name} ({rollNo}) nice day.
        </p>
      ) : (
        ""
      )}
      {/* Create a button  orange -> grey -> orange*/}
      {/* onClick -> change state -> inturn it will change the color*/}
      {/* onClick u will change state */}
      <button onClick={() => setColor(color === "orange" ? "grey" : "orange")}>
        Change the color of the div orange to grey to orange
      </button>
      {/* backgroundColor state */}
      <div
        style={{
          "background-color": color,
          height: "25px",
          width: "100px",
          marginTop: "5px",
          marginBottom: "5px"
        }}
      ></div>
      <p> Add the color to the bottom of the list </p>
      <input onChange={(event) => setNewColor(event.target.value)} />
      {/* {{'good':'nice'}} */}
      <button onClick={() => setColors([...colors, newColor])}>
        Add Color
      </button>
      {colors.map((cl, deleteIdx) => (
        <div style={{ display: "flex", gap: "5px", margin: "5px" }}>
          <div
            style={{
              "background-color": cl,
              height: "25px",
              width: "100px",
              marginTop: "5px"
            }}
          ></div>
          <button
            onClick={() =>
              setColors(colors.filter((el, index) => deleteIdx !== index))
            }
            style={{
              borderRadius: "50%",
              color: "crimson",
              fontWeight: "bolder"
            }}
          >
            X
          </button>
        </div>
      ))}
      {/* clue 1 */}
      {/* In react it can return only one jsx element */}
      {/* Wrap it inside a div */}
      {/* Task 1 */}
      {/* Create a button delete side by side to all color */}
      {/* Task 2 */}
      {/* onClick of delete corresponding color should be deleted */}
      {/* clue 2 */}
      {/*  filter method & with index */}
      {/* clue 3 */}
      {/* map second argument idx */}

      {/* For monday task */}
      {/* Create input where whatever color you type should change backgroundColor of itself (input) */}
      {/* toggle between multi colors red, blue, orange, grey - Array & cycle the array  */}
    </main>
  );
  // jsx ends here
}

// var x = 5;
// x = 5*4 + 9;
// var y =  4 > 5 ? 7: 8;
(function () {
  return 4;
})();

// function x(){
//   return (
//    5
//   )
//   ;
// }

function x() {
  return;
  5;
}

console.log("x value is", x());

{
  5;
}
