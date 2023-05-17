const mongoModel = require("../Database/mongooseSchema");

module.exports = async (req, res) => {
  
  const { auth, cartItem } = req.body;
  cartItem.map(async (item) => {
    const order = await new mongoModel.Order({
      qty: item.Qty,
      author: auth,
      product: item._id,
    });
    const ggwp = await order.save();
  });
  res.send("ok");
};
