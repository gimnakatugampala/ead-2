// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const AddClass = () => {

  
   // ** States
   const [language, setLanguage] = useState([])
   const [date, setDate] = useState(null)
 
   const [values, setValues] = useState({
     password: '',
     password2: '',
     showPassword: false,
     showPassword2: false
   })
 
   // Handle Password
   const handlePasswordChange = prop => event => {
     setValues({ ...values, [prop]: event.target.value })
   }
 
   const handleClickShowPassword = () => {
     setValues({ ...values, showPassword: !values.showPassword })
   }
 
   const handleMouseDownPassword = event => {
     event.preventDefault()
   }
 
   // Handle Confirm Password
   const handleConfirmChange = prop => event => {
     setValues({ ...values, [prop]: event.target.value })
   }
 
   const handleClickShowConfirmPassword = () => {
     setValues({ ...values, showPassword2: !values.showPassword2 })
   }
 
   const handleMouseDownConfirmPassword = event => {
     event.preventDefault()
   }
 
   // Handle Select
   const handleSelectChange = event => {
     setLanguage(event.target.value)
   }

   const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

   const onChange = file => {
     const reader = new FileReader()
     const { files } = file.target
     if (files && files.length !== 0) {
       reader.onload = () => setImgSrc(reader.result)
       reader.readAsDataURL(files[0])
     }
   }

  return (
    <Card>
    <CardHeader title='Add Class' titleTypographyProps={{ variant: 'h6' }} />
    <Divider sx={{ margin: 0 }} />
    <form onSubmit={e => e.preventDefault()}>
      <CardContent>
        <Grid container spacing={5}>

        <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload  Course Picture
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>
    

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Subject Name' placeholder='Physics' />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Amount' placeholder='4,500(LKR)' />
          </Grid>
      
        
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Instructor</InputLabel>
                <Select
                  label='Select Instructor'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Grade</InputLabel>
                <Select
                  label='Select Grade'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker label="Start Date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker label="End Date" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Day</InputLabel>
                <Select
                  label='Select Grade'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
            </FormControl>
          </Grid>


          

        </Grid>
      </CardContent>
      <Divider sx={{ margin: 0 }} />
      <CardActions>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
          Submit
        </Button>
        <Button size='large' color='secondary' variant='outlined'>
          Cancel
        </Button>
      </CardActions>
    </form>
  </Card>
  )
}

export default AddClass