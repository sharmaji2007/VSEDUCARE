'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BatchAnnouncements from '@/components/BatchAnnouncements';
import CourseConfigurator from '@/components/CourseConfigurator';
import NotesStore from '@/components/NotesStore';
import DoubtHub from '@/components/DoubtHub';
import ParentDashboard from '@/components/ParentDashboard';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('courses');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Clean Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Modern Banner & Floating Category Pills (Vedantu Style) */}
      <Hero onNavigate={scrollToSection} />

      {/* Batch Updates & Announcements */}
      <BatchAnnouncements onSelectBatch={() => scrollToSection('courses')} />

      {/* Interactive Course Configurator */}
      <CourseConfigurator onGoToNotes={() => scrollToSection('notes')} />

      {/* Notes Store (For Students Who Only Need Notes) */}
      <NotesStore />

      {/* 24/7 Doubt Section with Sir */}
      <DoubtHub />

      {/* Parent Performance Dashboard */}
      <ParentDashboard />

      {/* Footer */}
      <Footer />
    </main>
  );
}
