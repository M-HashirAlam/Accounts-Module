import {React,useState,useRef} from 'react'

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
  import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
  import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

  

export const BankForm = () => {
  const bankName =useRef(null);
  const branchName =useRef(null);
  const branchCode =useRef(null);
  const bankAddress =useRef(null);
  const bankTelephone =useRef(null);
  const bankAcNumber =useRef(null);
  const currency =useRef(null);
  const iban =useRef(null);

  
  return (
        <div className="h-full w-full flex flex-col rounded-md  items-center justify-items-center md:px-[145px] px-0 ">
        <div className="flex w-full justify-center rounded-xl border border-gray-300 py-5 sm:px-5    md:py-10 md:px-10 lg:px-0">

            <form onSubmit={(e)=>e.preventDefault()}>
            <div className=" grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 lg:gap-y-14 lg:px-0">
              <div>
                <TextField
                  fullWidth
                  autoFocus
                  id="name"
                  label="Bank Name"
                  variant="outlined"
                  size="small"
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
                  inputProps={{
                    onKeyPress:(e)=>{
                      if (e.key=='Enter'){
                        e.preventDefault();
                        branchName.current.focus();
                      }
                    }
                  }
                  }
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  id="branch"
                  label="Branch Name"
                  variant="outlined"
                  size="small"
                  inputRef={branchName}
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      e.preventDefault();
                      branchCode.current.focus()
                    }
                  }}

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
                  id="branchCode"
                  label="Branch Code"
                  variant="outlined"
                  size="small"
                  inputRef={branchCode}
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      bankAddress.current.focus()
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
                  id="address"
                  label="Bank Address"
                  variant="outlined"
                  size="small"
                  inputRef={bankAddress}
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      bankTelephone.current.focus()
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
                  id="telephone"
                  label="Bank Telephone"
                  variant="outlined"
                  size="small"
                  inputRef={bankTelephone}
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      bankAcNumber.current.focus()
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
                  id="account"
                  label="Bank Account Number"
                  variant="outlined"
                  size="small"
                  inputRef={bankAcNumber}
                  onKeyPress={(e)=>{
                    if (e.key=='Enter'){
                      iban.current.focus()
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

              
              

              <div >
                    <FormControl
                      fullWidth
                      size="small"
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
                    >
                      <InputLabel id="nature">Account Nature</InputLabel>
                      <Select
                        labelId="nature"
                        
                        id="nature"
                        fullWidth
                        label="Flat/Shop No."
                        inputProps={{
                          "aria-label": "Without label",
                        }}
                       
                        displayEmpty
                        size="small"
                      >
                        <MenuItem value="locker">Locker</MenuItem>
                        <MenuItem value="current">Current</MenuItem>
                        <MenuItem value="saving">Saving</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
              
              
              
              
  
                  <div>
                    <FormControl
                      fullWidth
                      size="small"
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
                    >
                      <InputLabel id="currency">Currency</InputLabel>
                      <Select
                        labelId="currency"
                        
                        id="currency"
                        fullWidth
                        label="currency"
                        inputProps={{
                          "aria-label": "Without label",
                        }}
                       
                        displayEmpty
                        size="small"
                      >
                        <MenuItem value="usd">USD</MenuItem>
                        <MenuItem value="eur">EUR</MenuItem>
                        <MenuItem value="bhd">BHD</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div>
                    <FormControl
                      fullWidth
                      size="small"
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
                    >
                      <InputLabel id="status">Status</InputLabel>
                      <Select
                        labelId="status"
                        
                        id="status"
                        fullWidth
                        label="status"
                        inputProps={{
                          "aria-label": "Without label",
                        }}
                       
                        displayEmpty
                        size="small"
                      >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">In Active</MenuItem>
                        
                      </Select>
                    </FormControl>
                  </div>

                  <div>
                <TextField
                  fullWidth
                  id="iban"
                  label="IBAN"
                  variant="outlined"
                  size="small"
                  inputRef={iban}
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
              <div className="mt-6 flex justify-between">
            <div className="flex w-full justify-end">
            <button className="mr-5 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-5">
                New
              </button>
              <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>
              
            </div>
          </div>
            </form>
            </div>

        {/* </div> */}
     </div>
  )
}
