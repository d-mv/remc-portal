const express = require("express");
const router = express.Router();

/* GET home page. */

router.post("/", function(req, res, next) {
  console.log(req.body);
  const area = req.body.query.action[0];
  const action = req.body.query.action[1];
  const id = req.body.query.id;
  const fields = req.body.query.fields;
  let query = "";

  if (area === "source") {
    switch (action) {
      case "create":
        if (fields) {
          // call for create source method
        }
        break;
      case "update":
        if (id && fields) {
          // call for update method
        }
        break;
      case "delete":
        if (id) {
        }
        break;
      case "list":
        // return list

        break;
      default:
        res.send(null);
        break;
    }
  } else if (area === "post") {
    switch (action) {
      case "read":
        if (id) {
          // call for read post method
        }
        break;
      case "refresh":
        break;
      case "update":
        if (id && fields) {
        }
        break;
      case "delete":
        if (id) {
          // call for delete method
        }
        break;
      case "list":
        // return list
        break;
      default:
        res.send(null);
        break;
    }
  }
});

router.get("/list", (req, res, next) => {
  const query = "";
});
router.get("/sources", (req, res, next) => {
  const query = "";
});

router.get("/post/*", (req, res, next) => {
  console.log(req.path.substr(6, req.path.length));
  const id = req.path.substr(6, req.path.length);
  const query = {
    _id: id
  };
});

router.get("*", function(req, res, next) {});

module.exports = router;
