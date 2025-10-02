/* eslint-disable react/prop-types */
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import useCreateLaporan from "../../features/users/useCreateLaporan";
import useUpdateLaporan from "../../features/users/useUpdateLaporan";
import useGetUser from "../../features/auth/useGetUser";

function LaporanUser({ editValues, isEdit }) {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useGetUser();
  // const [position, setPosition] = useState("bottom");
  const isEditSession = Boolean(editValues?.id);
  const { createLaporan, isCreating } = useCreateLaporan();
  const { editLaporan, isEditing } = useUpdateLaporan();

  const isLoading = isEditing || isCreating || isLoadingUser;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  async function onSubmit(data) {
    let newLaporan;
    if (isEditSession) {
      isEdit((value) => !value);
      newLaporan = { ...data };

      editLaporan({ id: newLaporan?.id, newLaporan });
    } else {
      newLaporan = {
        ...data,
        status: "ditunda",
        user_id: user?.id,
      };

      createLaporan({ newLaporan });
    }
    navigate("/user/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-1/2 my-10 mx-auto "
    >
      <div>
        <Label htmlFor="judul">Judul</Label>
        <Input
          type="text"
          placeholder="Judul"
          {...register("judul", {
            required: "Judul harus diisi",
          })}
        />
        <p className="italic text-red-600">
          {errors?.judul ? errors.judul.message : ""}
        </p>
      </div>
      <div>
        <Label htmlFor="judul">Alamat</Label>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Alamat Jalan"
            {...register("alamat", {
              required: "Alamat Jalan harus diisi",
            })}
          />
          <Button type="button">Dapatkan Lokasi</Button>
        </div>
        <p className="italic text-red-600">
          {errors?.jalan ? errors.jalan.message : ""}
        </p>
      </div>
      <div>
        <Label htmlFor="deskripsi">Deskripsi</Label>
        <Textarea
          placeholder="Deskripsikan laporan anda..."
          {...register("deskripsi", {
            required: "Deskripsi Jalan harus diisi",
          })}
        />
        <p className="italic text-red-600">
          {errors?.deskripsi ? errors.deskripsi.message : ""}
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="bukti">Bukti</Label>
        <Input
          id="bukti"
          type="file"
          {...register("bukti", {
            required: isEditSession ? false : "Bukti harus diisi",
          })}
        />
        <p className="italic text-red-600">
          {errors?.bukti ? errors.bukti.message : ""}
        </p>
      </div>
      <Controller
        name="jenis"
        control={control}
        rules={{ required: "Jenis kerusakan harus diisi" }}
        render={({ field }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex justify-between w-full">
                <span>
                  {field.value
                    ? field.value
                        ?.split("-")
                        .map((value) => value[0].toUpperCase() + value.slice(1))
                        .join(" ")
                    : "Pilih Jenis Kerusakan"}
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
                <DropdownMenuRadioItem value="retak-rambut">
                  Retak Rambut
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="retak-buaya">
                  Retak Buaya
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="retak-melintang">
                  Retak Melintang
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="retak-blok">
                  Retak Blok
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="retak-pinggir">
                  Retak Pinggir
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="retak-refleksi">
                  Retak Refleksi
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lubang">
                  Lubang
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      />
      {errors.jenis && (
        <p className="text-sm text-red-500 mt-2">{errors.jenis.message}</p>
      )}

      <Button type="submit" className="mt-4">
        {isLoading ? "Membuat..." : "Kirim"}
      </Button>
    </form>
  );
}
export default LaporanUser;
