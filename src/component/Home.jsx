import React, {createContext, useState} from 'react'
// import Select, { components } from "react-select";
import './Home.css'
import Sidebar from './Sidebar'
import etisalat  from '../images/9mobile.png'
import mtn from '../images/MTN_Logo.png'
import airtel from '../images/Airtel_logo.png'
import glo from '../images/glo.jpeg'
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
// import brightness from '../images/brightness.png'
import Mobile from '../images/Mobile.png'
import MobileApp from '../images/MobileApp.png'
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


const Home = () => {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr) =>(curr === "light" ? "dark" : "light"))
  } 

  const moon = <FaMoon size={20}/>;
  const sun = <IoIosSunny size={30}/>;

  const images =[Mobile, MobileApp]

  //  const options = [
  //    { label: "Option 1", value: 1 },
  //    { label: "Option 2", value: 2 },
  //    { label: "Option 3", value: 3 },
  //  ];

  //    const styles = {
  //      multiValueRemove: (css) => ({
  //        ...css,
  //        ":hover": { background: "#F4F5F9" },
  //      }),
  //    };
  // // const [isExpanded, setIsExpanded] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <container className="home" id={theme}>
        <Sidebar />

        <div className="body">
          <section className="header">
            <p>Hi Mitchel,</p>
            <h3>Welcome back 👋🏽</h3>
          </section>

          <section className="summary" id={theme}>
            <div className="account">
              <h3>
                <h5> </h5>Account Summary
              </h3>

              {/* <Select
              options={options}
              classNamePrefix={"react-select"}
              styles={styles}
              value={[options[1]]}
              isMulti 
              // placeholder="Hello"
            /> */}

              <div className="custom-select">
                <select name="" id="">
                  <option value="">Today</option>
                  <option value="">This Week</option>
                  <option value="">This Month</option>
                  <option value="">Last Month</option>
                  <option value="">This Year</option>
                  <option value="">Last Year</option>
                  <option value="">Custom Date</option>
                </select>
              </div>
            </div>
            <div className="IncExp">
              <div className="income">
                {/* <img src="" alt="" /> */}
                <p>Income</p>
                <h3>₦ 0</h3>
              </div>
              <div className="expenses">
                {/* <img src="" alt="" /> */}
                <p>Expenses</p>
                <h3>₦ 0</h3>
              </div>
            </div>
          </section>

          <section className="airtime">
            <div className="logos">
              <img src={mtn} alt="" />
              <img src={airtel} alt="" />
              <img src={glo} alt="" />
              <img src={etisalat} alt="" />
            </div>
            <div className="text">
              <p>Pay Bill</p>
              <p>Buy Airtime or Data</p>
            </div>
          </section>

          <section className="transactions">
            <h3>
              <h5> </h5>Most Recent Transactions
            </h3>
            <p>View All</p>
          </section>
        </div>

        <div className="right">
          <div className="brightness">
            {/* <img src={brightness} alt="" /> */}
            <div
              style={{
                marginTop: "3px",
              }}
            >
              {theme === "light" ? sun : moon}
            </div>
            <div className="switch">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </div>

          <div className="wallet">
            <div className="btn1">
              <button id="button1">NGN Wallet</button>
              <button id="button2">USD Wallet</button>
            </div>
            <p>-- --</p>
            <p>
              Wallet Balance | <button id="button3">show wallet</button>
            </p>
            <p>Your Wallet & Bank Account</p>
            <p>-- / --</p>

            <div className="btn2">
              <button id="button1">Fund Account</button>
              <button id="button2">Transfer</button>
            </div>
          </div>

          <div className='slideImg'>
            <div className='prev'></div>
            {images.map(image => { return (<img src={image} alt=''/>)})}
            <div className='next'></div>
            {/* <img src={Mobile} alt="" />
            <img src={MobileApp} alt="" /> */}
          </div>
        </div>
      </container>
    </ThemeContext.Provider>
  );
}

export default Home