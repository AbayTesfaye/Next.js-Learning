import Link from "next/link";
import Card from "../../../components/card";

function ArchiveNotifications() {
  return (
    <Card>
      <Link href="/dashboard" className="font-bold text-blue-500">
        Default
      </Link>
    </Card>
  );
}

export default ArchiveNotifications;
