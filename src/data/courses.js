const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const courses = [
  {
    title: "Delay Analysis & EOT Claims (DAC)",
    category: "Project Management",
    rating: "4.85",
    price: "3,000",
    old: "5,500",
    image: photo("photo-1515879218367-8466d910aaa4"),
    instructors: [
      {
        name: "Ali Katary",
        image: photo("photo-1500648767791-00dcc994a43e", 100),
      },
      {
        name: "Ahmed Mohamed",
        image: photo("photo-1506794778202-cad84cf45f1d", 100),
      },
    ],
    lessons: "10 Hours",
    Lectuers: "10 Lectuers",
    Chapters: "10 Chapters",
    Students: "50 Students",
  },
  {
    title: "PSP Preparation Course (Arabic)",
    category: "Planning & Scheduling",
    rating: "4.85",
    price: "3,000",
    old: "5,500",
    image: photo("photo-1516321318423-f06f85e504b3"),
    instructors: [
      {
        name: "Sara Khaled",
        image: photo("photo-1534528741775-53994a69daeb", 100),
      },
    ],
    lessons: "24 Hours",
    Lectuers: "24 Lectuers",
    Chapters: "24 Chapters",
    Students: "50 Students",
  },
  {
    title: "PM-PMP Preparation Course",
    category: "Project Management",
    rating: "4.85",
    price: "3,000",
    old: "5,500",
    image: photo("photo-1515879218367-8466d910aaa4"),
    instructors: [
      {
        name: "Saber Mohamed",
        image: photo("photo-1507003211169-0a1dd7228f2d", 100),
      },
    ],
    lessons: "30 Hours",
    Lectuers: "30 Lectuers",
    Chapters: "30 Chapters",
    Students: "50 Students",
  },
  {
    title: "PSP Preparation Course (Arabic)",
    category: "Planning & Scheduling",
    rating: "4.85",
    price: "3,000",
    old: "5,500",
    image: photo("photo-1516321318423-f06f85e504b3"),
    instructors: [
      {
        name: "Sara Khaled",
        image: photo("photo-1534528741775-53994a69daeb", 100),
      },
    ],
    lessons: "24 Hours",
    Lectuers: "24 Lectuers",
    Chapters: "24 Chapters",
    Students: "50 Students",
  },
];
