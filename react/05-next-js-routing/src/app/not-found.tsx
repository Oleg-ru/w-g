import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen bg-gray-700">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className="bg-cyan-700 p-2 rounded cursor-pointer hover:bg-cyan-500 hover:text-black">Return Home</Link>
        </div>
    )
}