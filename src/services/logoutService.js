
const logoutService = {};

logoutService.logout = (req, res) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/');
      })
};


export default logoutService;