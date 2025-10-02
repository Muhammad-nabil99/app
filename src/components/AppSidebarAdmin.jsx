import { History, ChevronUp, Home, LayoutList, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarFooter } from "./ui/sidebar";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavLink } from "react-router-dom";
import useLogout from "../features/auth/useLogout";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Daftar Laporan",
    url: "/admin/laporan",
    icon: LayoutList,
  },
  {
    title: "Riwayat",
    url: "/admin/riwayat",
    icon: History,
  },
];
function AppSidebarAdmin() {
  const { logout, isPending } = useLogout();
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex flex-col h-full justify-between">
          <SidebarGroup>
            <SidebarGroupLabel className="mb-10">
              <h1 className="text-xl">LaporJalan Konsel</h1>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          isActive ? "bg-blue-600  text-white" : "font-normal"
                        }
                      >
                        {({ isActive }) => (
                          <div
                            className={`${isActive ? "font-bold bg-blue-500 text-white" : ""} flex items-center p-2 rounded-md gap-2 w-full`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      <User2 /> Admin
                      <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width]"
                  >
                    <DropdownMenuItem>
                      <button onClick={() => logout()} disabled={isPending}>
                        Keluar
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
export default AppSidebarAdmin;
