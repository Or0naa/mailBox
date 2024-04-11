async function auth (req,res,next){
    try{
req.body.user = {_id : "6616a9d06a38323ef4582dbe"}
next()
    }
    catch{
        res.sendStatus(401)
    }
}
module.exports={auth}