// imports
const Word = require("../models/words");
const wordsSeeds = require("../seeds");

// get
module.exports.getWords = async (req, res) => {
  const words = await Word.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: `${words.length} word(s)`,
    words: words,
  });
};

// post
module.exports.addWords = async (req, res) => {
  if (false) {
    const words = await Word.insertMany(wordsSeeds);
    res.json({
      success: true,
      message: `${words.length} word(s) added`,
    });
  } else {
    const word = new Word(req.body);
    console.log(word);
    await word.save();
    res.json({ success: true, message: "add success!" });
  }
};

// edit
module.exports.editWords = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findByIdAndUpdate(id, req.body);
    await word.save();
    res.json({ success: true, message: "edit success!" });
  } catch {
    res.json({ success: false, message: "nothing found :(" });
  }
};

// remove
module.exports.removeWords = async (req, res) => {
  try {
    if (false) {
      const words = await Word.find();
      await Word.deleteMany();
      res.json({
        success: true,
        message: `${words.length} word(s) removed`,
      });
    } else {
      const { id } = req.params;
      await Word.findByIdAndDelete(id);
      res.json({ success: true, message: "remove success!" });
    }
  } catch {
    res.json({ success: false, message: "nothing found :(" });
  }
};
