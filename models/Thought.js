const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText:
        {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt:
        {
            type: Date,
            default: Date.now,
            //USE GETTER METHOD TO FORMAT TIMESTAMP ON QUERY?????????
        },
        username:
        {
            type: Schema.Types.username, //???? maybe add this.schema?
            ref: 'User',
            required: true,
        },
        reactions: [Reaction]
    }
    ,
    {
        toJSON:
        {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get (function () {
    return this.reactions.length;
});
// MODEL SET
const Thought = model('thought', thoughtSchema);

module.exports = Thought;