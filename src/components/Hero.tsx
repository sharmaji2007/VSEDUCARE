'use client';

import React, { useState, useEffect } from 'react';
import {
  Video,
  HelpCircle,
  FileText,
  Users,
  ChevronRight,
  Sparkles,
  Building2,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { BATCH_BANNER_SLIDES } from '@/data/mockData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BATCH_BANNER_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = BATCH_BANNER_SLIDES[currentSlide];

  return (
    <div className="relative pt-4 pb-12 sm:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Colorful Banner (Vedantu style) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-500 text-white shadow-xl min-h-[360px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Tag & Badge */}
          <div className="flex items-center gap-2.5 z-10">
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {slide.tag}
            </span>
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {slide.badge}
            </span>
            <span className="hidden sm:inline text-xs text-white/80 font-medium">
              {slide.board}
            </span>
          </div>

          {/* Slide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto z-10">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {slide.headline}
              </h1>
              <p className="text-white/90 text-sm sm:text-lg max-w-2xl leading-relaxed">
                {slide.subhead}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  <Video className="w-3.5 h-3.5 text-amber-300" />
                  Live on Google Meet
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
                  24/7 Doubt with Sir
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  <FileText className="w-3.5 h-3.5 text-amber-300" />
                  Notes Included
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  <Users className="w-3.5 h-3.5 text-amber-300" />
                  Parent App
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-lg transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Graphic Badge / Learning Visual */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center shadow-2xl max-w-xs">
                <div className="w-20 h-20 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div className="text-xl font-black">vseducare</div>
                <p className="text-xs text-white/80 mt-1">
                  CBSE • ICSE • Foreign Board
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 text-left space-y-1.5 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Class 6 to 12 Batches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Maths, Science & SST Combos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Direct Guidance by Sir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex items-center justify-center gap-2 z-10 pt-4">
            {BATCH_BANNER_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Quick Feature Cards (Directly like the Vedantu screenshot!) */}
        <div className="relative -mt-6 sm:-mt-8 z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 sm:p-4">
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-2 mb-2">
              Popular Quick Access
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* 1. Online Google Meet */}
              <button
                onClick={() => onNavigate('courses')}
                className="p-3.5 rounded-xl bg-purple-50 hover:bg-purple-100/80 border border-purple-100 transition text-left flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-2 shadow-sm">
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                    Online Meet
                  </div>
                  <div className="text-[10px] text-purple-700 font-bold mt-0.5">Google Meet Live</div>
                </div>
                <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
              </button>

              {/* 2. Offline Center */}
              <button
                onClick={() => onNavigate('courses')}
                className="p-3.5 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-100 transition text-left flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2 shadow-sm">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                    Offline Center
                  </div>
                  <div className="text-[10px] text-blue-700 font-bold mt-0.5">Classroom Desk</div>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition" />
              </button>

              {/* 3. Notes Store (Notes Only) */}
              <button
                onClick={() => onNavigate('notes')}
                className="p-3.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-100 transition text-left flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center mb-2 shadow-sm">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                    Notes Store
                  </div>
                  <div className="text-[10px] text-amber-700 font-bold mt-0.5">Buy Notes Only</div>
                </div>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
              </button>

              {/* 4. Ask Doubt with Sir */}
              <button
                onClick={() => onNavigate('doubts')}
                className="p-3.5 rounded-xl bg-rose-50 hover:bg-rose-100/80 border border-rose-100 transition text-left flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center mb-2 shadow-sm">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                    Doubt with Sir
                  </div>
                  <div className="text-[10px] text-rose-700 font-bold mt-0.5">24/7 Connected</div>
                </div>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition" />
              </button>

              {/* 5. Parent Portal */}
              <button
                onClick={() => onNavigate('parents')}
                className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-100 transition text-left flex items-center justify-between group cursor-pointer col-span-2 sm:col-span-1"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-sm">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="font-black text-xs sm:text-sm text-slate-900 leading-tight">
                    Parent Portal
                  </div>
                  <div className="text-[10px] text-emerald-700 font-bold mt-0.5">Track Ward Live</div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
