import React, { useState } from "react";
import {
  Box,
  Modal,
  Checkbox,
  InputLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Select,
  TextField,
  Radio,
  RadioGroup,
  MenuItem,
  InputAdornment,

} from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import RecieptTable from "./RecieptTable";
import moment from "moment/moment";
export const RecieptForm = () => {

  const [bankName, setBankName] = useState('')
  console.log(bankName)

  const [value, setValue] = useState('cheque');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  console.log(value, "Valueeee")
  console.log("Current date is:", moment(new Date()).format('DD/MM/YYYY'))
  // const [Date,setDate]=useState('')
  // var Date=(moment(new Date()).format('DD/MM/YYYY'))

  const [branch, setBranch] = useState('')
  const [iban, setIban] = useState('')

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-col  rounded-md border border-gray-300">
        <form
          className="flex w-full flex-col lg:px-12 md:px-8 px-2  pt-1 pb-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Min Div Of COntent */}
          <div className="w-full rounded-xl  lg:px-3 md:px-4 px-5">
            <h2 className="py-4">Voucher Detail</h2>
            {/* Main 1st div */}
            <div className="flex flex-col gap-y-4">
              {/* Div for Voucher Detail */}
              <div className="w-full grid lg:grid-cols-8 md:grid-cols-3 lg:gap-y-5 md:gap-y-7 gap-y-10 gap-x-5 p-5 border  border-gray-300">

                <div className="lg:col-span-2 md:col-span-1" >
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      label="Date"
                      autoFocus
                      format="DD-MM-YYYY"
                      value={moment(new Date())}
                      // onChange={console.log(value)}
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
                        // width: "200px"
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

                <div className="lg:col-span-4 md:col-span-2">
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
                      // width:"500px"
                    }}
                  >
                    <InputLabel id="narration" >Transaction Narration</InputLabel>
                    <Select
                      labelId="narration"
                      id="narration"
                      fullWidth
                      label="Transaction Narration"
                      inputProps={{
                        "aria-label": "Without label",
                      }}
                      displayEmpty
                      size="small"
                    >
                      <MenuItem value="trans1">Adjustment</MenuItem>
                      <MenuItem value="trans2">Transaction 2</MenuItem>
                      <MenuItem value="trans3">Transaction 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="lg:col-span-2 md:col-span-1">
                  <TextField
                    disabled
                    fullWidth
                    id="vouchernumber"
                    label="Voucher Number"
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
              {/* End voucher detail */}
              <h2 className="py-1">Payment Detail</h2>
              {/* Div for Payment Detail */}
              <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 lg:gap-y-5 md:gap-y-7 gap-y-10  gap-x-10 p-5 border  border-gray-300">
                <div className="flex lg:flex-row md:flex-row border border-blue-400 px-2">
                  <div className="mt-2 mr-3">
                    Mode Of Payment
                  </div>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                      <FormControlLabel value="cheque" control={<Radio />} label="Cheque" />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div>
                  <FormControl
                    // disabled={!cashMode[1] ? true : false}
                    disabled={value == 'cheque' ? false : true}
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
                    <InputLabel id="bank">Deposit Bank Name</InputLabel>
                    <Select
                      labelId="bank"
                      value={bankName}
                      id="bank"
                      fullWidth
                      label="Deposit Bank Name"
                      onChange={(e) => {
                        setBankName(e.target.value)
                        if (e.target.value == 'bank1') {
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
                      <MenuItem value="bank2">Bank 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div>
                  <TextField
                    disabled
                    fullWidth
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
                    disabled
                    value={iban}
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

                {/* End for Payment Detail */}
              </div>
              <div className="border  border-gray-300 py-3">
                <RecieptTable />
              </div>

            </div>
            {/* Buttons */}
            <div className="mt-5 flex  min-w-full justify-between">
              <div className="lg:ml-0 flex  justify-start">
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                  sx={
                    {
                      borderRadius: "5px",
                      backgroundColor: "#24388a",
                      ":hover": {
                        backgroundColor: '#1B254B'
                      }

                    }
                  }
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div className="flex justify-end">
                <button className="mr-5 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-5">
                  New
                </button>
                <button className="mr-2 transform rounded-md bg-blue-900 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-blue-950 focus:bg-blue-500 focus:outline-none sm:mr-0">
                  Submit
                </button>
              </div>
            </div>
            {/* Buttons End */}
          </div>
          {/* End Main DIv Of Content */}




        </form>
      </div>
    </div>
  );
};
