import EditProfileForm from "@/components/profile/edit-profile-form";
import { getUserById } from "@/lib/data";
import { notFound } from "next/navigation";

export default function EditProfilePage() {
    const user = getUserById('1');

    if (!user) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-6">Edit Profile</h1>
            <EditProfileForm user={user} />
        </div>
    )
}
