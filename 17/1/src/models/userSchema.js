import mongoose, { Schema } from "mongoose";

const userCollection = 'users';

const UserSchema = new Schema({
  first_name: { type: Schema.Types.String, index: true, require: true },
  last_name: { type: Schema.Types.String, require: true },
  email: { type: Schema.Types.String, require: true },
  gender: { type: Schema.Types.String, require: true }
});

export default mongoose.model(userCollection, UserSchema);
