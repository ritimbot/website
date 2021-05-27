export default function(ctx){
    if(ctx.route.fullPath.startsWith("/dbl")){
        ctx.redirect(301, "https://top.gg/bot/711411719922253884")
    }
}