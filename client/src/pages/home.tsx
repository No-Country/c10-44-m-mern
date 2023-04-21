import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import Homeconmembresia from "@/components/Homeconmembresia";
import Homesinmembresia from "@/components/Homesinmembresia";

function Home() {
  const router = useRouter();

  const { authList } = useAppSelector((rootReducer) => rootReducer.auth);

  useEffect(() => {
    if (!authList) router.push("/login");
  }, []);

  return (
    <div>
      {authList?.isSuscribed ? <Homeconmembresia /> : <Homesinmembresia />}
    </div>
  );
}

export default Home;
