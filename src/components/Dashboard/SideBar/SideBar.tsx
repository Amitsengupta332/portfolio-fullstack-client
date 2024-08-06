// "use client";
// import { Box, List, Stack, Typography } from "@mui/material";

// import Image from "next/image";
// // import assets from "@/assets";

// // import { userRole } from "@/types";
// import SideBarItems from "./SideBarItems";
// // import { getUserInfo } from "@/services/authService";
// import { useEffect, useState } from "react";
// import { drawerItems } from "@/utils/drawerItems";

// const SideBar = () => {
//   // const [userRole, setUserRole] = useState("");
//   // useEffect(() => {
//   //   const { role } = getUserInfo() as any;
//   //   // setUserRole(role);
//   // }, []);

//   return (
//     <Box>
//       <Stack
//         direction={"row"}
//         alignItems={"center"}
//         justifyContent={"center"}
//         gap={1}
//         py={1}
//         mt={1}
//       >
//         {/*  <Image src={assets.svgs.logo} alt="logo" width={40} height={40} /> */}
//         <Typography variant="h6" component="h1">
//           Portfolio
//         </Typography>
//       </Stack>
//       <List>
//         {drawerItems("admin").map((item, index) => (
//           <SideBarItems key={index} item={item} />
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default SideBar;

"use client";

import { Box, List, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import SidebarItem from "./SideBarItems";

const Sidebar = () => {
  //   const [userRole, setUserRole] = useState("");

  // solve hydration error
  //   useEffect(() => {
  //     const { role } = getUserInfo() as any;
  //     setUserRole(role);
  //   }, []);
  //sx={{ background: "lightgray", height: "100vh" }}

  return (
    <Box>
      <Stack
        py={1}
        mt={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={logo} width={60} height={60} alt="logo" /> */}
        <Typography
          variant="h6"
          color="primary.main"
          component="h1"
          fontWeight={700}
        >
          Portfolio
        </Typography>
      </Stack>
      <List sx={{ mt: 2 }}>
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
