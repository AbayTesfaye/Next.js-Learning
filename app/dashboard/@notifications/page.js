import Link from "next/link";
import Card from "../../components/card";

function Notification() {
  return (
    <Card className="flex flex-col">
      <h1>Notification</h1>
      <Link href="/dashboard/archive" className="font-bold text-blue-500">
        Archive
      </Link>
    </Card>
  );
}

export default Notification;
