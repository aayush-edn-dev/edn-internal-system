export type FollowUpRow = {
  id: string;
  sn: number;
  partyName: string;
  panNo: string;
  contactPerson: string;
  followUpCount: number;
  via: string;
  lastFollowUp: string;
  withinDays: number;
  nextFollowUp: string;
  status: "Today" | "Upcoming" | "Pending" | "Overdue";
};
