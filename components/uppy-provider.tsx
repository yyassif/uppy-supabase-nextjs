"use client";

import { UPPY_BUCKET, UPPY_TUS_ENDPOINT } from "@/lib/constants";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import Webcam from "@uppy/webcam";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface UppyContextProps {
  uppy: Uppy;
}

const UppyContext = createContext<UppyContextProps | undefined>(undefined);

interface UppyProviderProps {
  children: ReactNode;
}

export const UppyProvider: React.FC<UppyProviderProps> = ({ children }) => {
  const [uppy] = useState(() =>
    new Uppy()
      .use(Tus, {
        endpoint: UPPY_TUS_ENDPOINT,
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
        allowedMetaFields: [
          "bucketName",
          "objectName",
          "contentType",
          "cacheControl",
        ],
      })
      .use(Webcam)
  );

  uppy.on("file-added", (file) => {
    file.meta = {
      ...file.meta,
      bucketName: UPPY_BUCKET,
      objectName: file.name,
      contentType: file.type,
    };
  });

  return (
    <UppyContext.Provider value={{ uppy }}>{children}</UppyContext.Provider>
  );
};

// Custom hook for using the uppy context within the uppy provider
export const useUppy = () => {
  const context = useContext(UppyContext);
  if (!context) {
    throw new Error("useUppyContext must be used within an UppyProvider");
  }

  return context;
};
