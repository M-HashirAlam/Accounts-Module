import React, { useState } from "react";
import {
  Box,
  Modal,
  InputLabel,
  FormControl,
  Select,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import JournalTable from "./journalTable";
import moment from "moment/moment";

export const JournalForm = () => {
  const [narration, setNarration] = useState('')
  const [voucher, setVoucher] = useState('')
  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-col rounded-md border border-gray-300">
        <form
          className="flex w-full flex-col lg:px-0 md:px-1 px-2 pt-2 pb-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full rounded-md lg:px-10 md:px-7 px-5 pt-5">
            <div className="border p-5 border-gray-300  grid w-full grid-cols-1 gap-4 lg:grid lg:w-full lg:grid-cols-4 lg:gap-y-10 gap-y-10 lg:gap-x-5 md:grid md:w-full md:grid-cols-3 md:gap-10">

              <div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Date"
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
              <div className="lg:col-span-2 md:col-span-2">
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
                  <InputLabel id="narration">Trans. Narration</InputLabel>
                  <Select
                    labelId="narration"
                    id="narration"
                    fullWidth
                    label="Trans. Narration"
                    onChange={((e) => {
                      setNarration(e.target.value)
                      if (e.target.value == 'trans1') {
                        {
                          setVoucher('tCfVmXSb')
                        }
                      }
                    })}
                    inputProps={{
                      "aria-label": "Without label",
                    }}
                    displayEmpty
                    size="small"
                  >
                    <MenuItem value="trans1">Adjstment</MenuItem>
                    <MenuItem value="trans2">Adjstment 2</MenuItem>
                    <MenuItem value="trans3">Adjstment 3</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <TextField
                  fullWidth
                  disabled
                  id="vouchernumber"
                  label="Voucher Number"
                  variant="outlined"
                  value={voucher}
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
            <div className="border mt-8 border-gray-300 py-3">
              <JournalTable />
            </div>

            {/* Total */}
            <div className="flex flex-row w-full">
            <div className="flex flex-row mt-3">
              <p>Total:</p>
              <input disabled className="ml-1 h-6 border  bg-gray-200" type="text" id="fname" name="fname"></input>
              <input disabled className=" ml-1 h-6 border  bg-gray-200" type="text" id="fname" name="fname"></input>   
            </div>
            </div>
            {/* End Total */}

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

          </div>
         {/* End of content Div */}
          
          
          
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
