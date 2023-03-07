import * as React from "react";

interface SummaryRow {
  text: string;
  selections: number;
}

interface SummaryPresentation {
  rows: SummaryRow[];
  allCount: number;
}

type SummaryTableProps = SummaryPresentation;

export const SummaryTable: React.FC<SummaryTableProps> = (props) => (
  <>
    {/* header */}
    {/* rows */}
  </>
);

type SummaryGraphProps = SummaryPresentation;

export const SummaryGraph: React.FC<SummaryGraphProps> = (props) => <></>;
