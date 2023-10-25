import Link from "next/link";

export default function ProfileNavbar() {
    return (
        <div className="w-[50rem] h-6 ">
            <Link href={'/'}><span className="hover:bg-gray-100 cursor-pointer rounded">Home</span></Link>
            <span>{`>`}</span>
            <span className="hover:bg-gray-100 cursor-pointer rounded">Profile</span>
        </div>
    )
}
