import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/topbar/topBar";
import Table from "@/components/table";

import axios from "axios";
import { baseURL } from "@/config/constant";

const categories = () => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];

  const [data, setData] = useState();

  useEffect(() => {
    fetchPageData();
  }, []);
  
  const fetchPageData = async () => {
    try {
      const url = `${baseURL}${linkText}`;
      const response = await axios.get(url);
      const requiredData = response?.data?.data;
      console.log("requiredData", requiredData);
      setData(requiredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="pagewrap">
        <Topbar title={linkText} />
        <Table data={data} />
      </div>
    </>
  );
};

export default categories;
