const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;
const cors = require("cors");

app.db = router.db;
app.use(cors());

const rules = auth.rewriter({
  "/users*": "/664/users$1",
  "/events*": "/664/events$1",
  "/donations*": "/664/donations$1",
  "/subscribeEvents*": "/664/subscribeEvents$1",
  "/subscribeInstitution*": "/664/subscribeInstitution$1",
});

app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
