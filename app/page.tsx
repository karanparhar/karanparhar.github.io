import ProfileHeader from '@/components/ProfileHeader';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
      <>
        <ProfileHeader />
        <hr className="divider mx-6 md:mx-12 lg:mx-20" />
        <ExperienceSection />
        <hr className="divider mx-6 md:mx-12 lg:mx-20" />
        <ProjectsSection />
        <hr className="divider mx-6 md:mx-12 lg:mx-20" />
        <EducationSection />
        <hr className="divider mx-6 md:mx-12 lg:mx-20" />
        <SkillsSection />
        <hr className="divider mx-6 md:mx-12 lg:mx-20" />
        <ContactSection />
      </>
    );
}
