'use client';

import React, { useState } from 'react';
import { MOCK_STUDENTS_DATA } from '@/data/mockData';
import { StudentWardProfile } from '@/types';
import {
  Users,
  Calendar,
  Award,
  FileCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Video,
  Building2,
} from 'lucide-react';

export default function ParentDashboard() {
  const [selectedWardKey, setSelectedWardKey] = useState<'VSE-2026-A1' | 'VSE-2026-B4'>(
    'VSE-2026-A1'
  );
  const [activeTab, setActiveTab] = useState<'attendance' | 'tests' | 'assignments'>('attendance');

  const ward = MOCK_STUDENTS_DATA[selectedWardKey];

  return (
    <section id="parents" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Parent Monitoring Dashboard
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Track Ward's Attendance, Class Time &amp; Scores
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time daily attendance, exact Google Meet login time stamps, test ranks, and assignments.
          </p>

          {/* Quick Demo Switcher */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xs text-slate-400 font-bold">Select Ward:</span>
            <button
              onClick={() => setSelectedWardKey('VSE-2026-A1')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedWardKey === 'VSE-2026-A1'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Rohan (CBSE Class 10)
            </button>
            <button
              onClick={() => setSelectedWardKey('VSE-2026-B4')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedWardKey === 'VSE-2026-B4'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Priya (ICSE Class 9)
            </button>
          </div>
        </div>

        {/* Ward Overview Banner */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center">
              {ward.studentName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-slate-900">{ward.studentName}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  {ward.board} Class {ward.classLevel}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Course: <strong className="text-slate-800">{ward.enrolledCombo}</strong> • {ward.batchTiming}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 font-bold block">Attendance</span>
              <span className="text-lg font-black text-emerald-600">{ward.attendanceRate}%</span>
            </div>
            <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 font-bold block">Avg Score</span>
              <span className="text-lg font-black text-blue-600">{ward.averageScore}%</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 border-b border-slate-200 pb-3 mb-4">
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'attendance'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Attendance &amp; Class Timings
          </button>
          <button
            onClick={() => setActiveTab('tests')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tests'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Test Scores
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'assignments'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            Assignments
          </button>
        </div>

        {/* TAB 1: Attendance Log & Exact Class Time */}
        {activeTab === 'attendance' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 font-bold">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">What Time Class Attended</th>
                    <th className="py-2.5 px-3">Duration</th>
                    <th className="py-2.5 px-3">Platform</th>
                    <th className="py-2.5 px-3">Sir's Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ward.attendance.map((entry, idx) => (
                    <tr
                      key={idx}
                      className={entry.status === 'Absent' ? 'bg-rose-50/50' : 'hover:bg-slate-50/50'}
                    >
                      <td className="py-2.5 px-3 font-bold text-slate-900">
                        {entry.date} <span className="text-[10px] text-slate-400 font-normal">({entry.day})</span>
                      </td>
                      <td className="py-2.5 px-3">
                        {entry.status === 'Present' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3" /> Present
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                            <XCircle className="w-3 h-3" /> Absent
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 font-mono font-bold text-slate-800">
                        {entry.timeAttended}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">{entry.duration}</td>
                      <td className="py-2.5 px-3 text-[11px] text-indigo-700 font-semibold">
                        {entry.platform}
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">{entry.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Test Scores */}
        {activeTab === 'tests' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ward.tests.map((test) => (
              <div key={test.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-blue-700">{test.subject}</span>
                  <span className="font-black px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px]">
                    {test.rank}
                  </span>
                </div>
                <h4 className="font-black text-sm text-slate-900">{test.title}</h4>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-200 text-xs">
                  <span className="text-slate-500">Marks Scored:</span>
                  <span className="font-black text-slate-900">
                    {test.marksObtained} / {test.totalMarks} ({test.percentage}%)
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-2 bg-white p-2 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Sir's Note:</strong> {test.feedback}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Assignments */}
        {activeTab === 'assignments' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 font-bold">
                  <th className="py-2.5 px-3">Assignment</th>
                  <th className="py-2.5 px-3">Subject</th>
                  <th className="py-2.5 px-3">Due Date</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ward.assignments.map((asgn) => (
                  <tr key={asgn.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{asgn.title}</td>
                    <td className="py-2.5 px-3 text-slate-600">{asgn.subject}</td>
                    <td className="py-2.5 px-3 text-slate-500">{asgn.dueDate}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          asgn.status === 'Submitted'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {asgn.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{asgn.score || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
