'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Phone,
  Menu,
  X,
  CreditCard,
  Users,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => scrollTo('courses')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-500 flex items-center justify-center text-white shadow-sm font-black">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                vs<span className="text-rose-600">educare</span>
              </span>
              <span className="ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
                Class 6–12
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-black text-slate-700">
            <button
              onClick={() => scrollTo('courses')}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Courses &amp; Combos
            </button>
            <button
              onClick={() => scrollTo('notes')}
              className="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Notes Store
            </button>
            <button
              onClick={() => scrollTo('doubts')}
              className="px-3 py-2 rounded-lg hover:text-rose-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Ask Doubt (24/7)
            </button>
            <button
              onClick={() => scrollTo('parents')}
              className="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Parent Portal
            </button>
          </nav>

          {/* Right Contact & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+91 98765 43210</span>
            </div>
            <button
              onClick={() => scrollTo('courses')}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-black shadow-xs transition cursor-pointer"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-4 space-y-2">
          <button
            onClick={() => scrollTo('courses')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Courses &amp; Combos
          </button>
          <button
            onClick={() => scrollTo('notes')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Notes Store (Notes Only)
          </button>
          <button
            onClick={() => scrollTo('doubts')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Ask Doubt with Sir
          </button>
          <button
            onClick={() => scrollTo('parents')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-lg hover:bg-slate-50"
          >
            Parent Performance Portal
          </button>
        </div>
      )}
    </header>
  );
}
