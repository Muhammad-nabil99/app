/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI button is available
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"; // Assuming Shadcn UI dropdown components are available
import { ChevronDown } from "lucide-react"; // Assuming lucide-react is available
import statusColor from "../utils/statusColor";
import useUpdateLaporan from "../features/users/useUpdateLaporan";
import MiniSpinnerLoading from "./MiniSpinnerLoading";

function DropDown({ status, updateStatus }) {
  const [selectedValue, setSelectedValue] = useState("");
  const { editLaporan, isEditing } = useUpdateLaporan();
  const [themeStatus, setThemeStatus] = useState({
    dot: "bg-yellow-600",
    background: "bg-yellow-500",
  });

  console.log(themeStatus?.background);

  useEffect(() => {
    setThemeStatus(selectedValue);
  }, [selectedValue]);

  function handleChangeStatus() {
    setThemeStatus(selectedValue);

    editLaporan({
      id: updateStatus.id,
      newLaporan: {
        ...updateStatus,
        status: selectedValue || updateStatus?.status,
      },
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className={`capitalize flex justify-between w-full ${themeStatus?.background}`}
        >
          <span>
            {selectedValue
              ? selectedValue
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : status}
          </span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <div className="flex">
        <button
          disabled={isEditing}
          onClick={handleChangeStatus}
          className="w-1/2 border border-black rounded-md p-1 bg-black font-bold text-white"
        >
          {isEditing ? <MiniSpinnerLoading /> : ""}
          Ubah
        </button>
        <DropdownMenuContent className="w-1/2">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
            className="capitalize"
          >
            <DropdownMenuRadioItem value="ditunda">
              ditunda
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="proses">proses</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="selesai">
              selesai
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
export default DropDown;
