'use client';

import React from 'react';
import { BATCH_UPDATES } from '@/data/mockData';
import {
  Calendar,
  Clock,
  Video,
  Building2,
  Flame,
  ArrowRight,
  Bell,
} from 'lucide-react';

interface BatchAnnouncementsProps {
  onSelectBatch: () => void;
}

export default function BatchAnnouncements({ onSelectBatch }: BatchAnnouncementsProps) {
  return (
    <section id="batches" className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <h3 className="font-black text-sm sm:text-base text-slate-900">
              Active Batches &amp; Admission Updates
            </h3>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">25 Seats/Batch Limit</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BATCH_UPDATES.map((b) => (
            <div
              key={b.id}
              onClick={onSelectBatch}
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-black mb-1.5">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {b.board} • {b.classGrade}
                  </span>
                  {b.isNew && (
                    <span className="text-rose-600 font-extrabold flex items-center gap-0.5">
                      <Flame className="w-3 h-3 fill-rose-600" /> Filling
                    </span>
                  )}
                </div>
                <h4 className="font-black text-xs text-slate-900 leading-snug">{b.title}</h4>
                <div className="text-[11px] text-slate-500 mt-2 space-y-0.5">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{b.timing}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>Starts: <strong className="text-slate-800">{b.startDate}</strong></span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-rose-600 font-black">{b.seatsLeft} seats left</span>
                <span className="text-blue-600 font-black flex items-center gap-0.5">
                  Enroll →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
