const express = require("express");
const router = express.Router();

const authorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");




router.get("/test-me", function (req, res) {
    res.send("My first ever api!");
});


router.post("/authors", authorController.createAuthor);
router.post("/blogs", blogController.createBlog);
router.get("/blogs", blogController.getblog);

router.put("/blogs/:blogId",blogController.updatedBlog)

router.delete("/blog",blogController.deleteBlog2)
router.delete("/blog/:blogId",blogController.deleteBlog)


module.exports = router;
