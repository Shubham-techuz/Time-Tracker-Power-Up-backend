const CompleteTime = require('../models/completeTime');

// Storing the Timestamp
exports.storeTimeDetail =  (req, res, next) => {
    let completeTime = new CompleteTime(req.body)
    completeTime.save().then(() => {
        res.status(201).json({
            message: 'Time Detail saved successfully!'
        });
    }).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
}

// Getting the complete Timestamp 
exports.getOneTime = (req, res, next) => {
    CompleteTime.findOne({
        cardId: req.params.id
    }).then(
        (time) => {
            res.status(200).json(time);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

// Made changes to TimeStamp
exports.modifyTime = (req, res, next) => {
    CompleteTime.updateOne({cardId: req.params.id}, {$set: req.body}).then(
        () => {
            res.status(201).json({
              message: 'Time updated successfully!'
            });
        }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
};

