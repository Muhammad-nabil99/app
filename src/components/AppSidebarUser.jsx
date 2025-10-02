import { ChevronUp, Home, Inbox, User2 } from "lucide-react";

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
import useGetUser from "../features/auth/useGetUser";

const items = [
  {
    title: "Dashboard",
    url: "/user/dashboard",
    icon: Home,
  },
  {
    title: "Buat Laporan",
    url: "/user/laporan",
    icon: Inbox,
  },
];
function AppSidebarUser() {
  const { user, isLoading } = useGetUser();
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
                    <SidebarMenuButton className="capitalize">
                      <User2 />{" "}
                      {isLoading ? (
                        "Loading..."
                      ) : (
                        <p>{user?.user_metadata?.username}</p>
                      )}
                      <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width]"
                  >
                    <DropdownMenuItem>
                      <button disabled={isPending} onClick={() => logout()}>
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
export default AppSidebarUser;
