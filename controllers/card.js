const CardDetail = require('../models/cardDetail');


// Storing Card Detail
exports.storeCardDetail =  (req, res, next) => {
    const card = new CardDetail(req.body);
    card.save().then(() => {
        res.status(201).json({
            message: 'Card Detail saved successfully!'
        });
    }).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
}
