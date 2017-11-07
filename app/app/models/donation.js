<<<<<<< HEAD
const mongoose = require('mongoose');


const donationSchema = mongoose.Schema({
  amount: Number,
  method: String,
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
  },
});

const Donation = mongoose.model('Donation', donationSchema);
=======
const mongoose = require('mongoose');


const donationSchema = mongoose.Schema({
  amount: Number,
  method: String,
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Donation = mongoose.model('Donation', donationSchema);
>>>>>>> d925544c520b1b816a6bbbc5949b1cc39ed58d9e
module.exports = Donation;