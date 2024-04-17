import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/topbar/topBar";
import Button from "../components/button";
import Table from "@/components/table";
import ProductVariantCreate from "@/components/create/productVariantCreate";
import ProductVariantEdit from "@/components/edit/productVariantEdit";

import axios from "axios";
import { baseURL } from "@/config/constant";

import { createProductVariant } from "@/services/createProductVariant";
import { editProductVariant } from "@/services/editProductVariant";
import { fetchProductsDetails } from "@/services/product";

import { useDispatch, useSelector } from 'react-redux';

const productVariants = () => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];
  
  const dispatch = useDispatch();
  const genre = useSelector(state => state);

  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState();

  const [flagCreate, setFlagCreate] = useState(false);
  const [flagEdit, setFlagEdit] = useState(false);

  const [tempData, setTempData] = useState({
    productId: "",
    size: "",
    colour: "",
    length: "",
    width: "",
    height: "",
    isDelete: false,
  });

  const [selectedProductId, setSelectedProductId] = useState("");
  const [optionsProduct, setOptionsProduct] = useState();
  
  // const handleChangeProduct = (event) => {
  //   const selectedProdId = event.target.value;
  //   setSelectedProductId(selectedProdId);
  //   setTempData()
  // };


  const [tokenValue, setTokenValue] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setTokenValue(token);
  });

  useEffect(() => {
    if (!tokenValue) {
      router.push("/");
    }
    else{
      router.push(`/${linkText}`);
    }
  }, [tokenValue]);

  useEffect(() => {
    if (tokenValue) {
      fetchPageData();  
    }
  }, [tokenValue]);

  useEffect(() => {
    if (tokenValue) {
      fetchProductDetails();  
    }
  }, [tokenValue]);


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
  
  const fetchProductDetails = async () => {
    try {
      const response = await fetchProductsDetails();
      console.log("response after fetching", response);
      if (response?.data) {
        // setProductData(response?.data);
        const optionsProductArray = response?.data
          // ?.filter((product) => product.isDelete === false)
          ?.map((e, i) => ({
            label: e.title,
            value: e._id,
            _id: e._id,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setOptionsProduct(optionsProductArray);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
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
      productVariantId: entity._id
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
        const response = await createProductVariant(tempData);
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
        const response = await editProductVariant(tempData);
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
              <ProductVariantEdit tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew} selectedProductId= {selectedProductId} optionsProduct = {optionsProduct}  handleSubmit={handleSubmit} handleCancel={handleCancel} handleEdit={handleEdit} handleChange={handleChange} optionsDelete={optionsDelete}/>
            </> 
           ) : (
            <>
              <ProductVariantCreate tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew}  selectedProductId= {selectedProductId} optionsProduct = {optionsProduct}  handleSubmit = {handleSubmit}  handleCancel= {handleCancel} handleChange= {handleChange}/>
          </> 
        )
        )}
      </div>
    </>
  );
};

export default productVariants;
