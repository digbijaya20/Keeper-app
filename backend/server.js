const  express = require('express');
const app= express();
const  bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
const keepRoutes = express.Router();

const PORT = 4000;

let Keep = require('./keep.model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/keep',{useNewUrlParser:true});
const connection =mongoose.connection;
connection.once('open',function(){
    console.log("MongoDB connect successful");
})

keepRoutes.route('/').get(function(req, res){
    Keep.find(function(err, keep){
        if(err){
            console.log(err);
        }else{
            res.json(keep);
        }
    });
});

keepRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Keep.findById(id, function(err, keep){
        res.json(keep);
    });
});

keepRoutes.route('/add').post(function(req, res){
    let keep = new Keep(req.body);
    keep.save()
    .then(keep => {
        res.status(200).json({'keepe': 'Keep added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new keep failed');
    });
});
keepRoutes.route('/update/:id').post(function(req,res){
    Keep.findById(req.params.id, function(err, keep){
        if(!keep)
         res.status(404).send('data is not found');
        else
          keep.keepDescription =req.body.keepDescription;
          keep.keepResponsible = req.body.keepResponsible;
          keep.keepPriority = req.body.keepPriority;
          keep.keepCompleted = req.body.keepCompleted;

          keep.save().then(keep =>{
              res.json('Keep update');
          })
          .catch(err =>{
              res.status(400).send("Update not possible");
          });
          
    });
});

app.use('/keep',keepRoutes);

app.listen(PORT, function(){
    console.log("Server is running on Port:"+ PORT);
});