const DATA = require("../modals/modal");

//@desc Get transaction
//@route Get /api/v1/transactions
//@acces Public
exports.getTransaction = async (req, res) => {
  try {
    const data = await DATA.find();
    return res.status(200).json({
      ok: true,
      data,
    });
  } catch (err) {
    res.status(404).json({
      ok: false,
      error: "Something went wrong",
    });
  }
};

//@desc POST transaction
//@route POST /api/v1/transactions
//@acces Public
exports.add = async (req, res) => {
  try {
    const { text, amount } = req.body;
    const postData = await DATA.create(req.body);
    return res.status(201).json({
      ok: true,
      data: postData,
    });
  } catch (err) {
    if (err.name === "vaidationError") {
      const message = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        ok: false,
        error: message,
      });
    }
  }
};
//@desc DELETE transaction
//@route DELETE /api/v1/transactions/:id
//@acces Public

exports.deleteTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await DATA.findByIdAndDelete(id);
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false });
  }
};
