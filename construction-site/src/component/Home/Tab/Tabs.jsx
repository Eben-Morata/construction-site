import React,{useState} from 'react';
import './tabs.css';
import TabAll from '../TabAll/TabAll';
import TabBuilding from '../Tab Building/TabBuilding';
import TabCommercials from '../Tab Commercials/TabCommercials'
import TabResidentials from '../TabResidential/TabResidential';

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler =(index)=>{
      setTabIndex (index);
  }
  return (
    <div className='tabs-container'>
           <div className="tab-content">
             <div className="tabs">
               <button onClick={()=>tabIndexHandler(1)} className={tabIndex ===  1 ? "tab active-tab" :"tab"}>All</button>
               <button onClick={()=>tabIndexHandler(2)} className={tabIndex === 2 ? "tab active-tab" :"tab"}>Buildings</button>
               <button onClick={()=>tabIndexHandler(3)} className={tabIndex ===3 ? "tab active-tab" :"tab"}>Commercials</button>
               <button onClick={()=>tabIndexHandler(4)} className={tabIndex ===4 ? "tab active-tab" :"tab"}>Residentials</button>
             </div>
             <div className="conts">
                <div className={tabIndex === 1 ? " active-cont":"cont"}>
                     <TabAll/>
                </div>
                <div className={tabIndex === 2 ? " active-cont":"cont"}>
                    <TabBuilding />
                </div>
                <div className={tabIndex === 3 ? " active-cont":"cont"}>
                    <TabCommercials />
                </div>
                <div className={tabIndex === 4 ? " active-cont":"cont"}>
                    <TabResidentials />
                </div>
             </div>
           </div>
    </div>
  )
}

export default Tabs