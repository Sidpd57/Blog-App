const express = require('express');
const morgan = require('morgan');

const app = express();

// register view engine 
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); if we are storing html files in myviews folder rather than views

app.listen(3000);

// middleware & static files 
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/',(req,res) =>{
    const blogs = [ 
        {title: 'Zen Pencils', snippet: 'Zen Pencils was founded by Galvin Aun Than. When Galvin struggled in his career as a cartoonist, he used to motivate himself using many inspirational quotes and stories. And then he had a wonderful idea which led to the birth of Zen pencils.'},
        {title: 'Wait But Why', snippet: 'Waitbutwhy is a blog by Tim Urban whose TED talk is the 5th most-watched TED talk of all time. If you have watched his TED talk, you know how funny Tim really is — and that shows in his blogposts. Besides that, Tim draws truly adorable 5th grade(ish) stick-figure doodles — as he likes to call them — that go along with his articles.'},
        {title: 'Vox', snippet: 'Vox Media is a company that explains the news and beyond. They feel that there is so much going around the world, yet the people don’t really understand much of it. Mostly because there’s way too much information, but not nearly as much context. They aim to remove the noise from the overwhelming information and bring true insights to people.'},
        {title: 'TEDed', snippet: 'I love everything about TED. In case you didn’t know, TED is about ideas worth sharing. And TEDed is about lessons worth sharing. TEDed is on a mission to change how we learn and educate ourselves in the new world. And with their name-drop-worthy list of advisors like Jackie Bezos, Melinda Gates, late Sir Ken Robinson, Salman Khan, etc., TEDed is doing great things.'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about',(req,res) =>{
    res.render('about', { title: 'About' });
});

app.get('/blogs/create',(req,res) =>{
    res.render('create', { title: 'Create a new Blog' });
});

app.use((req,res) =>{
    res.status(404).render('404', { title: '404' });
});