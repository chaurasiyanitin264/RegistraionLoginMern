const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const UserRegistration = async (req, res) => {
    try {
        const { name, city, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const Data = await UserModel.create({
            name: name,
            city: city,
            email: email,
            password: passwordHash,
        });

        return res.status(201).send("User registered successfully!");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error during registration.");
    }
};

const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await UserModel.findOne({ email: email });
        // console.log(User)
        if (!User) {
            return res.status(400).send({ msg: "Invalid Email" });
        }

        const chkpass = await bcrypt.compare(password, User.password);
        if (chkpass) {
            return res.status(200).send({ msg: "Valid password" });
        } else {
            return res.status(400).send({ msg: "Invalid password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error during login.");
    }
};

module.exports = {
    UserRegistration,
    UserLogin,
};
