"use client";

import { useUppy } from "@/components/uppy-provider";
import { Dashboard } from "@uppy/react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

export default function UppyDashboard() {
  const { uppy } = useUppy();
  return <Dashboard uppy={uppy} id="supa-upload" plugins={["Webcam"]} />;
}
