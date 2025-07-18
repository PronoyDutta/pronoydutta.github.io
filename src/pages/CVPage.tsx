import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import ActivityCard from '../components/ActivityCard';
import PublicationCard from '../components/PublicationCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SkillsSection from '../components/SkillsSection';
import {
  personalInfo,
  recentActivities,
  publications,
  experience,
  education,
  skills
} from '../data/cv-data';

const CVPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header personalInfo={personalInfo} />
      
      <Section title="Recent Activities" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </Section>

      <Section title="Publications" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </Section>

      <Section title="Experience" className="bg-white">
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>

      <Section title="Education" className="bg-gray-50">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </Section>

      <Section title="Skills" className="bg-white">
        <SkillsSection skills={skills} />
      </Section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CVPage;