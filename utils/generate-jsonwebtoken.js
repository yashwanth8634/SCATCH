import jwt from 'jsonwebtoken'

function generate_jsonwebtoken(user){
    return jwt.sign({email:user.email , id:user._id},process.env.JWT_SECRET)
}


export default generate_jsonwebtoken;