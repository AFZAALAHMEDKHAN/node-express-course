const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user){
        req.user = {name: user, id:Math.floor(Math.random()*100)}
        next()
    }else{
        res.status(401).send("Unauthorized")
    }
    
}
module.exports = authorize
