import { Bot, ListTodo, BarChart3, CloudSun, Clock3, UtensilsCrossed } from "lucide-react";

// Edit all project content here. Cards and the details modal both read from this array.
// Replace "#" with real links when project demos are available.
export const projects = [
  {
    id: 1,
    title: "TalkBase AI",
    context: "Final Year Project",
    featured: true,
    icon: Bot,
    description:
      "An AI-powered customer support chatbot. It answers customer questions instantly, 24/7, so businesses save time and keep customers happy.",
    tags: ["AI", "Chatbot", "NLP", "Customer Support"],
    liveDemo: "#",
    github: "https://github.com/ayesha004-creator/TalkBase-AI-Customer-Support-Chatbot",
    details: {
      problem: "Businesses need a way to respond to common customer questions promptly and consistently.",
      whatIDid: "Built TalkBase AI, a customer support chatbot designed to answer questions and assist customers at any time.",
      tools: "AI, chatbot, and natural language processing (NLP).",
      result: "The project demonstrates how an AI chatbot can support customer service by providing quick responses to customer questions.",
    },
  },
  {
    id: 2,
    title: "DesiBite — Desi Food Delivery Website",
    context: "Web Development / Food Delivery",
    featured: true,
    icon: UtensilsCrossed,
    description:
      "A desi food delivery web application designed to provide a convenient online food-ordering experience, featuring Pakistani cuisine, food categories, attractive food imagery, and a user-friendly interface.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Lucide React", "Gemini API"],
    liveDemo: "https://6ad0a8e23f22f185f91acf91--desifoodsite.netlify.app/",
    github: "https://github.com/ayesha004-creator/Desifood",
    details: {
      problem: "Customers need a smooth and convenient way to browse Pakistani food options, explore categories, and place orders without friction.",
      whatIDid: "Built a responsive food delivery website with category browsing, restaurant and menu sections, seasonal promotions, cart flow, and a modern UI for Pakistani cuisine.",
      tools: "React, TypeScript, Vite, Tailwind CSS, Express, Lucide React, Motion, and Google Gemini API.",
      result: "The platform delivers a polished food-ordering experience and showcases a practical, user-friendly delivery web app tailored to desi food lovers.",
    },
  },
  {
    id: 3,
    title: "To-Do List App",
    icon: ListTodo,
    description: "A simple app to add, finish, and delete daily tasks. Clean design and easy to use.",
    tags: ["JavaScript", "React", "Local Storage"],
    liveDemo: "https://ayesha004-creator.github.io/ToDoList-App/",
    github: "https://github.com/ayesha004-creator/ToDoList-App",
    details: {
      problem: "The app helps users organize and manage their daily tasks in one place. Users can add, edit, view, and delete tasks, and mark completed tasks as done.",
      whatIDid: "Built a simple, user-friendly task management app with features to add, edit, view, and delete tasks, and mark them as completed. The interface is clean and easy to use.",
      tools: "JavaScript, React, and Local Storage.",
      result: "The app offers a simple way to manage daily tasks and helped me improve my understanding of CRUD operations, UI development, task management functionality, and building interactive web applications.",
    },
  },
  {
    id: 4,
    title: "Power BI Dashboard",
    icon: BarChart3,
    description: "An interactive dashboard that shows business sales and trends with clear charts and filters.",
    tags: ["Power BI", "Data Analysis", "DAX"],
    liveDemo: "#",
    github: "https://github.com/ayesha004-creator/power_BI_WORK",
    details: {
      problem: "Businesses need a clear way to review sales performance and spot trends.",
      whatIDid: "Created an interactive dashboard with charts and filters to explore sales data and trends.",
      tools: "Power BI, data analysis, and DAX.",
      result: "The dashboard brings sales information and trends together in an interactive view.",
    },
  },
  {
    id: 5,
    title: "Weather App — React",
    icon: CloudSun,
    description:
      "A responsive weather app to search cities and check current conditions, temperature, wind speed, and a 5-day forecast.",
    tags: ["React.js", "JavaScript", "API Integration", "CSS"],
    liveDemo: "https://weatherhe.netlify.app/",
    github: "https://github.com/ayesha004-creator/weather-app-by-react",
    details: {
      problem: "People need a quick way to check current weather and upcoming conditions for different cities.",
      whatIDid: "Built a responsive React app that lets users search for cities and view current conditions, temperature, wind speed, and a 5-day forecast.",
      tools: "React.js, JavaScript, weather API integration, and CSS.",
      result: "The app presents useful current weather details and a 5-day forecast in a responsive interface.",
    },
  },
  {
    id: 6,
    title: "Digital World Clock",
    icon: Clock3,
    description:
      "A responsive world clock for viewing and switching between the current local times of multiple cities and time zones.",
    tags: ["React", "JavaScript", "CSS"],
    liveDemo: "https://digitalworldclock.netlify.app/",
    github: "https://github.com/ayesha004-creator/digital-world-clock",
    details: {
      problem: "Checking local times across cities and time zones can be inconvenient when coordinating across locations.",
      whatIDid: "Created a responsive digital world clock that displays current times for multiple cities and lets users switch between locations.",
      tools: "React, JavaScript, and CSS.",
      result: "Users can quickly view and switch between current local times across multiple locations on desktop and mobile.",
    },
  },
];
