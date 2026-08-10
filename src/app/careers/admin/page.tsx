import { Metadata } from "next";
import AdminClient from "./client";

export const metadata: Metadata = {
  title: "Admin Job Portal | Bytesool Careers",
  description: "Bytesool internal vacancies portal. Manage openings, edit details, set statuses and review candidate options.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return <AdminClient />;
}
