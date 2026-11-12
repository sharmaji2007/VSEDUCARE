'use client';

import React, { useState } from 'react';
import { NOTES_CATALOG } from '@/data/mockData';
import { NoteItem } from '@/types';
import {
  FileText,
  Star,
  CheckCircle2,
  CreditCard,
  Eye,
  X,
  Sparkles,
} from 'lucide-react';
import PaymentModal from './PaymentModal';

export default function NotesStore() {
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [previewNote, setPreviewNote] = useState<NoteItem | null>(null);
  const [activePaymentNote, setActivePaymentNote] = useState<NoteItem | null>(null);

  const filteredNotes = NOTES_CATALOG.filter((note) => {
    if (selectedSubject !== 'All' && note.subject !== selectedSubject) return false;
    return true;
  });

  return (
    <section id="notes" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Digital Notes Store
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Buy Notes Only (No Live Classes Needed)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Handwritten topper notes, formula sheets &amp; solved board questions for self-study students.
          </p>

          {/* Clean Subject Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {['All', 'Maths', 'Science', 'Social Science'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  selectedSubject === sub
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Clean Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-black mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">
                    {note.board} • Class {note.classLevel}
                  </span>
                  <span className="text-amber-500 flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400" /> {note.rating}
                  </span>
                </div>

                <h3 className="font-black text-sm text-slate-900 leading-snug line-clamp-2">
                  {note.title}
                </h3>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {note.pages} Pages • {note.chaptersCount} Chapters
                </span>

                <ul className="mt-3 space-y-1 text-[11px] text-slate-600">
                  {note.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="text-xl font-black text-slate-900">₹{note.price}</span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">₹{note.originalPrice}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    PDF Download
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setPreviewNote(note)}
                    className="py-2 text-center text-xs font-bold border border-slate-300 rounded-xl hover:bg-white text-slate-700 cursor-pointer"
                  >
                    Sample
                  </button>
                  <button
                    onClick={() => setActivePaymentNote(note)}
                    className="py-2 text-center text-xs font-black bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs cursor-pointer"
                  >
                    Buy QR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Preview Modal */}
      {previewNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                Notes Preview
              </span>
              <button onClick={() => setPreviewNote(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-black text-sm text-slate-900">{previewNote.title}</h3>
            <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-800 block text-[11px]">Included Topics:</span>
              {previewNote.previewPages.map((p, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-lg font-black text-slate-900">₹{previewNote.price}</span>
              <button
                onClick={() => {
                  const target = previewNote;
                  setPreviewNote(null);
                  setActivePaymentNote(target);
                }}
                className="px-4 py-2 bg-blue-600 text-white text-xs font-black rounded-xl cursor-pointer"
              >
                Proceed to Buy via QR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes Payment QR Modal */}
      {activePaymentNote && (
        <PaymentModal
          isOpen={true}
          onClose={() => setActivePaymentNote(null)}
          title="Buy Study Notes"
          subtitle={activePaymentNote.title}
          amount={activePaymentNote.price}
          itemType="notes"
          details={{
            noteTitle: activePaymentNote.title,
            notePages: activePaymentNote.pages,
          }}
        />
      )}
    </section>
  );
}
