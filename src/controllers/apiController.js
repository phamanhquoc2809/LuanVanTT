import pool from "../config/connectDB";

let getAllUsers = async (req, res) => {
  //http
  // 404 501
  // json/xml => object
  const [rows, fields] = await pool.execute("SELECT * FROM user");
  console.log("check req", rows);
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let getDetailPage = async (req, res) => {
  let userId = req.params.id;
  let [user] = await pool.execute("select * from user where id = ?", [userId]);
  return res.send(JSON.stringify(user));
};

module.exports = {
  getAllUsers,
  getDetailPage,
};
