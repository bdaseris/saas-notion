"use server";

import db from "@/providers/supabase";
import { Subscription } from "@/providers/supabase/types";

type ResultDataType = {
  data: Subscription | null;
  error: string | null;
};

export const getUserSubscriptionStatus = async (userId: string) => {
  const result: ResultDataType = { data: null, error: null };

  try {
    const data = await db.query.subscriptions.findFirst({
      where: (sub, { eq }) => eq(sub.userId, userId),
    });

    if (data) {
      result.data = data as Subscription;
    }
    return result;
  } catch (error) {
    console.log(error);
    result.error = `Error`;
    return result;
  }
};
