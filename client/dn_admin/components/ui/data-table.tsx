import type { ReactNode } from "react";
import { cn } from "@/lib/classnames";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export type DataTableColumn<T> = {
  id: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
};

type DataTableProps<T> = {
  columns: Array<DataTableColumn<T>>;
  rows: T[];
  getRowKey: (row: T, index: number) => string;
  emptyState?: ReactNode;
  className?: string;
};

export function DataTable<T>({
  columns,
  rows,
  getRowKey,
  emptyState,
  className,
}: DataTableProps<T>) {
  return (
    <Card className={cn("p-0", className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "border-b border-border bg-slate-50/80 px-5 py-4 first:rounded-tl-[28px] last:rounded-tr-[28px]",
                    column.headerClassName,
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <tr key={getRowKey(row, rowIndex)} className="group text-sm text-slate-700">
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className={cn(
                        "border-b border-border/70 px-5 py-4 align-middle last:rounded-br-[28px] group-last:border-b-0",
                        column.cellClassName,
                      )}
                    >
                      {column.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-5 py-10" colSpan={columns.length}>
                  {emptyState ?? (
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-1/4" />
                      <Skeleton className="h-4 w-3/5" />
                      <Skeleton className="h-4 w-2/5" />
                    </div>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}