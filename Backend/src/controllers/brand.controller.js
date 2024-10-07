import { createBrandService, getAllBrands, getBrandByIdService, updateBrandService } from '../services/brand.service.js';

import { HTTP_STATUS } from '../common/http-status.common.js';

//create brand
export const createBrand = async (req, res) => {
	const body = req.body;

	const newBrand = await createBrandService(body);
	if (!newBrand) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Create brand failed!',
			success: false,
		});
	}
	return res.status(HTTP_STATUS.OK).json({
		message: 'Create brand successfully!',
		success: true,
		brand: newBrand,
	});
};

//get brands
export const getbrands = async(_,res) => {
    const result = await getAllBrands();

    if (!result) {
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
            message:'Get brands failed!',
            success: false,
        });
    };

    return res.status(HTTP_STATUS.OK).json({
        message:'Get brands successfully!',
        success: true,
        data: result,
    });
};

//get brand by id
export const getBrandById = async (req, res) => {
    const {brandId} = req.params;
    const result = await getBrandByIdService(brandId);
    
    if(!result) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message:' Get brand failed!',
            success: false,
        });
    };

    return res.status(HTTP_STATUS.OK).json({
        message:'Get brand successfully!',
        success: true,
        data: result,
    });
};

//update brand 
export const updateBrand = async (req,res) => {
    const {brandId} = req.params;
    const body = req.body;

    const result = await updateBrandService(brandId, body);
    if(!result) {
        return res.status(HTTP_STATUS.UNAUTHORIZED).json({
            message:'Update brand failed!',
            success: false,
        });
    };
    return res.status(HTTP_STATUS.OK).json({
        message:'Update brand successfully!',
        success:true,
        data: result,
    });
}
