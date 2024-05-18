import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { text } from "stream/consumers";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import BARButton from "./Components/Button";
import Firstinp from "./Components/Input";
function App() {
  //  const[count,setcount]=useState(100)
//   const [txt, settxt] = useState("abc");
//   const [txtlist, setlist] = useState<any>([]);
// const delall = ()=>{
//   setlist([])
// }
  // const del = (i: any) => {
  //   txtlist.splice(i, 1);
  //   setlist([...txtlist]);
  // };

//   const Edit = (x: any) => {
//     let a = prompt("Enter new value")
// if (a !== null){
//   const newList = [...txtlist];
//   newList[0] = a;
//   setlist(newList);
// }
//     console.log(txtlist[0]);
//   };
  return (
    // <div className="App">
    //   <p>{txt}</p>
    //   <input
    //     type="text"
    //     onChange={(inp) => {
    //       settxt(inp.target.value);
    //     }}
    //   />
    //   <button
    //     onClick={() => {
    //       txtlist.push(txt);
    //       console.log(txtlist);
    //       setlist([...txtlist]);
    //     }}
    //   >
    //     Add
    //   </button>
    //         {txtlist.map((x: any, i: any) => {
    //     return (
    //       <p key={i} className="pera">
    //         {x}
    //         <button
    //           onClick={(txtlist) => {
    //             del(i);
    //           }}
    //         >
    //           Delete
    //         </button>
    //         <button
    //           onClick={() => {
    //             Edit(x);
    //           }}
    //         >
    //           Edit
    //         </button>
    //         <button
    //           onClick={delall}
    //         >
    //         DeletAll
    //         </button>
    //       </p>
    //     );
    //   })}
    // </div>

// {/* <div>    <BARButton className="btn btn-primary" btnValue="login" btnClick = {()=>{
//   console.log("Buton Click")
// }} />
//     <BARButton style={{color :"red"}} className="btn btn-primary" btnValue="Singup" />
//     <BARButton className="btn btn-danger" btnValue="Demo" />
//     </div> */}
    <div>
< Firstinp placeholder="Search" onChange={(ev : any)=>{console.log(ev.target.value)}}/>
    </div>
  );
}

export default App;
