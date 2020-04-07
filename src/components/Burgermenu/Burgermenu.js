import React from 'react';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./Burgermenu.css";



const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
  };
  const contentStyle = {
    background: "rgba(41,55,55,0.1)",
    width: "80%",
    border: "none"
  };

  
  const Burgermenu = (props)=> {
  
      // console.log(props.countryList)
        return (
            <div style={styles}>
            <Popup
              modal
              overlayStyle={{ background: "rgba(55,55,55,0.98" }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <Menu 
                            close={close}
                            countryList={props.countryList}
                           click={props.click}
                        />}
            </Popup>
          </div>
)}
  

export default Burgermenu;


