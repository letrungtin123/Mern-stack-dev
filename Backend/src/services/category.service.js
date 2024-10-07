import Category from "../models/category.model.js"

//create category
export const createCategoryService = async (body) => {
    const newCategory = Category.create(body);

    return newCategory;
};

//get all categories
export const getAllCategories = async () => {
    const categories = await Category.find();

    return categories;
};

//get category by id
export const getCategoryByIdService = async(id) => {
    const category = await Category.findById({_id: id});

    return category;
};

//update category
export const updateCategoryService = async (id,body) => {
    const category = await Category.findByIdAndUpdate({_id: id}, body, {new: true});

    return category
};

