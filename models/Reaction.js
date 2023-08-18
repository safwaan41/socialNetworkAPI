const { Schema, Types } = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema(
    {
        _id:
        {
            type: String,
            default: () => new Types.ObjectId(), // default: ?????
            alias: 'reactionId'
        },
        reactionBody:
        {
            type: String,
            required: true,
            maxLength: 280
        },
        username:
        {
            type: String,
            required: true,
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            // get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
            //USE GETTER METHOD TO FORMAT TIMESTAMP ON QUERY????????? ^^^^
        },
    }
    ,
    {
        toJSON: 
        {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;