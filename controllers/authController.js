const registerController = async(req, res) => {
    res.status(200).json({
        data: "data",
        message: "registration success"
    });
}
const loginController = async(req, res) => {
    res.status(200).json({
        data: "data",
        message: "login success"
    });
}


module.exports = {
    registerController,
    loginController
}