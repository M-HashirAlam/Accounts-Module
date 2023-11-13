import React,{useRef} from 'react'

import {
    InputLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Select,
    TextField,
    MenuItem,
  } from "@mui/material";

export const TransactionForm = () => {
  const narration=useRef(null);
  return (
    // <div className='flex flex-col justify-center items-center h-full '>
        <div className="h-full w-full lg:w-[64rem] md:w-[47rem]  flex flex-col rounded-md border border-gray-300  justify-items-center lg:p-[30px] md:p-[25px] p-[15px] ">
        <div className="flex w-full  rounded-xl ">

            <form className='w-full' onSubmit={(e)=>e.preventDefault()}>
               <div className='border border-gray-300 lg:px-4 lg:py-10 md:p-3 p-2 grid grid-cols-1 justify-center gap-5 gap-y-11  lg:grid lg:justify-center lg:gap-x-5 lg:grid-cols-4  md:grid md:justify-center md:gap-x-5 md:grid-cols-2 sm:grid sm:justify-center sm:gap-x-5 sm:grid-cols-2'>

               <div>
                <TextField
                  fullWidth
                  id="abbreviation"
                  label="Abbreviation"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      narration.current.focus()
                    }
                  }
                }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "& fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1b3bbb",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "#24388a",
                    },
                    background: "#fff",
                  }}
                />
              </div>

              <div>
                <TextField
                  fullWidth
                  disabled
                  id="trans"
                  label="Transaction Id"
                  variant="outlined"
                  size="small"
                  autoFocus
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      narration.current.focus()
                    }
                  }
                }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "& fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1b3bbb",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "#24388a",
                    },
                    background: "#fff",
                  }}
                />
              </div>
              
              <div className='sm:col-span-2'>
                <TextField
                  fullWidth
                  id="narration"
                  label="Narration"
                  variant="outlined"
                  size="small"
                  inputRef={narration}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "& fieldset": {
                        borderColor: "#1b3bbb",
                      },
                      "&:hover fieldset": {
                        borderColor: "#1b3bbb",
                      },
                    },
                    "& label.Mui-focused": {
                      color: "#24388a",
                    },
                    background: "#fff",
                  }}
                />
              </div>



              </div>
              {/* Buttons */}
            <div className="mt-5 flex w-full justify-end">
              <button className="mr-5 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-5">
                New
              </button>
              <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>

            </div>
            {/* Buttons */}
              
            </form>
            
            
            </div>


        </div>
    // </div>
  )
}
