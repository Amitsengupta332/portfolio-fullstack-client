// "use client";
// import Link from "next/link";
// import {
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { usePathname } from "next/navigation";
// const SideBarItems = ({ item }: any) => {
//   const linkPath = `/dashboard/${item.path}`;
//   const pathName = usePathname();

//   return (
//     <Link href={linkPath} style={{ textDecoration: "none" }}>
//       <ListItem
//         disablePadding
//         sx={{
//           ...(pathName === linkPath
//             ? {
//                 borderRight: "3px solid #1584FD",
//                 "& svg": { color: "#1584FD" },
//               }
//             : {}),
//           mb: 1,
//         }}
//       >
//         <ListItemButton>
//           <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
//           <ListItemText primary={item.title} />
//         </ListItemButton>
//       </ListItem>
//     </Link>
//   );
// };

// export default SideBarItems;

"use client";

import { DrawerItems } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps = {
  item: DrawerItems;
  index?: number;
};

const SidebarItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item?.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #eb2c29",
                backgroundColor: "#BCBBBB",
                "& svg": {
                  color: "primary.main",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
