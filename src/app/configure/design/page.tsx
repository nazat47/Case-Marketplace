import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./_components/DesignConfigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Design = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") {
    return notFound();
  }
  const configuration = await db.configuration.findUnique({
    where: {
      id,
    },
  });
  if (!configuration) {
    return notFound();
  }
  const { imageUrl, width, height } = configuration;
  return (
    <DesignConfigurator
      configId={id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
};

export default Design;