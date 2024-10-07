import { createCategoryService, getAllCategories, getCategoryByIdService, updateCategoryService } from "../services/category.service.js";

import { HTTP_STATUS } from "../common/http-status.common.js";

//create category
export const createCategory = async (req,res) =>{
    const body = req.body;

    const newCategory = await createCategoryService(body);
    if (!newCategory) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message:'Create category failed!',
            success:false,
        });
    };
    return res.status(HTTP_STATUS.OK).json({
        message:'Create category successffully!',
        success: true,
        data: newCategory,
    });
};

//get categories
export const getCategories = async (_,res) => {
    const result = await getAllCategories();

    if (!result) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Get all Categories failed!",
            success: false,
        });
    };

    return res.status(HTTP_STATUS.OK).json({
        message: 'Get all categories successfully!',
        success: true,
        data: result,
    });
};

//get category by id
export const getCategoryById = async (req,res) => {
    const {id} = req.params;

    const result = await getCategoryByIdService(id);
    if (!result) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message:'Get category failed!',
            success: false,
        });
    };

    return res.status(HTTP_STATUS.OK).json({
        message: 'Get category successfully!',
        success: true,
        data: result,
    });
};

//update category
export const updateCategory = async (req,res) => {
    const {id} = req.params;
    const body = req.body;

    const result = await updateCategoryService(id,body);
    if (!result) {
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
            message: 'Update category failed!',
            success: false,
        });
    };

    return res.status(HTTP_STATUS.OK).json({
        message:'Update category successfully!',
        success: true,
        data: result,
    });
};