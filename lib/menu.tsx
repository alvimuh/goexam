import {
  HomeTrendUp,
  Book,
  Calendar,
  Setting,
  FavoriteChart,
  Category,
  UserEdit,
  UserOctagon,
  UserTag,
  UserSquare,
  SecurityUser,
  Monitor,
  Driver,
  KeyboardOpen,
} from "iconsax-react";

const MENU_LIST = {
  dashboard: {
    title: "",
    path: "",
    children: {
      dashboard: {
        title: "Dashboard",
        path: "/dashboard",
        icon: <HomeTrendUp />,
      },
    },
  },
  "question-management": {
    title: "Manajemen Soal",
    path: "/question-management",
    children: {
      bank: {
        title: "Bank Soal",
        path: "/bank",
        icon: <Book />,
      },
      category: {
        title: "Kategori Soal",
        path: "/category",
        icon: <Category />,
      },
    },
  },
  "exam-management": {
    title: "Manajemen Ujian",
    path: "/exam-management",
    children: {
      schedule: {
        title: "Jadwal Ujian",
        path: "/schedule",
        icon: <Calendar />,
      },
      monitor: {
        title: "Monitor Ujian",
        path: "/monitor",
        icon: <Monitor />,
      },
      result: {
        title: "Hasil Ujian",
        path: "/result",
        icon: <FavoriteChart />,
      },
    },
  },
  "user-management": {
    title: "Manajemen Pengguna",
    path: "/user-management",
    children: {
      student: {
        title: "Siswa",
        path: "/student",
        icon: <UserTag />,
      },
      teacher: {
        title: "Guru",
        path: "/teacher",
        icon: <UserSquare />,
      },
      proctor: {
        title: "Proktor",
        path: "/proctor",
        icon: <UserOctagon />,
      },
      admin: {
        title: "Admin",
        path: "/admin",
        icon: <SecurityUser />,
      },
    },
  },
  settings: {
    title: "Pengaturan",
    path: "/settings",
    children: {
      exam: {
        title: "Ujian",
        path: "/exam",
        icon: <KeyboardOpen />,
      },
      user: {
        title: "Pengguna",
        path: "/user",
        icon: <UserEdit />,
      },
      system: {
        title: "Sistem",
        path: "/system",
        icon: <Driver />,
      },
    },
  },
};

export { MENU_LIST };
