import { notFound } from 'next/navigation';
import { getUserById } from '@/lib/data';
import ProfileHeader from '@/components/profile/profile-header';
import SummarySection from '@/components/profile/summary-section';
import ExperienceSection from '@/components/profile/experience-section';
import EducationSection from '@/components/profile/education-section';
import SkillsSection from '@/components/profile/skills-section';

type ProfilePageProps = {
  params: { id: string };
};

export default function ProfilePage({ params }: ProfilePageProps) {
  const user = getUserById(params.id);

  if (!user) {
    notFound();
  }
  
  // Assuming user '1' is the current user viewing the profile
  const isCurrentUser = params.id === '1';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <ProfileHeader user={user} isCurrentUser={isCurrentUser} />
      <SummarySection summary={user.summary} />
      <ExperienceSection experience={user.experience} />
      <EducationSection education={user.education} />
      <SkillsSection skills={user.skills} />
    </div>
  );
}
