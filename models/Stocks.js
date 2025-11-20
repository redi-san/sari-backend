const db = require("../config/db");

const Stock = {
  getAll: (callback) => {
    db.query("SELECT * FROM stocks", callback);
  },

  getBylowstock: (callback) => {
    db.query("SELECT * FROM stocks WHERE stock <= lowstock", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  getByUserId: (user_id, callback) => {
  db.query("SELECT * FROM stocks WHERE user_id = ?", [user_id], callback);
},


  create: (stock, callback) => {
    const { user_id, barcode, name, category, stock: qty, lowstock, buying_price, selling_price, manufacturing_date, expiry_date, image } = stock;
    const query = `
      INSERT INTO stocks 
      (user_id, barcode, name, category, stock, lowstock, buying_price, selling_price,  manufacturing_date, expiry_date, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [user_id, barcode, name, category, qty, lowstock, buying_price, selling_price,  manufacturing_date, expiry_date, image], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result.insertId);
    });
  },

  update: (id, stock, callback) => {
  //const { name, barcode, category, stock: qty, lowstock, buying_price, selling_price, notes, image } = stock;
  const { name, barcode, category, stock: qty, lowstock, buying_price, selling_price, manufacturing_date, expiry_date, image } = stock;


  let query, params;

  if (image) {
    // If a new image is uploaded
    query = `
      UPDATE stocks 
      SET name=?, barcode=?, category=?, stock=?, lowstock=?, buying_price=?, selling_price=?, manufacturing_date=?, expiry_date=?, image=? 
      WHERE id=?
    `;
    params = [name, barcode, category, qty, lowstock, buying_price, selling_price, manufacturing_date, expiry_date, image, id];
  } else {
    // If no image is uploaded, don't overwrite existing one
    query = `
      UPDATE stocks 
      SET name=?, barcode=?, category=?, stock=?, lowstock=?, buying_price=?, selling_price=?, manufacturing_date=?, expiry_date=? 
      WHERE id=?
    `;
    params = [name, barcode, category, qty, lowstock, buying_price, selling_price, manufacturing_date, expiry_date, id];
  }

  db.query(query, params, callback);
},


  delete: (id, callback) => {
    db.query("DELETE FROM stocks WHERE id = ?", [id], callback);
  }
};

module.exports = Stock;

