import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/topbar/topBar";
import Button from "../components/button";
import Search from "../components/search";
import Table from "@/components/table";
import GenreCreate from "@/components/create/genreCreate";

import axios from "axios";
import { baseURL } from "@/config/constant";

import { createEntity } from "@/services/createEntity";
import { useDispatch, useSelector } from 'react-redux';

const genres = () => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];
  console.log("linkText", linkText);
  
  const dispatch = useDispatch();
  const genre = useSelector(state => state);

  const [data, setData] = useState();
  const [flagCreate, setFlagCreate] = useState(false);
  const [flagCreateGenre, setFlagCreateGenre] = useState(false);

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

  // const createNewEntity = async (genreData, linkText) => {
  //   try {
  //     console.log("entity going for new addition", genreData);
  //     const response = await createEntity(genreData, linkText);
  //     if (response) {
  //     }
  //   } catch (error) {
  //     console.error("Error in updating entity", error);
  //   }
  // };

  // createNewEntity(genreData, link);

  return (
    <>
      <div className="pagewrap">
        <Topbar title={linkText} />
        {!flagCreate ? (
          <>
            <Button text="Create" setFlagCreate={setFlagCreate} />
            <Search />
            <Table data={data} />
          </> 
        ) : 
          <GenreCreate />
        }
      </div>
    </>
  );
};

export default genres;
