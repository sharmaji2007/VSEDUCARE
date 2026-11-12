'use client';

import React, { useState } from 'react';
import { DOUBT_THREADS } from '@/data/mockData';
import { DoubtThread } from '@/types';
import {
  HelpCircle,
  Video,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
} from 'lucide-react';

export default function DoubtHub() {
  const [threads, setThreads] = useState<DoubtThread[]>(DOUBT_THREADS);
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('Maths');
  const [question, setQuestion] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);
  const [requestedCall, setRequestedCall] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !question.trim()) return;

    const newThread: DoubtThread = {
      id: `d-${Date.now()}`,
      studentName: `${studentName} (Student)`,
      classLevel: 10,
      board: 'CBSE',
      subject,
      topic: 'Live Question',
      question,
      askedTime: 'Just now',
      status: 'In Progress',
      teacherReply: {
        teacherName: 'Sir',
        replyTime: 'Reviewing...',
        text: `Hello ${studentName}! Sir has received your question. Solution is being prepared.`,
      },
    };

    setThreads([newThread, ...threads]);
    setSubmittedNotice(true);
    setQuestion('');
    setTimeout(() => setSubmittedNotice(false), 4000);
  };

  return (
    <section id="doubts" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
            24/7 Doubt Section
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Ask Doubt Anytime • Connected with Sir
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Submit your questions directly to Sir. Get step-by-step written answers or hop on a 1-on-1 Google Meet call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Ask Form */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-rose-600" />
                Ask Sir a Question
              </span>
              <button
                onClick={() => setRequestedCall(true)}
                className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                {requestedCall ? 'Call Requested ✓' : 'Request 1-on-1 Call'}
              </button>
            </div>

            {submittedNotice && (
              <div className="mb-3 p-2.5 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Question sent to Sir! Check your WhatsApp / notification.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-hidden"
                >
                  <option value="Maths">Maths</option>
                  <option value="Science">Science (Physics/Chem/Bio)</option>
                  <option value="Social Science">Social Science</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Question / Doubt</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Type your question or where you are getting stuck..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Send Question to Sir
              </button>
            </form>
          </div>

          {/* Solved by Sir Feed */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
              Recent Answers from Sir:
            </span>

            {threads.slice(0, 2).map((thread) => (
              <div
                key={thread.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900">{thread.studentName}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                      {thread.subject}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">{thread.askedTime}</span>
                </div>

                <p className="text-xs font-semibold text-slate-800">"{thread.question}"</p>

                {thread.teacherReply && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-black text-blue-900 text-[11px]">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px]">
                        S
                      </span>
                      Answer by Sir:
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[11px]">{thread.teacherReply.text}</p>
                    {thread.teacherReply.solutionSteps && (
                      <div className="space-y-0.5 pt-1 text-[11px] font-mono text-slate-800">
                        {thread.teacherReply.solutionSteps.map((step, idx) => (
                          <div key={idx}>• {step}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
