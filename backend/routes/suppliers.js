const router = require("express").Router();
const PDFDocument = require("pdfkit-table");
const supplier = require("../models/supplier");

//create
router.route("/add").post((req, res) => {
  /*const eventID = req.body.eventID;
  const eventName = req.body.eventName;
  const location = req.body.location;
  const startingTime = req.body.startingTime;
  const date = req.body.date;
  const timeDuration = Number(req.body.timeDuration); */

  const shop_name = req.body.shop_name;
  const city = req.body.city;
  const district = req.body.district;
  const shop_address = req.body.shop_address;
  const price_per_1l = req.body.price_per_1l;
  const telephone = Number(req.body.telephone);
  const directions = req.body.directions;
  const description = req.body.description;

  const newSupplier = new supplier({
    shop_name,
    city,
    district,
    shop_address,
    price_per_1l,
    telephone,
    directions,
    description,
  });

  newSupplier
    .save()
    .then(() => {
      res.json("Supplier Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  supplier
    .find()
    .then((suppliers) => {
      res.json(suppliers);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get details about one
router.get("/:id", async (req, res) => {
  try {
    let shop_name = req.params.id;
    let e = await supplier.findById(shop_name);
    if (!e) {
      const error = new Error("shop not found");
      error.status = 404;
      throw error;
    }
    res.json(e);
  } catch (err) {
    console.log(err.message);
    return res
      .status(500)
      .send({ status: "Error in finding shop", error: err.message });
  }
});

//search function
router.route("/search/:id").get(async (req, res) => {
  const query = req.params.q;
  supplier.findOne({ shop_name: { shop_name: query } }, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error searching for result");
    } else {
      res.json(results);
    }
  });
});

router.route("/update/:id").put(async (req, res) => {
  let supplierId = req.params.id;
  const {
    shop_name,
    city,
    district,
    shop_address,
    price_per_1l,
    telephone,
    directions,
    description,
  } = req.body;

  const updateSupplier = {
    shop_name,
    city,
    district,
    shop_address,
    price_per_1l,
    telephone,
    directions,
    description,
  };

  const update = await supplier
    .findByIdAndUpdate(supplierId, updateSupplier)
    .then(() => {
      res.status(200).send({ status: "Supplier updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//delete

router.route("/delete/:id").delete(async (req, res) => {
  let supplierId = req.params.id;
  await supplier
    .findByIdAndDelete(supplierId)
    .then(() => {
      res.status(200).send({ status: "Supplier deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete Supplier", error: err.message });
    });
});

router.get("/reporting", async (_req, res, next) => {
  try {
    const events = await supplier.find({}).sort({ CreatedAt: -1 });
    // start pdf document
    let doc = new PDFDocument({ margim: 30, size: "A4" });
    // Simple Table with Array
    if (!events.length) {
      const error = new Error("No shop!!");
      error.status = 404;
      throw error;
    }
    const headers = [
      "shop_name",
      "city",
      "district",
      "shop_address",
      "price_per_1l",
      "telephone",
      "directions",
      "description",
    ];
    const rows = [];
    events.map((i) => {
      rows.push([
        i.shop_name,
        i.city,
        i.district,
        i.shop_address,
        i.price_per_1l,
        i.telephone,
        i.directions,
        i.description,
      ]);
    });
    const tableArray = {
      headers: headers,
      rows: rows,
    };
    doc.table(tableArray, {
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
      prepareRow: (_row, indexColumn, indexRow, rectRow) => {
        doc.font("Helvetica").fontSize(8);
        indexColumn === 0 &&
          doc.addBackground(rectRow, indexRow % 2 ? "blue" : "green", 0.15);
      },
    });
    // create a buffer from the PDF document
    let chunks = [];
    doc.on("data", (chunk) => {
      chunks.push(chunk);
    });
    doc.on("end", () => {
      const pdfBlob = Buffer.concat(chunks);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="myfile.pdf"');
      res.send(pdfBlob);
    });
    //done
    doc.end();
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = router;
