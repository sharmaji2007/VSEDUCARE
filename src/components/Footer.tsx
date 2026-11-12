'use client';

import React from 'react';
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Video,
  Sparkles,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                vs<span className="text-blue-500">educare</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students from Class 6 to 12 across CBSE, ICSE, and Foreign Boards. Conceptual mastery in Maths, Science, and Social Science through personalized mentorship.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Government Registered EdTech Startup</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Courses & Combos</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#courses" className="hover:text-white transition">Class 6 to 8 Foundation</a></li>
              <li><a href="#courses" className="hover:text-white transition">Class 9 & 10 Board Sprint</a></li>
              <li><a href="#courses" className="hover:text-white transition">Class 11 & 12 Science & Maths</a></li>
              <li><a href="#courses" className="hover:text-white transition">Math + Science Super Duo</a></li>
              <li><a href="#courses" className="hover:text-white transition">Ultimate Trio (Math+Sci+SST)</a></li>
              <li><a href="#courses" className="hover:text-white transition">Foreign Board IGCSE & IB MYP</a></li>
            </ul>
          </div>

          {/* Col 3: Portals */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Student & Parent Tools</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#notes" className="hover:text-white transition">Buy Notes Store (Notes Only)</a></li>
              <li><a href="#doubts" className="hover:text-white transition">Ask Doubt with Sir (24/7)</a></li>
              <li><a href="#parents" className="hover:text-white transition">Parent Attendance & Marks Tracker</a></li>
              <li><a href="#batches" className="hover:text-white transition">Upcoming Batch Announcements</a></li>
              <li><a href="#courses" className="hover:text-white transition">UPI QR Fee Payment</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Faculty */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Contact & Mentorship</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+91 98765 43210 (Admissions / WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>admissions@vseducare.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>vseducare Learning Center, Sector 14, Academic Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Online Batches: Hosted daily on Google Meet</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 vseducare. All rights reserved. Designed for students, trusted by parents.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
