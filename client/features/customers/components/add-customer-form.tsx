"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AddCustomerForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    legalName: "",
    partyName: "",
    address: "",
    salesPerson: "",
    contactDetails: "",
    email: "",
    status: "Active",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log("New Customer:", form);
    router.push("/customers");
  }

  return (
    <div className="rounded-[28px] border border-border bg-white/90 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)] max-w-2xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Legal Name *</label>
          <input
            name="legalName"
            value={form.legalName}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. Siraha Public School Pvt. Ltd."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Party Name</label>
          <input
            name="partyName"
            value={form.partyName}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. Siraha Public School"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. Kathmandu, Nepal"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Sales Person</label>
          <input
            name="salesPerson"
            value={form.salesPerson}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. Aarav Shrestha"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Contact Details</label>
          <input
            name="contactDetails"
            value={form.contactDetails}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 9800000001"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. school@edu.np"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Hold">Hold</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <Button onClick={handleSubmit}>Save Customer</Button>
        <Button variant="secondary" onClick={() => router.push("/customers")}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
