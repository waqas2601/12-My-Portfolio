import cricketBooking from "../assets/cricket-booking-dashboard.png";
import snookerDashboard from "../assets/snooker-club-dashboard.png";
import electricStore from "../assets/electric-store-admin.png";
import foodDelivery from "../assets/food-delivery-platform.png";
import transcriptionApp from "../assets/ai-transcription-app.png";

export const projects = [
  {
    id: 1,
    title: "Cricket Net Slots Booking System",
    description:
      "A full-stack booking platform that allows players to reserve cricket net slots online while providing administrators with a dashboard to manage schedules and bookings.",
    image: cricketBooking,
    tags: ["React", "Node.js", "Booking System", "Dashboard"],
    github: "https://github.com/waqas2601/24-Jeddah-Cricket-Nets",
    demo: "https://www.jeddahcricketnets.com/",
  },
  {
    id: 2,
    title: "Snooker Club Management System",
    description:
      "An internal admin platform built for a snooker club to manage tables, track ongoing games, and monitor customer sessions digitally.",
    image: snookerDashboard,
    tags: ["Next.js", "MongoDB", "Admin Dashboard"],
    github: "https://github.com/waqas2601/22-Snooker-Club-App",
    demo: "https://22-snooker-club-app.vercel.app/",
  },
  {
    id: 3,
    title: "Electric Store Management System",
    description:
      "A digital store management platform that helps manage products, invoices, and customers while providing real-time business insights.",
    image: electricStore,
    tags: ["React", "Express", "MongoDB", "Dashboard"],
    github: "https://github.com/waqas2601/23-SRC-Electric",
    demo: "https://23-src-electric-99xl.vercel.app/",
  },
  {
    id: 4,
    title: "Food Delivery Platform",
    description:
      "A multi-role food delivery system with dashboards for restaurants, customers, and delivery partners including order tracking and menu management.",
    image: foodDelivery,
    tags: ["Next.js", "MongoDB", "Full Stack"],
    github: "https://github.com/waqas2601/15-Food-Delivery-App",
    demo: "https://15-food-delivery-app-eozv.vercel.app/",
  },
  {
    id: 5,
    title: "Live Speech-to-Text Transcription App",
    description:
      "A web application that converts speech into text in real time using OpenAI Whisper, supporting both live microphone transcription and audio file uploads.",
    image: transcriptionApp,
    tags: ["React", "OpenAI", "WebSockets"],
    github: "https://github.com/waqas2601/25-Transcription",
    demo: "https://www.onlinetranscriptions.com/",
  },
];
