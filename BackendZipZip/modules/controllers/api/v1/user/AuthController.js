const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);
const randomstring  = require('randomstring');

module.exports = new class AuthController extends Controller {

    changeProfile(req, res){
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.User.findByIdAndUpdate(req.params.id, {
            image: req.body.image,
        }, (err, User) => {
            if (err) throw err;
            if (User) {
                return res.json({
                    data: 'اطلاعات کاربر با موفقیت بروز رسانی شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین کاربری وجود ندارد',
                success: false
            });

        });
    }

    updateMobileOrEmail(req, res) {
        if (req.body.mobile) {
            req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
            if (this.showValidationErrors(req, res))
                return;
            this.model.User.findByIdAndUpdate(req.params.id, {
                mobile: req.body.mobile,
            }, (err, User) => {
                if (err) throw err;
                if (User) {
                    return res.json({
                        data: 'اطلاعات کاربر با موفقیت بروز رسانی شد',
                        success: true
                    });
                }
                res.status(404).json({
                    data: 'چنین کاربری وجود ندارد',
                    success: false
                });

            });
        }
        if (req.body.email) {
            req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
            if (this.showValidationErrors(req, res))
                return;
            this.model.User.findByIdAndUpdate(req.params.id, {
                email: req.body.email,
            }, (err, User) => {
                if (err) throw err;
                if (User) {
                    return res.json({
                        data: 'اطلاعات کاربر با موفقیت بروز رسانی شد',
                        success: true
                    });
                }
                res.status(404).json({
                    data: 'چنین کاربری وجود ندارد',
                    success: false
                });

            });
        }
    }

    authUser(req, res) {
        let query,field='';
        if (req.body.mobile) {
            req.checkBody('mobile' , ' فیلد موبایل نمی تواند خالی بماند').notEmpty();
            query = { mobile:req.body.mobile };
            if (this.showValidationErrors(req, res))
                return;
            this.model.User.findOne( query, (err, User) => {
                if (err) throw err;
                if (User) {
                    return res.json({
                        data: new UserTransform().transform(User, true),
                        success: true
                    });
                }
                else {
                    let newUser = new this.model.User({
                        mobile:req.body.mobile
                    })
                    newUser.save(err => {
                        if (err) {
                            throw err;
                        }
                        res.json({
                            data: new UserTransform().transform(newUser, true),
                            success:true
                        });
                    })
                }
            })
        }
        if (req.body.email) {
            req.checkBody('email' , ' فیلد ایمیل نمی تواند خالی بماند').notEmpty();
            query = { email:req.body.email};
            if (this.showValidationErrors(req, res))
                return;
            this.model.User.findOne( query, (err, User) => {
                if (err) throw err;
                if (User) {
                    return res.json({
                        data: new UserTransform().transform(User, true),
                        success: true
                    });
                }
                else {
                    let newUser = new this.model.User({
                        email:req.body.email
                    })
                    newUser.save(err => {
                        if (err) {
                            throw err;
                        }
                        res.json({
                            data: new UserTransform().transform(newUser, true),
                            success:true
                        });
                    })
                }
            })
        }

    }

makeCode(req,res){
	 let code=randomstring.generate({charset:'123456789',length:5});
        return res.json({
            success: true,
            data: code
        })
    }

}
