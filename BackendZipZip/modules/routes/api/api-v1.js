const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuthAdminUser = require('./middleware/apiAuthAdmin');
const apiAuth = require('./middleware/apiAuth');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');
const { uploadFiles } = require('./middleware/UploadMiddleware');

//user Controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const AuthController = require(`${ControllerApi}/v1/user/AuthController`);
const UploadController = require(`${ControllerApi}/v1/user/UploadController`);

//admin controller
const AdminAuthController = require(`${ControllerApi}/v1/admin/AuthController`);
const AdminUploadController = require(`${ControllerApi}/v1/admin/UploadController`);

//router.get('/' , HomeController.index);
//router.get('/version', HomeController.version);
//admin router*********************************************
//upload image
adminRouter.post('/image', uploadImage.single('image'), AdminUploadController.uploadImage.bind(AdminUploadController));
adminRouter.post('/login', AdminAuthController.login.bind(AdminAuthController));
// adminRouter.post('/register', AdminAuthController.register.bind(AdminAuthController));
adminRouter.put('/updateAdmin/:id', AdminAuthController.updateAdmin.bind(AdminAuthController));

//user router***********************************************
//upload image
router.post('/image', uploadImage.single('image'), UploadController.uploadImage.bind(UploadController));
// auth user
router.post('/auth', AuthController.authUser.bind(AuthController));
router.get('/makeCode', AuthController.makeCode.bind(AuthController));
router.put('/updateMobileOrEmail/:id', AuthController.updateMobileOrEmail.bind(AuthController));
router.put('/changeProfile/:id', AuthController.changeProfile.bind(AuthController));

//setting routes***********************************
// router.use('/user', [customerRouter, apiAuthcustomer])
// router.use('/admin', [adminRouter , apiAuthAdminUser]);

router.use('/admin', adminRouter);
router.use('/', router);
router.use(function(req, res, next) {
    res.Header("Access-Control-Allow-Origin", 'http://194.5.175.25:3003/,http://localhost:4200/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
module.exports = router;
