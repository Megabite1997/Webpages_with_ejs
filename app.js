const express = require('express');
const _ = require('lodash');
const app = express();

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const posts = [];

app.use(express.static('public')); // for static files such as CSS and image files
app.use(express.urlencoded({extended:true}));// able to bring input fro browser
app.set('view engine', 'ejs'); //In default, 'view engine' will find views directory. We need to create it.


app.get('/', function(req, res){
    res.render('home', {p1: homeStartingContent, hitposts: posts});
});

app.get('/aboutus', function(req, res){
    res.render('aboutUs', {p2: aboutContent });
});

app.get('/contact', function(req, res){
    res.render('contact', {p3: contactContent });
});

app.get('/compose', function(req, res){
    res.render('compose', {title: 'Compose' });
});

app.get('/post/:testing', function(req, res){
    posts.forEach(function(post){
        let jame = _.lowerCase(req.params.testing);
        let pungkung = _.lowerCase(post.title);
        let bob = post.post;
        if(jame === pungkung){
            // console.log('Match');
            res.render('post', {ohyeah : jame, ohyeah2 : bob});
        }
        else{
            console.log('Not Match');
        }
    });
});

app.post('/compose', function(req, res){
    // console.log(req.body.composeInput);
    const compose = {
        title: req.body.titleInput,
        post: req.body.postInput
    };
    posts.push(compose);
    res.redirect('/');
});


app.listen(3000, function(req, res){
    console.log('Sever is runnung on port 3000');
});

