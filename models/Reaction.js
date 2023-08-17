const { ObjectId } = require('bson'); // ??? auto import?
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId:
        {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), // default: ?????
        },
        reactionBody:
        {
            type: String,
            required: true,
            maxLength: 280
        },
        username:
        {
            type: Schema.Types.username, //???? maybe add this.schema?
            ref: 'User',
            required: true,
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            //USE GETTER METHOD TO FORMAT TIMESTAMP ON QUERY?????????
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