exports.userSignupValidator =(req,res,next)=>{
    req.check('name','Name is required').notEmpty()
    req.check('email','Email must be between 3 to 32 charecters')
    .matches(/.+\@.+\..+/)// it is for check @ in email id
    .withMessage('Email must contain @')
    .isLength({
        min:4,
        max:32
    });

    req.check('password','password is required').notEmpty()
    req.check('password')
    .isLength({min:6,})
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number")
    const errors =  req.validationErrors()
    if(errors){
        const firstError = errors.map(error=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    next();// if previous things were fail it push the program to next phase

}