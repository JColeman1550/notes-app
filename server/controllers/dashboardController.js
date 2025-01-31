/* GET dashboard

trigger and render dashboard page
uses dashboard layout
*/

exports.dashboard = async(req, res) => {
    const locals = {
        title: 'Dashboard', 
        description: 'Free NodeJs Notes App'
    };
    res.render('dashboard/index', {
locals,
layout: '../views/layouts/dashboard'

    });
}