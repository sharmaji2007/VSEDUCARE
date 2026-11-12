'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  X,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Video,
  HelpCircle,
  FileText,
  Download,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  amount: number;
  itemType: 'course' | 'notes';
  details: {
    board?: string;
    classLevel?: number | string;
    comboLabel?: string;
    batchMode?: 'online' | 'offline';
    billingCycle?: string;
    includedFeatures?: string[];
    noteTitle?: string;
    notePages?: number;
  };
}

export default function PaymentModal({
  isOpen,
  onClose,
  title,
  subtitle,
  amount,
  itemType,
  details,
}: PaymentModalProps) {
  const [copied, setCopied] = useState(false);
  const [utr, setUtr] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const upiId = 'vseducare@upi';
  const upiPayload = `upi://pay?pa=${upiId}&pn=VSEducare%20Education&am=${amount}&cu=INR&tn=Batch%20Enrollment`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerifyPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim() || !utr.trim()) {
      alert('Please fill in Student Name, Mobile Number, and UPI Reference / UTR Number.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setPaymentSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setPaymentSuccess(false);
    setUtr('');
    setStudentName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-900 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                Instant UPI Payment
              </span>
              <span className="text-blue-200 text-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                SSL Verified 256-Bit
              </span>
            </div>
            <h3 className="text-xl font-black mt-1.5">{title}</h3>
            <p className="text-xs text-blue-100">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {paymentSuccess ? (
            /* Success confirmation screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Payment Verified!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Welcome to <strong className="text-blue-700">vseducare</strong>! Your seat has been successfully reserved.
                </p>
              </div>

              {/* Receipt summary card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-bold text-slate-900">{studentName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Contact / WhatsApp:</span>
                  <span className="font-bold text-slate-900">{phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Item Enrolled:</span>
                  <span className="font-bold text-blue-700">
                    {itemType === 'course'
                      ? `${details.board} - Class ${details.classLevel} (${details.comboLabel})`
                      : details.noteTitle}
                  </span>
                </div>
                {itemType === 'course' && (
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Batch Mode:</span>
                    <span className="font-bold uppercase text-emerald-700">
                      {details.batchMode === 'online' ? 'Online (Google Meet Live)' : 'Offline Center'}
                    </span>
                  </div>
                )}
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-bold text-slate-900 text-sm">₹{amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Transaction UTR:</span>
                  <span className="font-mono font-semibold text-slate-700">{utr}</span>
                </div>
              </div>

              {/* Next steps */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  What happens next?
                </div>
                <ul className="text-[11px] text-blue-800 space-y-1 list-disc list-inside">
                  {itemType === 'course' ? (
                    <>
                      <li>You will receive your <strong>Google Meet joining link & schedule</strong> on WhatsApp ({phone}).</li>
                      <li>You are added to the <strong>24/7 Doubt clearing forum</strong> to connect with Sir directly.</li>
                      <li>Your Parent Ward Login ID will be sent via SMS within 2 hours.</li>
                    </>
                  ) : (
                    <>
                      <li>Your complete PDF study notes pack is unlocked!</li>
                      <li>A download copy and cloud drive link has been dispatched to {phone}.</li>
                    </>
                  )}
                </ul>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition"
              >
                Done & Return to Homepage
              </button>
            </div>
          ) : (
            /* Payment instruction & QR screen */
            <div className="space-y-5">
              {/* Price Callout */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">Payable Amount</span>
                  <div className="text-2xl font-black text-slate-900">
                    ₹{amount.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-500 ml-1.5">
                      {details.billingCycle || 'One-time payment'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Zero Extra Convenience Fee
                  </span>
                </div>
              </div>

              {/* Included features pill */}
              {itemType === 'course' && details.batchMode === 'online' && (
                <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3 text-xs space-y-1.5">
                  <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-indigo-600" />
                    Online Google Meet Batch Inclusions:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-indigo-800">
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      Live classes on Google Meet
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      Doubt section: Connect with Sir
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      Digital high-yield notes
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                      Parent performance portal access
                    </div>
                  </div>
                </div>
              )}

              {/* QR and UPI section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                {/* QR Code */}
                <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <div className="p-2 bg-white rounded-lg shadow-xs">
                    <QRCodeSVG
                      value={upiPayload}
                      size={155}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold mt-2">
                    Scan with any UPI App
                  </span>
                  <div className="flex gap-2 items-center justify-center mt-1.5 text-[10px] text-slate-400 font-bold">
                    <span>GPay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>BHIM</span>
                  </div>
                </div>

                {/* UPI details */}
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block">
                      Pay directly to Official UPI ID:
                    </label>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg font-mono font-bold text-xs text-slate-800 flex-1 truncate">
                        {upiId}
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold hover:bg-slate-50 transition flex items-center gap-1 text-slate-700 shrink-0"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-600 space-y-1">
                    <div className="font-semibold text-slate-700">Quick 2-Step Enrollment:</div>
                    <ol className="list-decimal list-inside space-y-0.5 text-slate-500">
                      <li>Scan the QR code or transfer to UPI ID</li>
                      <li>Enter your 12-digit UTR/Ref number below</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* UTR Form */}
              <form onSubmit={handleVerifyPayment} className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    UPI Reference / 12-digit UTR Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 431289456721 or Google Pay Txn ID"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg font-mono focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Found in your bank receipt or UPI app transaction history.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Verifying Payment...
                      </span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        Submit UTR & Confirm Admission
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
