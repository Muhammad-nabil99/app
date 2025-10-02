import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import AppSidebarUser from "../components/AppSidebarUser";

export default function AppLayoutUser() {
  const { pathname } = useLocation();
  const BreadCrumbsPath = pathname.split("/").slice(1);
 

  return (
    <SidebarProvider>
      <AppSidebarUser />
      <main className="w-full">
        <div className="m-2 flex items-center">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              {BreadCrumbsPath.map((path, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        className="capitalize"
                        href={`/user/${path}`}
                      >{`${path}`}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {BreadCrumbsPath.length - 1 != index ? (
                    <BreadcrumbSeparator />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="h-full m-2">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
