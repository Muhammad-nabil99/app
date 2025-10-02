const STATUS = {
  ANTRIAN: "ditunda",
  SELESAI: "selesai",
  PROSES: "proses",
};

function statusColor(status) {

  if (`${status}`.toLowerCase() === STATUS.ANTRIAN) {
    return {
      dot: "bg-yellow-600",
      background: "bg-yellow-500",
    };
  }
  if (`${status}`.toLowerCase() === STATUS.PROSES) {
    return {
      dot: "bg-blue-600",
      background: "bg-blue-500",
    };
  }
  if (`${status}`.toLowerCase() === STATUS.SELESAI) {
    return {
      dot: "bg-green-600",
      background: "bg-green-500",
    };
  }
}
export default statusColor;
