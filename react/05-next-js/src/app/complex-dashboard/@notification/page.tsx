import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
    return (
        <div>
            <Card>
                <div className="flex flex-col">
                    <h2>Объявления</h2>
                    <div className="border border-b-blue-300 p-3">
                        <Link className="block hover:text-blue-400" href={'/complex-dashboard'}>Активные</Link>
                        <Link className="block hover:text-blue-400" href={'/complex-dashboard/archived'}>Архив</Link>
                    </div>
                </div>

            </Card>
        </div>
    )
}