// assign db path and options
const dbPath = "mongodb://localhost/raw-dog-db";
const dbOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

module.exports = {
  dbPath,
  dbOpts
};
