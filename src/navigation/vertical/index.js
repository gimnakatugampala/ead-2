// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    // ----------------------
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Manage Classes'
    },
    {
      title: 'Classes',
      icon: Login,
      path: '/classes'
    },
    {
      title: 'Add Class',
      icon: AccountPlusOutline,
      path: '/add-class'
    }, 
    {
      sectionTitle: 'Manage Instructor'
    },
    {
      title: 'Instructors',
      icon: Login,
      path: '/instructors'
    },
    {
      title: 'Add Instructor',
      icon: AccountPlusOutline,
      path: '/add-instructor'
    },
    {
      sectionTitle: 'Manage Students'
    },
    {
      title: 'Students',
      icon: Login,
      path: '/students'
    },
    {
      title: 'Payments',
      icon: AccountPlusOutline,
      path: '/payments'
    },
    {
      sectionTitle: 'Student Corner'
    },
    {
      title: 'My Classes',
      icon: Login,
      path: '/my-classes'
    },
    {
      title: 'All Classes',
      icon: AccountPlusOutline,
      path: '/'
    },
    // ----------------------
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
