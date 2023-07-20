const express = require("express");
const userRouter = require("./route/user.route");

const app = express();
const PORT = 5000;
// const PORT = 3307;

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
