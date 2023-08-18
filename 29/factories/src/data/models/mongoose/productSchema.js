import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const productCollection = 'products';

const ProductSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  user: { type: Schema.Types.ObjectId, index: true },
});

ProductSchema.plugin(paginate);

export default mongoose.model(productCollection, ProductSchema);
