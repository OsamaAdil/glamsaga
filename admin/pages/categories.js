import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/topbar/topBar";
import Button from "../components/button";
import Table from "@/components/table";
import CategoryCreate from "@/components/create/categoryCreate";
import CategoryEdit from "@/components/edit/categoryEdit";

import axios from "axios";
import { baseURL } from "@/config/constant";

import { createCategory } from "@/services/createCategory";
import { editCategory } from "@/services/editCategory";
import { useDispatch, useSelector } from 'react-redux';

const categories = () => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];
  
  const dispatch = useDispatch();
  const genre = useSelector(state => state);

  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState();

  const [flagCreate, setFlagCreate] = useState(false);
  const [flagEdit, setFlagEdit] = useState(false);

  const [tempData, setTempData] = useState({
    genreId: "",
    name: "",
    isDelete: false
  });

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

  const handleSubmit = () => {
    if (setFlagCreate) {
      setFlagCreate(false);
      onCreateNew(tempData);
    }
  };

  const handleEdit = () => {
    if (setFlagEdit) {
      setFlagEdit(false);
      onEdit(tempData);
    }
    if (setFlagCreate) {
      setFlagCreate(false);
    }
  };

  const handleCancel = () => {
    if (setFlagCreate) {
      setFlagCreate(false);
    }
    if (setFlagEdit) {
      setFlagEdit(false);
    }

  };

  const handleEditButtonClick = (id, entity) => {
    setFlagEdit(true);
    setFlagCreate(true);
    setSelectedData(entity);
    setTempData(entity);
    setTempData(prevState => ({
      ...prevState,
      categoryId: entity._id
    }))
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTempData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const optionsDelete = [
    {
      label: "Yes, delete it",
      value: "true",
    },
    {
      label: "Let it be in the list",
      value: "false",
    },
  ];

  const onCreateNew = (tempData) => {
    const createNew = async (tempData) => {
      try {
        console.log("going for addition", tempData);
        const response = await createCategory(tempData);
        if (response) {
        }
      } catch (error) {
        console.error("Error in updating product", error);
      }
    };
  
    createNew(tempData);
  };

  
  const onEdit = (tempData) => {
    const Edit = async (tempData) => {
      try {
        console.log("going for editing", tempData);
        const response = await editCategory(tempData);
        if (response) {
        }
      } catch (error) {
        console.error("Error in updating product", error);
      }
    };
  
    Edit(tempData);
  };


  return (
    <>
      <div className="pagewrap">
        <Topbar title={linkText} />
        {!flagCreate ? (
          <>
            <Button text="Create" setFlagCreate={setFlagCreate} />
            <Table data={data} handleEditButtonClick = {handleEditButtonClick}/>
          </>
        ) : 
        (
          (flagEdit) ? (
            <>
              <CategoryEdit tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew} handleSubmit={handleSubmit} handleCancel={handleCancel} handleEdit={handleEdit} handleChange={handleChange} optionsDelete={optionsDelete}/>
            </> 
           ) : (
            <>
              <CategoryCreate tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew} handleSubmit={handleSubmit} handleCancel={handleCancel} handleChange={handleChange}/>
          </> 
            )
        )
        }
      </div>
    </>
  );
};

export default categories;


