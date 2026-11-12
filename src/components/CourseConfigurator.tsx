'use client';

import React, { useState } from 'react';
import { BoardType, ClassLevel, ComboKey, BatchMode } from '@/types';
import { COMBOS_DATA, calculateCoursePrice } from '@/data/mockData';
import {
  CheckCircle2,
  Video,
  Building2,
  HelpCircle,
  FileText,
  Users,
  CreditCard,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import PaymentModal from './PaymentModal';

interface CourseConfiguratorProps {
  onGoToNotes?: () => void;
}

export default function CourseConfigurator({ onGoToNotes }: CourseConfiguratorProps) {
  const [board, setBoard] = useState<BoardType>('CBSE');
  const [classLevel, setClassLevel] = useState<ClassLevel>(10);
  const [selectedComboKey, setSelectedComboKey] = useState<ComboKey>('math_science_social');
  const [batchMode, setBatchMode] = useState<BatchMode>('online');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const boards: BoardType[] = ['CBSE', 'ICSE', 'Foreign Board'];
  const classes: ClassLevel[] = [6, 7, 8, 9, 10, 11, 12];

  const pricing = calculateCoursePrice(selectedComboKey, classLevel, board, batchMode);
  const selectedCombo = COMBOS_DATA.find((c) => c.key === selectedComboKey) || COMBOS_DATA[0];

  const currentPrice = billingCycle === 'monthly' ? pricing.monthly : pricing.quarterly;

  return (
    <section id="courses" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
            Batch Configurator
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Select Your Board, Class &amp; Combo
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Learn on Google Meet or in our Center with personal doubt solving by Sir.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-4">
            {/* 1. Board Selector */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-2.5">
                1. Select Board:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {boards.map((b) => (
                  <button
                    key={b}
                    onClick={() => setBoard(b)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-black transition cursor-pointer text-center ${
                      board === b
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Class Selector */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-2.5">
                2. Select Class (6 to 12):
              </label>
              <div className="grid grid-cols-7 gap-1.5">
                {classes.map((c) => (
                  <button
                    key={c}
                    onClick={() => setClassLevel(c)}
                    className={`py-2 rounded-xl border text-center transition cursor-pointer font-black text-xs ${
                      classLevel === c
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Class {c}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Subject Combos (1 to 7) */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                  3. Choose Subject Combo (1 to 7):
                </label>
                <span className="text-[11px] text-blue-600 font-bold">7 Combos</span>
              </div>

              <div className="space-y-2">
                {COMBOS_DATA.map((combo) => {
                  const isSelected = selectedComboKey === combo.key;
                  return (
                    <div
                      key={combo.key}
                      onClick={() => setSelectedComboKey(combo.key)}
                      className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {combo.number}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-xs sm:text-sm text-slate-900">
                              {combo.label}
                            </span>
                            {combo.badge && (
                              <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                                {combo.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500">{combo.description}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-black text-slate-900">
                          ₹{combo.monthlyBasePrice}
                        </span>
                        <span className="text-[10px] text-slate-400 block">/mo base</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Batch Mode: Online (Google Meet) or Offline */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-2.5">
                4. Select Mode (Online or Offline):
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBatchMode('online')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer relative ${
                    batchMode === 'online'
                      ? 'bg-purple-50 border-purple-600 ring-2 ring-purple-500/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="absolute top-2 right-2 bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase">
                    15% Off
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-purple-600" />
                    <span className="font-black text-xs sm:text-sm text-slate-900">Online Batch</span>
                  </div>
                  <span className="text-[11px] text-purple-800 font-semibold block">
                    Live on Google Meet
                  </span>
                </button>

                <button
                  onClick={() => setBatchMode('offline')}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    batchMode === 'offline'
                      ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-500/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span className="font-black text-xs sm:text-sm text-slate-900">Offline Batch</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Classroom Center Desk
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Price & Inclusions Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-5 shadow-lg space-y-4">
              {/* Summary Header */}
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  Configured Course
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {board} • Class {classLevel}
                </h3>
                <div className="text-xs font-bold text-blue-700">
                  Combo #{selectedCombo.number}: {selectedCombo.label}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 mt-1.5">
                  {batchMode === 'online' ? (
                    <>
                      <Video className="w-3.5 h-3.5 text-purple-600" /> Online (Google Meet)
                    </>
                  ) : (
                    <>
                      <Building2 className="w-3.5 h-3.5 text-blue-600" /> Offline Center
                    </>
                  )}
                </div>
              </div>

              {/* Duration switch */}
              <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`py-1.5 rounded-lg transition ${
                    billingCycle === 'monthly' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`py-1.5 rounded-lg transition ${
                    billingCycle === 'quarterly' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Quarterly (-10%)
                </button>
              </div>

              {/* Price */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-semibold">Total Fee:</span>
                  <div className="text-2xl font-black text-slate-900">
                    ₹{currentPrice.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-500 ml-1">
                      /{billingCycle === 'monthly' ? 'mo' : 'quarter'}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 mt-1 block">
                  ✓ {pricing.savingsText}
                </span>
              </div>

              {/* What Features Are Included */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="font-black text-slate-800 text-[11px] uppercase tracking-wider">
                  Features Included:
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Classes on Google Meet:</strong> Live interactive + recordings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Doubt Section:</strong> Ask doubt anytime connected with Sir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Topper Notes:</strong> Handwritten formulas &amp; summaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Parent Dashboard:</strong> Attendance, class time &amp; scores</span>
                  </div>
                </div>
              </div>

              {/* CTA: Open Payment QR */}
              <button
                onClick={() => setIsPaymentOpen(true)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>Get Payment QR &amp; Enroll</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick banner for students who only need notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between text-xs">
              <div>
                <span className="font-black text-amber-900 block">Only need Study Notes?</span>
                <span className="text-[11px] text-amber-800">Buy PDF notes directly from ₹199</span>
              </div>
              <button
                onClick={onGoToNotes}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] rounded-lg cursor-pointer"
              >
                Notes Store →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment QR Modal */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        title="Enroll in vseducare Batch"
        subtitle={`${board} • Class ${classLevel} • Combo #${selectedCombo.number}: ${selectedCombo.label}`}
        amount={currentPrice}
        itemType="course"
        details={{
          board,
          classLevel,
          comboLabel: selectedCombo.label,
          batchMode,
          billingCycle: billingCycle === 'monthly' ? 'Monthly' : 'Quarterly',
        }}
      />
    </section>
  );
}
