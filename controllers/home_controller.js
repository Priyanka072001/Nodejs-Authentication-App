module.exports.home= async function(req,res){
    if(req.isAuthenticated()){
        return res.render('welcome');
    }
    else{
        return res.render('home')
    }
   
}

