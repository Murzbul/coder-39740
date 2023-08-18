import mongoose from "mongoose";

class MongooseAdapter
{
    async init(uri)
    {
        this.connection = await mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
    }

    async close()
    {
      await this.connection.disconnect();
    }
}

export default MongooseAdapter;
