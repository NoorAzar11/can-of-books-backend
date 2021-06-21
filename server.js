'use strict'

require('dotenv').config();

const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//create schema 

const userSchema = new mongoose.Schema({
    
    email: String, 
    books:[BookSchema]

  });

  // create schema
  const BookSchema=new mongoose.Schema({
    name: String ,
    description:String,
    img:String,
    status: String 

  });

//create model 
  const userModel = mongoose.model('user', userSchema);

  //create model 
 const bookModel = mongoose.model('books', BookSchema);

 //data seeding (storedat)
 function seedingUsercollection()
{
    const userInfo = new userModel({
        email:'noorazar@yahoo.com',
        books:[
            {
            name : 'Where the Crawdads Sing' ,
    description : 'Where the Crawdads Sing is a 2018 novel by American author Delia Owens.' ,
    img : 'https://target.scene7.com/is/image/Target/GUEST_7dfb67b7-408d-4855-8654-89ea6d3ef271?wid=488&hei=488&fmt=pjpeg',
    status: 'I never red it'
            }
        ]
    
})
userInfo.save();
}

  
seedingUsercollection();

//data seeding (storedat)
function seedingBookcollection(){

const bookInfo=new bookModel({
    name : 'Where the Crawdads Sing' ,
    description : 'Where the Crawdads Sing is a 2018 novel by American author Delia Owens.' ,
    img : 'https://target.scene7.com/is/image/Target/GUEST_7dfb67b7-408d-4855-8654-89ea6d3ef271?wid=488&hei=488&fmt=pjpeg',
    status: 'I never red it'

})
const bookInfo2=new bookModel({
    name :'The Alchemist (novel)',
    description : 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988',
    img : 'https://m.media-amazon.com/images/I/41ybG235TcL.jpg',
    status: 'I red 20 page of it'
})

const bookInfo3=new bookModel({
    name : 'Lord of the Rings',
    description : 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien.',
    img : 'https://images-na.ssl-images-amazon.com/images/I/A1aW8G2AFSL._SX342_.jpg',
    status: 'Never red it only saw the movie'
})
bookInfo.save();
bookInfo2.save();
bookInfo3.save();

}
seedingBookcollection()


server.get('/',homeHandler);

server.get('/books',booksHandler);
function homeHandler(req,res) {
    res.send('Home Route');
}

server.listen(PORT, () => {
    console.log(`lisning on ${PORT}`);
});