import Link from "next/link";
import Card from "@/components/card";

export default function ArchivedPage() {
    return (
        <div>
            <Card>
                <div className="flex flex-col">
                    <h2>Архив объявлений</h2>
                    <div className="border border-b-blue-300 p-3">
                        <Link className="block hover:text-blue-400" href={'/complex-dashboard'}>Активные</Link>
                    </div>
                </div>

            </Card>
        </div>
    )
}