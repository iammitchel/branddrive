import React from 'react'
// import Select, { components } from "react-select";
import './Home.css'
import Sidebar from './Sidebar'
import etisalat  from '../images/9mobile.png'
import mtn from '../images/MTN_Logo.png'
import airtel from '../images/Airtel_logo.png'
import glo from '../images/glo.jpeg'
import brightness from '../images/brightness.png'


const Home = () => {

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
    <container className="home">
      <Sidebar />

      <div className="body">
        <section className="header">
          <p>Hi Mitchel,</p>
          <h3>Welcome back 👋🏽</h3>
        </section>

        <section className="summary">
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
          <img src={brightness} alt="" />
        </div>
      </div>
    </container>
  );
}

export default Home