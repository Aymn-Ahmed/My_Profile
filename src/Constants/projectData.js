// projectData.js
import productImage from '../assets/Product Management System3.webp';
import PersonalProfileImage from '../assets/background.webp';
import TaskManagerImage from '../assets/Task Manager1.webp';
import StudentAPIImage from '../assets/office.jpg';
import BankingSystemImage from '../assets/Banking System2.avif';
import DVLDSystemImage from '../assets/DVLD System3.webp';

const projectData = [
    {
      title: "Product Management System",
      description: "A dynamic web page for managing products, including add, edit, and delete functionalities using LocalStorage.",
      image: productImage,
       // Example image
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    },
    {
      title: "Personal Profile Project",
      description: "A professional profile page design using React.js and MUI, including a Navbar, Hero, About, and Contact sections with custom CSS and images.",
      image: PersonalProfileImage,
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    },
    {
      title: "Task Manager",
      description: "A task management app built with React and useReducer for state management, featuring tabs for filtering tasks and a dialog for editing and deleting tasks.",
      image: TaskManagerImage, 
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    },
    {
      title: "Student API Project",
      description: "A RESTful API project for managing student data using ASP.NET Core, with CRUD operations and image uploading functionality.",
      image: StudentAPIImage, 
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    },
    {
      title: "Banking System",
      description: "A desktop application with a three-tier architecture for simulating banking operations like account creation and money transfer, using C# and Guna UI.",
      image:  BankingSystemImage, 
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    },
    {
      title: "DVLD System",
      description: "A desktop system for managing vehicle inspections and licensing using C#, including vehicle registration and theoretical exam functionalities.",
      image: DVLDSystemImage,
            demoLink: "https://demo-link.com",
      codeLink: "https://github.com/your-repo"
    }
  ];
  
  export default projectData;
  