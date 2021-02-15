const { Schema, Types } = require('mongoose');
const moment = require('moment'); 

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format("MMMM DD, YYYY"),
      },
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
    }
  );

  module.exports = ReactionSchema;