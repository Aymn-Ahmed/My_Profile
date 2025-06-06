import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e88e5', // أزرق ملكي (للعناصر البارزة زي الأزرار فقط)
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff4081', // وردي جريء
      contrastText: '#ffffff',
    },
    background: {
      default: '#0b132b', // كحلي داكن وهادي
      paper: '#0b132b   ', // كحلي أفتح شوية (بطاقات)
    },
    text: {
      primary: '#e0e0e0', // نص أبيض خافت
      secondary: '#90caf9', // أزرق فاتح ثانوي
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#ffffff', // خلي العناوين بيضاء بالكامل
    },
    h2: {
      fontSize: '2.4rem',
      fontWeight: 700,
      color: '#ffffff',
    },
    h6: {
      fontSize: '1.1rem',
      color: '#90caf9',
    },
    body1: {
      fontSize: '1rem',
      color: '#e0e0e0',
    },
    allVariants: {
      color: '#ffffff', // النصوص بيضاء بالكامل
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontSize: '1rem',
          color: '#ffffff',
          background: 'linear-gradient(45deg, #1e88e5 30%, #1565c0 90%)',
          boxShadow: '0 4px 20px rgba(30, 136, 229, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1565c0 30%, #1e88e5 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#162447', // لون أفتح للبطاقات
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: '#ffffff',
        },
        input: {
          color: '#ffffff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1e88e5',
            },
            '&:hover fieldset': {
              borderColor: '#1565c0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1e88e5',
            },
          },
        },
      },
    },
  },
});

export default Theme;
