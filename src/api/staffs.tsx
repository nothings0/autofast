import instance from "./instance";
import {IStaff} from "../interface/staff";

const getAllStaff = () => 
{
    return instance.get('/staff');
}

const addStaff = (staff: IStaff) => {
    return instance.post('/staff', staff);
}
const updateStaff = (staff: IStaff) => {
    return instance.patch('/staff/' + staff.id, staff);
}
const deleteStaff = (id:number) => {
    return instance.delete('/staff/' + id);
    
}


const getAllStaffCategory = () => 
{
    return instance.get('/categories');
}

const getOneStaffCategory = (id: number) => 
{
    return instance.get('/staffcategory/' + id);
}
const addStaffCategory = (staffcategory: IStaff) => {
    return instance.post('/staffcategory', staffcategory);
}
const updateStaffCategory = (staffcategory: IStaff) => {
    return instance.patch('/staffcategory/' + staffcategory.id, staffcategory);
}
const deleteStaffCategory = (id: number) => {
    return instance.delete('/staffcategory/' + id);
    
}


export { getAllStaff,  addStaff, updateStaff,  deleteStaff, getAllStaffCategory,getOneStaffCategory, addStaffCategory, updateStaffCategory, deleteStaffCategory }