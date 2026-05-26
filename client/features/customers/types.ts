export type CustomerRow = {
  id: string;
  sn: number;
  legalName: string;
  partyName: string;
  address: string;
  salesPerson: string;
  overallDue: string;
  status: "Active" | "Pending" | "Hold" | "Overdue";
};
