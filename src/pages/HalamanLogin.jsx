import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useLogin from "../features/auth/useLogin";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useGetUser from "../features/auth/useGetUser";

export default function HalamanLogin() {
  const { user, isLoading: isLoadingUser } = useGetUser();
  const location = useLocation();
  const navigate = useNavigate();
  let { login, isPending: isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoadingUser && user) {
      navigate(`/${user?.user_metadata?.role}/dashboard`);
    }
  }, [user, isLoadingUser, navigate]);
  const onSubmit = (data) => {
    const { email, password } = data;
    login({ email, password });
  };

  if (user || isLoadingUser) return null;
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm h-fit">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Masuk</CardTitle>
          <Button variant="link">
            <NavLink to="/daftar" className="capitalize">
              belum punya akun? klik disini
            </NavLink>
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", {
                    required: "Email wajib diisi",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Format email tidak valid",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Lupa password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password wajib diisi",
                    minLength: {
                      value: 6,
                      message: "Password minimal 6 karakter",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <CardFooter className="flex-col gap-2 mt-6 px-0">
              <Button disabled={isLoading} type="submit" className="w-full">
                {isLoading ? "Loading..." : "Masuk"}
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
