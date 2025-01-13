// get homepage

exports.home = async(req, res) => {
    const locals = {
        title: 'NodeJs Notes', 
        description: 'Free NodeJs Notes App'
    };
    res.render('index', locals);
}