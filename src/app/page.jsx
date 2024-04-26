"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { persistence } from "@/services/persistence.service";
import Login from "./login/page";
import { setCurrenttUser } from "@/store/slices/user.slice";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    persistence().then((token) => {
      if (!token.user.name) return router.push("/login");
      dispatch(setCurrenttUser(token));
      console.log(token);
      return router.push("/chat");
    });
  }, []);

  return <Login />;
}
