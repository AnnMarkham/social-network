const { Schema, model } = require("mongoose");

// do i need to format date?

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //ADD EMAIL VALIDATION -- SEE MONGOOSE MATCHING VALIDATION
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// get total count of friends on retrieval
UserSchema.virtual("friendCount").get(function() {
    return this.friends.length
})

const User = model("User", UserSchema);

module.exports = User;