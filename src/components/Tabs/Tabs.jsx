import React, { useState } from 'react'
import "./Tabs.css";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("");

    const handleClickTabs = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    } 

  return (
    <React.Fragment>

        <div className='links'>
            <a onClick={(e) => {handleClickTabs(e, "desc")}} href="">Desc</a>
            <br />
            <a onClick={(e) => {handleClickTabs(e, "info")}} href="">İnfo</a>
        </div>

        <div className={`content desc ${activeTab === "desc" ? "active": ""}`}>
            <h2>Desc</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius eligendi iusto corporis reprehenderit sequi accusantium. Placeat dolore harum debitis impedit ab ullam blanditiis id iusto architecto, soluta accusantium cupiditate!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius eligendi iusto corporis reprehenderit sequi accusantium. Placeat dolore harum debitis impedit ab ullam blanditiis id iusto architecto, soluta accusantium cupiditate!
            </p>
        </div>

        <div  className={`content info ${activeTab === "info" ? "active": ""}`}>
            <h2>İnfo</h2>
            <table>
                <tbody>
                <tr>
                    <th>Color</th>
                    <td>
                    <p>
                        Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                        White
                    </p>
                    </td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>
                    <p>XXS, XS, S, M, L, XL, XXL</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </React.Fragment>
  )
}

export default Tabs