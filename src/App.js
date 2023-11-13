
import './App.css';
import { AppContext } from "./Context/AppContext";
import React,{useState,useMemo} from 'react';
import Example from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Reciept from "./components/accounts/reciept/Reciept"
import Payment from "./components/accounts/paymentVoucher/Payment"
import Bank from "./components/accounts/Bank/Bank"
import Reconcile from "./components/accounts/bankReconcilation/Reconcile"
import COA from "./components/accounts/COA/COA"
import Journal from "./components/accounts/journal/Journal"
import Transaction from "./components/accounts/Transaction/Transaction"
import Home from './components/Home';



function App() {
  const [openMenu, setOpenMenu] = useState(false);
const [isLogin, setIsLogin] = useState(true);
const [PDFComponent, setPDFComponent] = useState(<div></div>);
  const [childData, setChildData] = useState([]);
  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const[mainName,setmainName]=useState({})
  // const [childData, setChildData] = React.useState([])
  const StateContainer = useMemo(
    () => ({ PDFComponent, setPDFComponent, isLogin, setIsLogin,openMenu, setOpenMenu,menuPosition, setMenuPosition,childData,setChildData,mainName,setmainName }),
    [PDFComponent, setPDFComponent, isLogin, setIsLogin,openMenu, setOpenMenu,menuPosition, setMenuPosition,childData,setChildData,mainName,setmainName]
  );
  return (
    <AppContext.Provider value={StateContainer}>
      <Example />
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/reciept" element={<Reciept />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/coa" element={<COA />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/reconcile" element={<Reconcile />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      
    </BrowserRouter>
    
    </AppContext.Provider>
  );
}

export default App;
