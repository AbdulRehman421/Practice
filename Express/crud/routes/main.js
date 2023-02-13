const router = require('express').Router();


// Main Paths
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page'
    }); // using render for template engine -> it will look into views folder
})
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page'
    });
})
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact page'
    });
    // render -> 2nd component object

})


// to download files

router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html');
})


module.exports = router