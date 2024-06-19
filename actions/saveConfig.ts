"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveConfigProps = {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

export const saveConfig = async ({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigProps) => {
  await db.configuration.update({
    where: {
      id: configId,
    },
    data: {
      color,
      finish,
      model,
      material,
    },
  });
};
