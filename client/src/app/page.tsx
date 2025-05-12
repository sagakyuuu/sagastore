"use client";

import Logo from "@/components/ui/logo";
import { useEffect, useState } from "react";

interface DataTypes {
  message: string;
}

export default function Home() {
  const [datas, setDatas] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const res = await fetch("http://localhost:36461");
        if (!res.ok) throw new Error("Failed to fetch api");
        const data = await res.json();
        console.log(data);

        setDatas([data]);
        console.log(datas);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDatas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col">
      <Logo />
      <div className="">
        {datas.map((item: DataTypes) => (
          <div>{item.message}</div>
        ))}
      </div>
    </div>
  );
}
