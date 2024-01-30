const {body,validationResult}=require("express-validator");

exports.registerValidators=[
    
body("firstname").isString().isLength({min:3}).not().isEmpty(),
body('lastname').isString().isLength({min:3}).not().isEmpty(),
body('email').isEmail(),
body('password').isString().isLength({min:3}).not().isEmpty(),
// js
body('contact').isString().isLength({min:11}).optional(),
(req,res,next)=>{
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.send(errors);
    }
    next();
}
]