import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/topbar/topBar";
import Button from "../components/button";
import Table from "@/components/table";
import ProductCreate from "@/components/create/productCreate";
import ProductEdit from "@/components/edit/productEdit";

import axios from "axios";
import { baseURL } from "@/config/constant";

import { createProduct } from "@/services/createProduct";
import { editProduct } from "@/services/editProduct";
import { fetchGenresDetails } from "@/services/genre";
import { fetchCategoriesDetails } from "@/services/categories";

import { useDispatch, useSelector } from 'react-redux';

const products = () => {
  const router = useRouter();
  const linkText = router.pathname.split("/")[1];
  
  // const dispatch = useDispatch();
  // const genre = useSelector(state => state);

  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState();

  const [flagCreate, setFlagCreate] = useState(false);
  const [flagEdit, setFlagEdit] = useState(false);

  const [tempData, setTempData] = useState({
    genreId: "",
    categoryId: "",
    title: "",
    price: "",
    discountPercent: "",
    material: "",
    pattern: "",
    type: "",
    occasion: "",
    flag: "",
    shortDescription: "",
    longDescription: "",
    defaultImage: "",
    images: [""],
    video: "",
    rating: "",
    noOfRatings: "",
    isDelete: false, 
  });

  const [selectedProductId, setSelectedProductId] = useState("");
  const [optionsProduct, setOptionsProduct] = useState();


  const [selectedGenreId, setSelectedGenreId] = useState("");
  const [optionsGenre, setOptionsGenre] = useState();

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [optionsCategory, setOptionsCategory] = useState();

 
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
      productId: entity._id
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

  const optionsFlag = [
    {
      label: "New Arrivals",
      value: "new arrivals",
    },
    {
      label: "Classic Collection",
      value: "classic collection",
    },
    {
      label: "Best Sellers",
      value: "best sellers",
    },
    {
      label: "None",
      value: "none",
    },
  ];

  const onCreateNew = (tempData) => {
    const createNew = async (tempData) => {
      try {
        console.log("going for addition", tempData);
        const response = await createProduct(tempData);
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
        const response = await editProduct(tempData);
        if (response) {
        }
      } catch (error) {
        console.error("Error in updating product", error);
      }
    };
  
    Edit(tempData);
  };


  useEffect(() => {
    if (tokenValue) {
      fetchGenreDetails();  
      fetchCategoryDetails();  
    }
  }, [tokenValue]);



  const fetchGenreDetails = async () => {
    try {
      const response = await fetchGenresDetails();
      console.log("response after fetching", response);
      if (response?.data) {
        // setProductData(response?.data);
        const optionsProductArray = response?.data
          // ?.filter((product) => product.isDelete === false)
          ?.map((e, i) => ({
            label: e.name,
            value: e._id,
            _id: e._id,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setOptionsGenre(optionsProductArray);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const fetchCategoryDetails = async () => {
    try {
      const response = await fetchCategoriesDetails();
      console.log("response after fetching", response);
      if (response?.data) {
        // setProductData(response?.data);
        const optionsProductArray = response?.data
          // ?.filter((product) => product.isDelete === false)
          ?.map((e, i) => ({
            label: e.name,
            value: e._id,
            _id: e._id,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

          setOptionsCategory(optionsProductArray);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const handleImageUpdate = (event) => {
    const { name, value } = event.target;
    const numberKey = parseInt(name);

    setTempData((prevState) => ({
      ...prevState,
      images: prevState.images.map((img, imgIndex) => (imgIndex === numberKey ? value : img))
    }));
  };

  const handleAddImage = (event) => {
    setTempData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ""]
    }));
  };

  const handleRemoveImage = (event) => {
    setTempData((prevState) => ({
      ...prevState,
      images: prevState.images.slice(0, -1)
    }));
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
              <ProductEdit tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew} 
          selectedGenreId= {selectedGenreId} optionsGenre = {optionsGenre} selectedCategoryId= {selectedCategoryId} optionsCategory = {optionsCategory} handleSubmit = {handleSubmit} handleEdit={handleEdit} handleCancel= {handleCancel} handleChange= {handleChange} handleAddImage={handleAddImage} handleRemoveImage = {handleRemoveImage} handleImageUpdate= {handleImageUpdate} optionsDelete={optionsDelete} optionsFlag={optionsFlag}/>
            </> 
           ) : (
            <>
          <ProductCreate tempData = {tempData} setTempData={setTempData} flagCreate = {flagCreate} setFlagCreate={setFlagCreate} onCreateNew={onCreateNew} 
          selectedGenreId= {selectedGenreId} optionsGenre = {optionsGenre} selectedCategoryId= {selectedCategoryId} optionsCategory = {optionsCategory} handleSubmit = {handleSubmit}  handleCancel= {handleCancel} handleChange= {handleChange} handleAddImage={handleAddImage} handleRemoveImage = {handleRemoveImage} handleImageUpdate= {handleImageUpdate} optionsDelete={optionsDelete} optionsFlag={optionsFlag}/>
          </> 
            )
        )
        }

      </div>
    </>
  );
};

export default products;
