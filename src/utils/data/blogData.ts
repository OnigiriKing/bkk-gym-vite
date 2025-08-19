import post1 from "utils/img/blogImg/post1.png"
import post2 from "utils/img/blogImg/post2.png"
import post3 from "utils/img/blogImg/post3.png"
import post4 from "utils/img/blogImg/post4.png"
import post5 from "utils/img/blogImg/post5.png"
import post6 from "utils/img/blogImg/post6.png"


const blogCat = {
  cat1: { name: "Fitness", number: 3 },
  cat2: { name: "Yoga", number: 4 },
  cat3: { name: "Meditation", number: 2 },
  cat4: { name: "Boxing", number: 5 },
  cat5: { name: "Body Building", number: 3 },
  cat6: { name: "Crossfit", number: 2 },
};

const tagsList = [
  "Fitness",
  "Yoga",
  "Meditation",
  "Boxing",
  "BodyBuilding",
  "Crossfit",
];

const blogPost = {
  post1: {
    date: "19.01.24",
    name: "Summer Body Bootcamp",
    author: "Admin",
    type: "Fitness",
    img: post1,
    des: "Join our intense six-week bootcamp to get your body summer-ready. Focused on high-intensity workouts and nutritional guidance, it's perfect for all fitness levels.",
  },
  post2: {
    date: "20.01.24",
    name: "Family Fitness Fun Day",
    author: "Alex",
    type: "Fitness",
    img: post2,
    des: "A day of fun and fitness for the whole family! Enjoy group activities, healthy snacks, and learn how to keep your family active and healthy together.",
  },
  post3: {
    date: "21.01.24",
    name: "Strength Training 101",
    author: "Admin",
    type: "Body Building",
    img: post3,
    des: "New to strength training? This beginner's course will teach you the fundamentals of lifting weights safely and effectively, setting you up for a lifetime of strength.",
  },
  post4: {
    date: "22.01.24",
    name: "Marathon Prep Made Easy",
    author: "Admin",
    type: "Crossfit",
    img: post4,
    des: "Get ready for your next marathon with our comprehensive training program. Covering everything from running techniques to nutrition, we'll help you cross that finish line.",
  },
  post5: {
    date: "23.01.24",
    name: "Mindful Meditation and Movement",
    author: "Felix",
    type: "Meditation",
    img: post5,
    des: "Discover the power of mindfulness combined with gentle movement in this relaxing class. Ideal for stress relief and improving overall well-being.",
  },
  post6: {
    date: "24.01.24",
    name: "Nutrition for Optimal Performance",
    author: "Takashi",
    type: "Fitness",
    img: post6,
    des: "Our expert dietitian will guide you through the basics of sports nutrition, helping you fuel your body for your best performance yet.",
  },
};


export { blogCat, tagsList, blogPost };