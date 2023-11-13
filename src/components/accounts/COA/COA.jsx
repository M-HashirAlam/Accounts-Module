import React,{useState,useEffect} from 'react'
import RichObjectTreeView from './COATree'
import { AppContext } from '../../../Context/AppContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChartsTable from './COATable';
import useManageTree from '../ManageTree';





// console.log(obj,"AAAAAAAAA")
const COA = () => {
  const style = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const style1 = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const { childData, setChildData,mainName,setmainName  } = React.useContext(AppContext)
  // console.log(childData,"Child")
  const COAData = useManageTree()
  console.log(COAData,"12345562")
  console.log(mainName.name,"wwwwwwww")
  const [changeName,setChangeName]=useState(mainName.name)
  // function add(){
  //   COAData.push(obj)
  // }
  const { openMenu ,setMenuPosition,setOpenMenu,
    menuPosition} = React.useContext(AppContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // for change
  const [change,setChange]=useState(false)
  const handleOpenChange=()=>{setChange(true)}
  const handleCloseChange=()=>{setChange(false)}

  // For Confirmation
  const [confirm,setConfirm]=useState(false)
  const handleOpenConfirm=()=>{setConfirm(true)}
  const handleCloseConfirm=()=>{setConfirm(false)}

 
  // Test
  // setChildData([obj])
  
  // setChildData(...childData,[obj])
  // console.log(obj,"WQWQWEW")
  console.log(childData)
  
  const [name,setName]=useState("")
  
  
  function Add(){
    if(childData.length>0){
      let dd =childData[childData.length-1].accId.split('')
      console.log(dd.pop())
      // .splice(childData[childData.length-1].accId.split('').length-1))
      let idVal = childData[childData.length-1].accId.split('').pop() + parseInt([childData[childData.length-1].accId.split('').length-1])+1
      const obj={
      accId: idVal,
      aclevel:childData[0].aclevel,
      children:[],
      id:100000,
      name:name,
      type:childData[0].type
    }
    childData.push(obj)
  }
  setConfirm(false)
  setOpen(false)
}

function Abc(e){

}
  return (
    // main div
    <div className='bg-white h-screen S p-2 pt-5'>
    <h1 className='text-4xl font-bold'>Charts Of Accounts</h1>
  
    <div onClick={(e)=>{e.preventDefault(); setOpenMenu(false); }}>
      
      {/* Main Parent OF Tree */}
      
            <div onContextMenu={(e) => {
            // e.preventDefault(); // prevent the default behaviour when right clicked 
            setMenuPosition({
                x: e.pageX,
                y: e.pageY,
              });
          }}>
        {openMenu && 
            <div className='bg-white border-solid border-4 border-shadow-500 h-fit  z-10 flex flex-col' style={{position:'absolute',top:menuPosition.y,left:menuPosition.x}}>
            <button onClick={handleOpen}>Add</button>
            <button onClick={handleOpenChange}>Change</button>
          </div> 
        }
        {/* Main tree View */}
      <div  id="modal-switch" > 
          
            <RichObjectTreeView dataForCOA={COAData}/>
        </div>
        {/* End Tree View */}

        </div> 
        {/* End Of Parent of Tree */}
        <div>
      {/* Model For ADD */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD
          </Typography>
          <Typography id="modal-modal-description" sx={{ marginTop:'1px' }}>
            <div className='flex flex-col'>
            
            <p>Account Title:<input className='ml-3 border-4 border-blue-900 w-80 ' type='text' onChange={(e)=>{setName(e.target.value)}} /></p>
            
            <div className='flex items-end justify-end'>
            <button onClick={handleOpenConfirm} className=" mt-4 h-9 w-32 transform rounded-md bg-blue-900  leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>
              </div>
              </div>
          </Typography>
        </Box>
      </Modal>

      {/* for change */}
      <Modal
        open={change}
        onClose={handleCloseChange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change
          </Typography>
          <Typography id="modal-modal-description" sx={{ marginTop:'1px' }}>
            <div className='flex flex-col'>
            <p>Account Title:<input className='ml-3 border-4 border-blue-900 w-80 ' type='text' /></p>
            <div className='flex items-end justify-end'>
            <button  onClick={handleOpenConfirm} className=" mt-4 h-9 w-32 transform rounded-md bg-blue-900  leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>
              </div>
              </div>
          </Typography>
        </Box>
      </Modal>

      {/* New Model For Confim */}
      <Modal
        open={confirm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Confirm?
          </Typography>
          <Typography id="modal-modal-description" sx={{ marginTop:'1px' }}>
            <div className='flex flex-col'>
            <p>Do you want to confirm your Changes? </p>
            <div className='flex items-end justify-end gap-x-5'>
            <button onClick={Add} className=" mt-4 h-9 w-14 transform rounded-md bg-blue-900  leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Yes
              </button>
              <button onClick={handleCloseConfirm} className=" mt-4 h-9 w-14 transform rounded-md bg-red-800  leading-5 text-white transition-colors duration-200 hover:bg-red-900 focus:outline-none sm:mr-0">
                No
              </button>
              </div>
              </div>
          </Typography>
        </Box>
      </Modal>
      {/* End Model FOr Confirmation */}
      
      
    </div>

    {/* End Modal */}

        
</div> 
</div>
    
  )
}

export default COA