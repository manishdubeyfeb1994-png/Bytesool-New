import { Metadata } from "next";
import ProcessClient from "./client";

export const metadata: Metadata = {
  title: "Our Process | Innovative AI & IT Solutions Delivery",
  description: "Explore our 5-step transparent process. From requirement discussion to flawless execution, see why we are a top-rated IT company.",
};

export default function ProcessPage() {
  return <ProcessClient />;
}
