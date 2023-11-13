import React,{useState} from "react";
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
import moment from "moment/moment";

export const ReconcileForm = () => {
  const [iban, setIban] = useState('')
  const [branch,setBranch]=useState('')
  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-col rounded-md border border-gray-300">
        <form
          className="flex w-full flex-col lg:px-14 md:px-12 px-6  pt-10 pb-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full rounded-md border border-gray-300 lg:px-10 md:px-7 px-6 pb-8">
            <h2 className="py-4">Filter</h2>
            {/* Div for Filter */}
            <div className="grid w-full grid-cols-1 gap-4 lg:grid lg:w-full lg:grid-cols-3 lg:gap-y-10 lg:gap-x-5 md:grid md:w-full md:grid-cols-2 md:gap-10 gap-y-10">

              <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="As On:"
                    autoFocus
                    format="DD-MM-YYYY"
                    value={moment(new Date())}
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
                    slotProps={{
                      textField: {
                        size: "small",
                        fullWidth: true,
                      },
                    }}
                  />
                </LocalizationProvider>
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
                  <InputLabel id="bankname">Bank Name</InputLabel>
                  <Select
                    labelId="bankname"
                    id="bankname"
                    fullWidth
                    label="Bank Name"
                    onChange={(e) => {
                      // setBankName(e.target.value)
                      // setTimeout(() => {
                        
                      //   console.log(bankName,'1111')
                      // }, 3000);
                        if(e.target.value=='bank1'){
                        {
                          setBranch('Branch1');
                          setIban('GB33BUKB20201555555555')
                          
                        }
                      }
                    }}
                    inputProps={{
                      "aria-label": "Without label",
                    }}
                    displayEmpty
                    size="small"
                  >
                    <MenuItem value="bank1">Bank 1</MenuItem>
                    <MenuItem value="bank2">Bank 2</MenuItem>
                    <MenuItem value="bank3">Bank 3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* <div>
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
                  <InputLabel id="clear">Cheque Status</InputLabel>
                  <Select
                    labelId="clear"
                    id="clear"
                    fullWidth
                    label="Clear/Unclear"
                    inputProps={{
                      "aria-label": "Without label",
                    }}
                    displayEmpty
                    size="small"
                  >
                    <MenuItem value="flat1">All</MenuItem>
                    <MenuItem value="flat2">Clear</MenuItem>
                    <MenuItem value="flat3">Unclear</MenuItem>
                  </Select>
                </FormControl>
              </div> */}

              <div>
                  <TextField
                    fullWidth
                    disabled
                    value={branch}
                    id="branch"
                    label="Branch Name"
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
                  />
                </div>

              <div>
                <TextField
                  fullWidth
                  value={iban}
                  disabled
                  id="iban"
                  label="IBAN"
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
                />
              </div>
              
            </div>
          </div>
          <div className="mt-10 w-full rounded-md border border-gray-300 lg:px-10 md:px-7 px-6 pb-8">
            <h2 className="py-4">Reconcile</h2>
            {/* Div for Reconcile */}
            <div className="grid w-full grid-cols-1 gap-4 lg:grid lg:w-full lg:grid-cols-3 lg:gap-y-10 lg:gap-x-5 md:grid md:w-full md:grid-cols-2 md:gap-10 gap-y-10">

              <div>
                <TextField
                  fullWidth
                  disabled
                  id="bankstatement"
                  label="Bank Statement"
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
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  disabled
                  id="pending"
                  label="Pending Entries"
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
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  disabled
                  id="ledger"
                  label="Bank Ledger"
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
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row pt-3">
            <FormGroup
            sx={{
              display:"flex",
              flexDirection:"row"
            }} 
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#1b3bbb",
                      "&.Mui-checked": {
                        color: "#1B254B",
                      },
                    }}
                  />
                }
                label="Clear"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#1b3bbb",
                      "&.Mui-checked": {
                        color: "#1B254B",
                      },
                    }}
                  />
                }
                label="Unclear"
              />
            </FormGroup>
          </div> */}
          {/* <div className="mt-3 flex w-full justify-end">
            <button className="mr-5 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-5">
                New
              </button>
              <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                Submit
              </button>
              
            </div> */}
          {/* <div className="mt-5 flex w-full justify-end">
            <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};
