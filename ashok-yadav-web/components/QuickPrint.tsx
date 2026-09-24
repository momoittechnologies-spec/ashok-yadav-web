"use client";

import { useState, useMemo } from "react";
import { Calculator, MessageCircle, RotateCcw } from "lucide-react";

type PrintType = "bw" | "color";
type Sides = "single" | "double";
type BindingType = "none" | "staple" | "spiral" | "hard";

const BINDING_LABELS: Record<BindingType, string> = {
  none: "No Binding",
  staple: "Staple Binding",
  spiral: "Spiral Binding",
  hard: "Hard Cover Binding",
};

// Approximate rate card (to be confirmed with business)
const RATES = {
  bw_single: 0.8,
  bw_double: 1.4,
  color_single: 5,
  color_double: 9,
  binding: {
    none: 0,
    staple: 5,
    spiral: 30,
    hard: 80,
  },
};

export default function QuickPrint() {
  const [printType, setPrintType] = useState<PrintType>("bw");
  const [sides, setSides] = useState<Sides>("single");
  const [pages, setPages] = useState(10);
  const [copies, setCopies] = useState(1);
  const [binding, setBinding] = useState<BindingType>("none");

  const estimate = useMemo(() => {
    const rateKey = `${printType}_${sides}` as keyof typeof RATES;
    const perPage = RATES[rateKey] as number;
    const printCost = perPage * pages * copies;
    const bindingCost = RATES.binding[binding] * copies;
    const total = printCost + bindingCost;
    return { printCost, bindingCost, total };
  }, [printType, sides, pages, copies, binding]);

  const waMessage = useMemo(() => {
    const typeLabel = printType === "bw" ? "Black & White" : "Colour";
    const sideLabel = sides === "single" ? "Single-sided" : "Double-sided";
    const bindLabel = BINDING_LABELS[binding];
    return encodeURIComponent(
      `Hi, I want to place a print order:\n\n` +
        `📄 Type: ${typeLabel}\n` +
        `📋 Sides: ${sideLabel}\n` +
        `📃 Pages: ${pages}\n` +
        `🔢 Copies: ${copies}\n` +
        `📦 Binding: ${bindLabel}\n` +
        `💰 Estimated Total: ₹${estimate.total.toFixed(0)}\n\n` +
        `Please confirm availability and let me know when it's ready for pickup.`
    );
  }, [printType, sides, pages, copies, binding, estimate]);

  const reset = () => {
    setPrintType("bw");
    setSides("single");
    setPages(10);
    setCopies(1);
    setBinding("none");
  };

  return (
    <section id="quickprint" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#F59E0B]/15 text-amber-700 rounded-full text-sm font-semibold mb-4">
            ⚡ QuickPrint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Instant Print Cost{" "}
            <span className="text-[#F59E0B]">Calculator</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed">
            Select your print options, get an instant cost estimate, and send your
            order directly to WhatsApp — skip the counter queue!
          </p>
          <p className="text-xs text-slate-400 mt-2">
            * Rates shown are approximate. Final pricing confirmed at counter.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* Print Type */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Print Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["bw", "color"] as PrintType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setPrintType(type)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm border-2 transition-all min-h-[48px] ${
                    printType === type
                      ? "border-[#1E3A8A] bg-[#1E3A8A] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {type === "bw" ? "⬛ Black & White" : "🎨 Colour"}
                </button>
              ))}
            </div>
          </div>

          {/* Sides */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Sides
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["single", "double"] as Sides[]).map((side) => (
                <button
                  key={side}
                  onClick={() => setSides(side)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm border-2 transition-all min-h-[48px] ${
                    sides === side
                      ? "border-[#1E3A8A] bg-[#1E3A8A] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {side === "single" ? "Single Sided" : "Double Sided"}
                </button>
              ))}
            </div>
          </div>

          {/* Pages & Copies */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                No. of Pages
              </label>
              <input
                type="number"
                min={1}
                max={5000}
                value={pages}
                onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 font-semibold text-center text-lg focus:outline-none focus:border-[#1E3A8A] min-h-[48px]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                No. of Copies
              </label>
              <input
                type="number"
                min={1}
                max={1000}
                value={copies}
                onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 font-semibold text-center text-lg focus:outline-none focus:border-[#1E3A8A] min-h-[48px]"
              />
            </div>
          </div>

          {/* Binding */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Binding Option
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(Object.keys(BINDING_LABELS) as BindingType[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBinding(b)}
                  className={`py-3 px-3 rounded-xl font-semibold text-xs border-2 transition-all min-h-[48px] ${
                    binding === b
                      ? "border-[#F59E0B] bg-[#F59E0B] text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-amber-200"
                  }`}
                >
                  {BINDING_LABELS[b]}
                </button>
              ))}
            </div>
          </div>

          {/* Estimate Card */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl p-6 text-white mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Calculator size={18} className="text-[#F59E0B]" />
              <span className="font-semibold text-sm text-blue-200">Estimated Cost</span>
            </div>
            <div className="space-y-2 text-sm text-blue-200 mb-4">
              <div className="flex justify-between">
                <span>Print cost ({pages} pages × {copies} copies)</span>
                <span className="font-semibold text-white">₹{estimate.printCost.toFixed(0)}</span>
              </div>
              {estimate.bindingCost > 0 && (
                <div className="flex justify-between">
                  <span>Binding ({BINDING_LABELS[binding]})</span>
                  <span className="font-semibold text-white">₹{estimate.bindingCost.toFixed(0)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-blue-400/30 pt-2 text-base font-bold text-white">
                <span>Total Estimate</span>
                <span className="text-[#F59E0B] text-xl">₹{estimate.total.toFixed(0)}</span>
              </div>
            </div>
            <p className="text-blue-300 text-xs">* Final rate confirmed at the counter. Bulk discounts available.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/919963095103?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#128C7E] transition-colors shadow-md min-h-[56px]"
            >
              <MessageCircle size={18} />
              Send Order via WhatsApp
            </a>
            <button
              onClick={reset}
              className="sm:w-14 flex items-center justify-center gap-2 py-4 px-4 rounded-xl border-2 border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 transition-colors min-h-[56px]"
              aria-label="Reset calculator"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
