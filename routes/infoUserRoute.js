module.exports = (app) => {
    var categpryController = require('../controllers/categoryController'),
        config = require('../config/config').CONFIG_API,
        userModel = mongoose.model('userModel'),
        func = require('../controllers/function').function

    // Route get, post, put...
    app.post('/profile', function (req, res) {
        if (!func.isEmpty(req.body)) {
            var fileInputAvatar = req.files.fileInputAvatar,
                namefile
            if (req.files.fileInputAvatar) {
                namefile = new Date().getTime() + fileInputAvatar.name
                fileInputAvatar.mv(__dirname + "/../public/images/" + namefile, function (err) {
                    if (err && have) {
                        return res.status(500).send(err);
                    } else {
                        userModel.findByIdAndUpdate({
                            _id: req.body._id
                        }, {
                                userName: req.body.username,
                                email: req.body.emailvalue,
                                phone: req.body.phone,
                                photo: '/images/' + namefile,
                                timeModified: Date.now()
                            }, {
                                upsert: true,
                                new: true
                            }).exec((err, new_user) => {
                                res.redirect('/profile')
                            })
                    }
                })
            } else {
                userModel.findByIdAndUpdate({
                    _id: req.body._id
                }, {
                        userName: req.body.username,
                        email: req.body.email,
                        phone: req.body.phone,
                        timeModified: Date.now()
                    }, {
                        upsert: true,
                        new: true
                    }).exec((err, new_user) => {
                        res.redirect('/profile')
                    })
            }
        } else {
            res.status(403).json({ code: 403, message: 'The request is understood, but it has been refused or access is not allowed' })
        }
    })
}