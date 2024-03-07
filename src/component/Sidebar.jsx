import React from 'react'
import './Sidebar.css'
import logo from '../images/branddrive.png'
import settings from '../images/settings.svg'
import { MdOutlineDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineInsights } from "react-icons/md";
import { FaFileExport } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="img">
        <img src={logo} alt="" />
      </div>

      <div className="list">
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <MdOutlineDashboard />
          </li>
          <li>Dashboard</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <IoWalletOutline />
          </li>
          <li>Wallet & Cards</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <AiOutlineTransaction />
          </li>
          <li>Transactions</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <MdFormatIndentIncrease />
          </li>
          <li>Income</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <FaFileExport />
          </li>
          <li>Expenses</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <MdOutlineManageSearch />
          </li>
          <li>Manage Budget</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <AiOutlineLink />
          </li>
          <li>Payment Pages</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <FaMoneyBills />
          </li>
          <li>Bills & Utilities</li>
        </ul>
        <ul style={{ display: "flex", gap: 10 }}>
          <li>
            <MdOutlineInsights />
          </li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="setting">
        <div>
          <img src={settings} alt="" />
        </div>
        <div className="text">
          <h3>Mitchel</h3>
          <p>Mitchelogbu37@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar