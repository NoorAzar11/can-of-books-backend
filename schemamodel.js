'use strict'

const axios=require('axios');
require('dotenv').config();
const PORT = process.env.PORT;

module.exports= seedingBookcollection;
module.exports= seedingUsercollection;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});

  // create schema
  const BookSchema=new mongoose.Schema({
    name: String ,
    description:String,
    img:String,
    status: String 

  });

  //create schema 

const userSchema = new mongoose.Schema({
    
    email: String, 
    books:[BookSchema]

  });


//create model 
  const userModel = mongoose.model('user', userSchema);

  //create model 
 const bookModel = mongoose.model('book', BookSchema);

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
seedingBookcollection();


function booksHandler (req,res){
    let userEmailreq=req.query.email;
    userModel.find({email: userEmailreq},function(err,userData){
if(err) {
    console.log('wrong inputs');
}
else
{
    res.send(userData[0].books);
}
})
}