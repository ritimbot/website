export default(req,res,next) => {
    if(req.path.startsWith("/dbl")){
        res.redirect(301, "https://top.gg/bot/711411719922253884")
        return
    }

    next()
}