const controller = {
    login: (req,res) => {
        res.render('./users/login1')
    },
    register: (req,res) => {
        res.render('./users/register')
    }
}



module.exports = controller;