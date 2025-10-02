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
import { NavLink, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import useSignUp from "../features/auth/useSignUp";

export default function HalamanRegister() {
  const navigate = useNavigate();
  const { signUp, isPending: isLoading } = useSignUp();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data);
    navigate("/masuk");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm h-fit">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Daftar
          </CardTitle>
          <Button variant="link">
            <NavLink to="/masuk" className="capitalize">
              sudah punya akun? klik disini
            </NavLink>
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Username */}
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="username"
                  {...register("username", {
                    required: "Username wajib diisi",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Nomor */}
              <div className="grid gap-2">
                <Label htmlFor="nomor">Nomor</Label>
                <Input
                  id="nomor"
                  type="text"
                  placeholder="+62223843****"
                  {...register("nomor", { required: "Nomor wajib diisi" })}
                />
                {errors.nomor && (
                  <p className="text-red-500 text-sm">{errors.nomor.message}</p>
                )}
              </div>

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

              {/* Dropdown Role */}
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: "Role harus dipilih" }}
                  render={({ field }) => (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex justify-between w-full"
                        >
                          <span>
                            {field.value
                              ? field.value
                                  .split("-")
                                  .map(
                                    (val) =>
                                      val.charAt(0).toUpperCase() + val.slice(1)
                                  )
                                  .join(" ")
                              : "Pilih Role"}
                          </span>
                          <ChevronDown className="ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-64">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <DropdownMenuRadioItem value="admin">
                            Admin
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="user">
                            User
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                />
                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
              </div>
            </div>

            <CardFooter className="flex-col gap-2 mt-6 px-0">
              <Button disabled={isLoading} type="submit" className="w-full">
                {isLoading ? "Loading..." : "Daftar"}
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
