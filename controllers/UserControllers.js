import User from "../models/UserModel.js";

export const getUsers = async(req,res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserById = async(req,res) => {
    try {
        await User.findOne({
            where: {
                id: req.params.id
            }
        }).then((user) => {
            if(!user){
                res.status(404).json("User not found");
            }
            res.status(200).json(user);
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserByName = async(req,res) => {
    try {
        await User.findAll({
            where: {
                name: req.query.name
            }
        }).then((user) => {
            if(user.length === 0){
                res.status(404).json("User not found");
            }
            res.status(200).json(user);
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = async(req,res) => {
    try {
        await User.create(req.body);
        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = async(req,res) => {
    try {
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        const updated = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({message: 'User updated successfully', info: updated});
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteUserById = async(req,res) => {
    try {
        await User.findOne({
            where: {
                id: req.params.id
            }}).then((user) => {
                if(!user){
                    res.status(404).json({message: 'User not found'});
                }
                User.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.status(200).json({message: 'User deleted successfully'});
            });
    } catch (error) {
        console.log(error.message);
    }
}; 

export const deleteUser = async(req,res) => {
    try {
        await User.destroy({
            truncate: true
        });
        res.status(200).json({message: 'All user deleted successfully'});
    } catch (error) {
        console.log(error.message);
    }
}; 