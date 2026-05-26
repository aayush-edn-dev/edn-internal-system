export type CustomerRow = {
  id: string;
  sn: number;
  legalName: string;
  partyName: string;
  address: string;
  salesPerson: string;
  overallDue: string;
  actualDue: string;
  nextFollowupDate: string;
  contactDetails: string;
  email: string;
  status: "Active" | "Pending" | "Hold" | "Overdue";
  modifiedBy: string;
  modifiedAt: string;
};