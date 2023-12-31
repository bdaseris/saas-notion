"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  return <main>Login page</main>;
}
