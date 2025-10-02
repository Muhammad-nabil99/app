import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./Routes/UserRoutes";
import HalamanLogin from "./pages/HalamanLogin";
import HalamanRegister from "./pages/HalamanRegister";
import AdminRoutes from "./Routes/AdminRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import HalamanTidakDiTemukan from "./pages/HalamanTidakDiTemukan";
import RedirectingHandler from "./components/RedirectingHandler";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false, // optional: disables refetching when you switch tabs
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectingHandler />} />
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/masuk" element={<HalamanLogin />} />
          <Route path="/daftar" element={<HalamanRegister />} />
          <Route path="*" element={<HalamanTidakDiTemukan />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
