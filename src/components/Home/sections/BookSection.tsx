import modalBg from '../../../assets/images/bg-modal.webp'
import statesArray from '../../../assets/arrays/states.json'
import workspaceArray from '../../../assets/arrays/workspaceSizes.json'
import workspaceHours from '../../../assets/arrays/workspaceHours.json'
import { Button, Select, MenuItem, Checkbox, Dialog, DialogTitle, IconButton, DialogContent } from '@mui/material'
import { useState } from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import Crop32Icon from '@mui/icons-material/Crop32';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion'

export default function BookSection(){
    const [ state, setState ] = useState('')
    const [ space, setSpace ] = useState('')
    const [ hours, setHours ] = useState([])
    const [ selectedDates, setSelectedDates ] = useState<[Dayjs | null, Dayjs | null]>([dayjs(), dayjs().add(1, 'day')])
    const [ bookingProcessed, setBookingProcessed ] = useState(false)
  
    const [ reservationDialog, setReservationDialog ] = useState(false)

    return(
        <section id='book' className='w-full flex flex-col justify-center items-center gap-6 dark:text-stone-100 text-stone-700 px-8 lg:px-0 pb-24 xl:pb-64'>
        <div className='bg-white drop-shadow-lg p-8 flex flex-col gap-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-5xl xl:max-w-7xl' style={{
          backgroundImage: `url(${modalBg.src})`,
        }}>
          <span className='font-bold text-2xl'>
              Book a space
          </span>
          <span className='text-base -mt-8 text-[#108A00]'>
              Stacking discount for booking multiple hours per day!
          </span>
          <div className='lg:grid xl:grid-cols-3 lg:grid-cols-2 flex flex-col gap-4 lg:gap-12 font-bold'>
            <div className='col-span-2'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  value={selectedDates}
                  onChange={(newValue) => setSelectedDates(newValue)}
                  slotProps={{ 
                    textField: { 
                      variant: 'standard',
                      title: 'Select Date Range',
                      label: <div className='flex gap-2 dark:text-stone-100 text-stone-700 font-bold text-[1.3rem]' style={{ fontFamily: 'Poppins' }}>
                        <CalendarTodayIcon className='text-[#108A00]' /> <span className='block lg:hidden'>Dates</span><span className='hidden lg:block'>Select the Date Range</span> <span className='text-[#108A00]'>*</span>
                      </div>,
                      InputProps: {
                        style: {
                          paddingTop: '1rem'
                        }
                      }
                    },
                    fieldSeparator: { children: '' }
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className='flex flex-col justify-center items-start space-y-4'>
              <div className='flex gap-2'>
                <AccessTimeIcon className='text-[#108A00]' /> Select the Daily Use Hours <span className='text-[#108A00]'>*</span>
              </div>
              <Select
                value={hours}
                onChange={(e: any) => setHours(e.target.value)}
                renderValue={(selected: any) => {
                  let displayValue: string[] = []
                  workspaceHours.forEach((space: any) => {
                    if(selected.indexOf(space.id) > -1) {
                      displayValue.push((space.startTime > 12 ? space.startTime - 12 + ' PM' : space.startTime + ' AM') + ' - ' + (space.endTime > 12 ? space.endTime - 12 + ' PM' : space.endTime + ' AM'))
                }})
                  return displayValue.join(', ')
                }}
                fullWidth
                variant='standard'
                multiple
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {workspaceHours.map((space: any, index: number) => {
                  return(
                    <MenuItem key={index} value={space.id}>
                      {/* @ts-ignore */}
                      <Checkbox checked={hours.includes(space.id)} />
                      {space.startTime > 12 ? space.startTime - 12 + ' PM' : space.startTime + ' AM'} - {space.endTime > 12 ? space.endTime - 12 + ' PM' : space.endTime + ' AM'}
                    </MenuItem>
                  )
                })} 
              </Select>
            </div>
            <div className='flex flex-col justify-center items-start space-y-4'>
              <div className='flex gap-2'>
                <BusinessIcon className='text-[#108A00]' /> Select Your State <span className='text-[#108A00]'>*</span>
              </div>
              <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                fullWidth
                variant='standard'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {statesArray.map((state, index) => (
                  <MenuItem key={index} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className='flex flex-col justify-center items-start space-y-4'>
              <div className='flex gap-2'>
                <Crop32Icon className='text-[#108A00]' /> Select Your Workspace Size <span className='text-[#108A00]'>*</span>
              </div>
              <Select
                value={space}
                onChange={(e) => setSpace(e.target.value)}
                fullWidth
                variant='standard'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {workspaceArray.map((space: Workspace, index: number) => {
                  return(
                    <MenuItem key={index} value={space.size}>
                      {space.size} SQ FT
                    </MenuItem>
                  )
                })} 
              </Select>
            </div>
            <div className='w-full flex items-end'>
              <Button
                variant='contained'
                className='bg-[#108A00] text-white text-lg hover:bg-[#108A00cc]'
                style={{
                  fontWeight: 'bold',
                  padding: '1rem 2rem',
                  backgroundColor: '#108A00'
                }}
                fullWidth
                disabled={!(state && space && hours.length > 0 && selectedDates.length > 0)}
                onClick={() => setReservationDialog(true)}
              >
                ${(hours.reduce((acc: number, _, index: number) => {
                          let workspace = workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))
                          let amountToCharge = workspace?.hour_price || 0
                          amountToCharge = amountToCharge * ((workspace?.per_hour_reduction_scale || 0) ** index)
                          console.log(acc + amountToCharge)
                          return acc + amountToCharge
                        }
                        , 0)).toFixed(2)}
              </Button>
            </div>
          </div>
          <Dialog
            open={reservationDialog}
            onClose={() => setReservationDialog(false)}
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle style={{
              backgroundColor: '#108A00',
              color: 'white',
            }}>
              <div className='flex justify-between items-center'>
                <span className='font-bold text-2xl'>
                  Book a space
                </span>
                <IconButton onClick={() => setReservationDialog(false)}>
                  <CloseIcon style={{
                    color: 'white'
                  }} />
                </IconButton>
              </div>
            </DialogTitle>
            <DialogContent style={{
              padding: 0,
              position: 'relative'
            }}>
              {bookingProcessed && <motion.div 
                className='flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-white/95 z-[999]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className='text-xl font-bold'>
                  Your Booking Has Been Placed! 
                </span>
                <span className='text-xl'>
                  Check Your Email For Confirmation.
                </span>
                <CheckCircleOutlineIcon className='text-[#108A00cc] text-6xl mt-4' />
              </motion.div>}
              <div className='flex flex-col'>
                <div className='flex justify-between items-center my-12 px-8'>
                  <span className='font-bold text-xl'>
                    Booking Details
                  </span>
                  <span className='font-bold text-xl'>
                    ${(hours.reduce((acc: number, _, index: number) => {
                      let workspace = workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))
                      let amountToCharge = workspace?.hour_price || 0
                      amountToCharge = amountToCharge * ((workspace?.per_hour_reduction_scale || 0) ** index)
                      console.log(acc + amountToCharge)
                      return acc + amountToCharge
                    }
                    , 0)).toFixed(2)}
                  </span>
                </div>
                <div className='flex flex-col gap-8'>
                  <div className='grid grid-cols-3 gap-8 text-center px-4'>
                    <div className='flex flex-col gap-2'>
                      <span className='font-bold text-lg border-b text-center'>
                        Space
                      </span>
                      <span className='text-lg'>
                        {workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.size} SQ FT
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='font-bold text-lg border-b text-center'>
                        Rate
                      </span>
                      <span className='text-lg'>
                        ${workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.hour_price} / hour
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='font-bold text-lg border-b text-center'>
                        Discount Rate
                      </span>
                      <span className='text-lg text-center'>
                        ${(workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.per_hour_reduction_scale ?? 0) * (workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.hour_price ?? 0)} / hour
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between flex-col items-center gap-2'>
                    <span className='font-bold text-lg border-b text-center'>
                      {selectedDates[0] ? new Date(selectedDates[0].toString()).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) : ''} <span className='font-normal'>to</span> {selectedDates[1] ? new Date(selectedDates[1].toString()).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                    </span>
                    <span className='text-lg flex flex-col items-center'>
                      {hours.map((hour: number, index: number) => {
                        return(
                          <span key={index}>
                            {(workspaceHours?.find((space: any) => space.id === hour)?.startTime ?? 0) > 12 ? (workspaceHours?.find((space: any) => space.id === hour)?.startTime ?? 0) - 12 + ' PM' : workspaceHours.find((space: any) => space.id === hour)?.startTime + ' AM'} - {(workspaceHours?.find((space: any) => space.id === hour)?.endTime ?? 0) > 12 ? (workspaceHours?.find((space: any) => space.id === hour)?.endTime ?? 0) - 12 + ' PM' : workspaceHours.find((space: any) => space.id === hour)?.endTime + ' AM'}
                          </span>
                        )
                      })}
                    </span>
                  </div>
                </div>
                <div className='flex flex-col justify-between items-center gap-2 bg-[#108A00] text-white p-4 mt-8'>
                  <div className='flex justify-between w-full'>
                    <span className='text-lg'>
                      Subotal
                    </span>
                    <span className='text-lg'>
                      ${((workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.hour_price || 0) * hours.length).toFixed(2)}
                    </span>
                  </div>
                  <div className='flex justify-between w-full'>
                    <span className='text-lg'>
                      Discount
                    </span>
                    <span className='text-lg'>
                      -${(
                        ((workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))?.hour_price || 0) * hours.length)
                        - (hours.reduce((acc: number, _, index: number) => {
                          let workspace = workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))
                          let amountToCharge = workspace?.hour_price || 0
                          amountToCharge = amountToCharge * ((workspace?.per_hour_reduction_scale || 0) ** index)
                          console.log(acc + amountToCharge)
                          return acc + amountToCharge
                        }
                        , 0))
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className='flex justify-between w-full'>
                    <span className='font-bold text-lg'>
                      Total
                    </span>
                    <span className='font-bold text-lg'>
                      ${(hours.reduce((acc: number, _, index: number) => {
                      let workspace = workspaceArray.find((spaceArr: Workspace) => spaceArr.size === parseInt(space))
                      let amountToCharge = workspace?.hour_price || 0
                      amountToCharge = amountToCharge * ((workspace?.per_hour_reduction_scale || 0) ** index)
                      console.log(acc + amountToCharge)
                      return acc + amountToCharge
                    }
                    , 0)).toFixed(2)}
                    </span>
                  </div>
                  <Button
                    variant='contained'
                    style={{
                      backgroundColor: '#eee',
                      color: 'black',
                      fontWeight: 'bold',
                      marginTop: '1rem',
                      boxShadow: 'none'
                    }}
                    fullWidth
                    onClick={() => {
                      setBookingProcessed(true)
                      setTimeout(() => {
                        setReservationDialog(false)
                        setBookingProcessed(false)
                        setSpace('')
                        setHours([])
                        setSelectedDates([dayjs(), dayjs().add(1, 'day')])
                      }, 8000)
                    }}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    )
}