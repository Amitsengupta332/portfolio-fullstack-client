// // icons
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
// import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
// import AddTaskIcon from "@mui/icons-material/AddTask";
// export const drawerItems = (role: string) => {
//   const defaultMenu = [
//     {
//       title: "Create blog",
//       path: `/blog`,
//       icon: EditNoteIcon,
//     },
//     {
//       title: "Create Projects",
//       path: `/projects`,
//       icon: AssignmentTurnedInIcon,
//     },
//     {
//       title: "Create Skill",
//       path: `/skill`,
//       icon: AddTaskIcon,
//     },
//     {
//       title: "Create Experience",
//       path: `/experience`,
//       icon: LibraryAddIcon,
//     },
//     // {
//     //   title: "Create blog",
//     //   path: `${role}/blog`,
//     //   icon: EditNoteIcon,
//     // },
//     // {
//     //   title: "Create Projects",
//     //   path: `${role}/projects`,
//     //   icon: AssignmentTurnedInIcon,
//     // },
//     // {
//     //   title: "Create Skill",
//     //   path: `${role}/skill`,
//     //   icon: AddTaskIcon,
//     // },
//     // {
//     //   title: "Create Experience",
//     //   path: `${role}/experience`,
//     //   icon: LibraryAddIcon,
//     // },
//   ];

import { DrawerItems } from "@/types";
import AddIcon from "@mui/icons-material/Add";
import BookIcon from "@mui/icons-material/Book";
//   return [...defaultMenu];
// };

export const drawerItems = (): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  const defaultMenus = [
    {
      title: "Create Project",
      path: `createProject`,
      icon: AddIcon,
    },
    {
      title: "Create Blogs",
      path: `createBlog`,
      icon: BookIcon,
    },
  ];

  return [...roleMenus, ...defaultMenus];
};
