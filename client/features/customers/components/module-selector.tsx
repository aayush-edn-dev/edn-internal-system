"use client";
import { useState } from "react";

export type Module = {
  id: string;
  name: string;
  category: string;
  price: number;
};

export const erpModules: Module[] = [
  { id: "m-001", name: "Accounting Module", category: "Finance", price: 15000 },
  { id: "m-002", name: "HR & Payroll Module", category: "HR", price: 12000 },
  { id: "m-003", name: "Inventory Module", category: "Operations", price: 10000 },
  { id: "m-004", name: "POS Module", category: "Sales", price: 8000 },
  { id: "m-005", name: "CRM Module", category: "Sales", price: 18000 },
  { id: "m-006", name: "School Management Module", category: "Education", price: 20000 },
  { id: "m-007", name: "Library Module", category: "Education", price: 6000 },
  { id: "m-008", name: "Fee Collection Module", category: "Finance", price: 9000 },
  { id: "m-009", name: "Transport Module", category: "Operations", price: 7000 },
  { id: "m-010", name: "Hostel Module", category: "Operations", price: 8000 },
];

type Props = {
  selectedModules: { module: Module; customPrice: number }[];
  onChange: (selected: { module: Module; customPrice: number }[]) => void;
};

export function ModuleSelector({ selectedModules, onChange }: Props) {
  const [search, setSearch] = useState("");

  const filtered = erpModules.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
  );

  function isSelected(id: string) {
    return selectedModules.some((s) => s.module.id === id);
  }

  function toggleModule(module: Module) {
    if (isSelected(module.id)) {
      onChange(selectedModules.filter((s) => s.module.id !== module.id));
    } else {
      onChange([...selectedModules, { module, customPrice: module.price }]);
    }
  }

  function updatePrice(id: string, price: number) {
    onChange(
      selectedModules.map((s) =>
        s.module.id === id ? { ...s, customPrice: price } : s
      )
    );
  }

  return (
    <div className="space-y-4">
      <input
        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
        placeholder="Search modules..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filtered.map((module) => {
          const selected = isSelected(module.id);
          const entry = selectedModules.find((s) => s.module.id === module.id);

          return (
            <div
              key={module.id}
              className={`rounded-2xl border p-4 transition-all cursor-pointer ${
                selected
                  ? "border-blue-500 bg-blue-50"
                  : "border-border bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleModule(module)}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900 text-sm">
                      {module.name}
                    </p>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {module.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Base price: Rs. {module.price.toLocaleString()}
                  </p>

                  {selected && (
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-xs text-slate-600">
                        Custom price:
                      </label>
                      <input
                        type="number"
                        value={entry?.customPrice}
                        onChange={(e) =>
                          updatePrice(module.id, Number(e.target.value))
                        }
                        className="w-32 rounded-lg border border-border px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
