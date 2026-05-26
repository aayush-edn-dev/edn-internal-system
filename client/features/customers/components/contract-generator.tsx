"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModuleSelector } from "./module-selector";
import type { Module } from "./module-selector";

export function ContractGenerator() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedModules, setSelectedModules] = useState<
    { module: Module; customPrice: number }[]
  >([]);
  const [vatType, setVatType] = useState<"exclusive" | "inclusive">("exclusive");
  const [generated, setGenerated] = useState(false);

  const subtotal = selectedModules.reduce((sum, s) => sum + s.customPrice, 0);
  const vatAmount =
    vatType === "exclusive"
      ? subtotal * 0.13
      : subtotal - subtotal / 1.13;
  const total = vatType === "exclusive" ? subtotal + vatAmount : subtotal;

  const customers = [
    "Siraha Public School Pvt. Ltd.",
    "Shepherd Children Academy",
    "Peace Zone Model Secondary School",
    "Madan Bhandari Memorial Academy",
    "Little Steps Learning Center",
    "Himalayan College",
  ];

  return (
    <div className="space-y-6">
      {/* Customer Selection */}
      <div className="rounded-[28px] border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          1. Select Customer
        </h2>
        <select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">-- Select a customer --</option>
          {customers.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Module Selection */}
      <div className="rounded-[28px] border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          2. Select ERP Modules
        </h2>
        <ModuleSelector
          selectedModules={selectedModules}
          onChange={setSelectedModules}
        />
      </div>

      {/* VAT Selection */}
      <div className="rounded-[28px] border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          3. VAT Options
        </h2>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={vatType === "exclusive"}
              onChange={() => setVatType("exclusive")}
              className="h-4 w-4 rounded border-slate-300"
            />
            <span className="text-sm font-medium text-slate-700">
              VAT 13% Exclusive (added on top)
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={vatType === "inclusive"}
              onChange={() => setVatType("inclusive")}
              className="h-4 w-4 rounded border-slate-300"
            />
            <span className="text-sm font-medium text-slate-700">
              VAT 13% Inclusive (already inside price)
            </span>
          </label>
        </div>
      </div>

      {/* Price Summary */}
      {selectedModules.length > 0 && (
        <div className="rounded-[28px] border border-border bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            4. Price Summary
          </h2>
          <div className="space-y-2">
            {selectedModules.map((s) => (
              <div key={s.module.id} className="flex justify-between text-sm">
                <span className="text-slate-700">{s.module.name}</span>
                <span className="font-medium">
                  Rs. {s.customPrice.toLocaleString()}
                </span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">
                  VAT 13% ({vatType})
                </span>
                <span>Rs. {Math.round(vatAmount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-1">
                <span>Total</span>
                <span>Rs. {Math.round(total).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generate Button */}
      <div className="flex gap-3">
        <Button
          onClick={() => setGenerated(true)}
          disabled={!selectedCustomer || selectedModules.length === 0}
        >
          Generate Contract
        </Button>
      </div>

      {/* Generated Contract */}
      {generated && selectedCustomer && (
        <div className="rounded-[28px] border-2 border-blue-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Digital Nepal Pvt. Ltd.
            </h1>
            <p className="text-slate-500 text-sm">Software Service Agreement</p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-slate-600">Customer:</p>
            <p className="font-semibold text-slate-900">{selectedCustomer}</p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-slate-600 mb-2">Selected Modules:</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-slate-600">Module</th>
                  <th className="text-right py-2 text-slate-600">Price</th>
                </tr>
              </thead>
              <tbody>
                {selectedModules.map((s) => (
                  <tr key={s.module.id} className="border-b border-slate-100">
                    <td className="py-2 text-slate-700">{s.module.name}</td>
                    <td className="py-2 text-right font-medium">
                      Rs. {s.customPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border pt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">VAT 13% ({vatType})</span>
              <span>Rs. {Math.round(vatAmount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-base text-slate-900 pt-2">
              <span>Total Amount</span>
              <span>Rs. {Math.round(total).toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-8 flex justify-between text-sm text-slate-500">
            <div>
              <p className="font-medium text-slate-700">Customer Signature</p>
              <div className="mt-8 border-t border-slate-300 w-40" />
            </div>
            <div className="text-right">
              <p className="font-medium text-slate-700">Authorized Signature</p>
              <div className="mt-8 border-t border-slate-300 w-40 ml-auto" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button onClick={() => window.print()}>Print Contract</Button>
          </div>
        </div>
      )}
    </div>
  );
}
