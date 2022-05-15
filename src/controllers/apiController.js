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

let addNewUser = async (req, res) => {
  let { firstname, lastname, email, phone, password, address, gender, id_permission } = req.body;
  await pool.execute("insert into user(firstname, lastname, email, phone, password, address, gender, id_permission) values (?, ?, ?, ?, ?, ?, ?, ?)",
    [firstname, lastname, email, phone, password, address, gender, id_permission]);

  return res.send("Add Success");
  // return res.status(200).json(message);
};



let addNewCate = async (req, res) => {
  let { category } = req.body;

  await pool.execute("insert into category(category) values (?)", [category]);
  return res.send("Add Success");
};
let updateUser = async (req, res) => {
  let { firstname, lastname, email, phone, password, address, gender, id_permission, id } = req.body;

  if (!firstname || !lastname || !email || !phone || !password || !address || !gender || !id_permission || !id) {
    return res.status(200).json({
      message: 'missing required params'
    })
  }

  await pool.execute("update user set firstname= ?, lastname=?, email=?, phone=?, password=?, address=?, gender=?, id_permission=? where id=?",
    [firstname, lastname, email, phone, password, address, gender, id_permission, id]);

  return res.send("Add Success");
};
let deleteUser = async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res.status(200).json({
      message: 'missing required params'
    })
  }
  await pool.execute("delete from user where id =?", [userId]);
  return res.send("Delete Success");
}
module.exports = {
  getAllUsers,
  getDetailPage,
  addNewUser,
  addNewCate,
  updateUser,
  deleteUser
};
