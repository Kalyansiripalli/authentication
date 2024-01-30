const {body,validationResult}=require("express-validator");

exports.loginValidators=[
body('email').isEmail(),
body('password').isString().isLength({min:3}).not().isEmpty(),
(req,res,next)=>{
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.send(errors);
    }
    next();
}
]