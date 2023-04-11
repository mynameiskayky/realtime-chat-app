const express = require("express")
const cors = require("cors")
const { default: axios } = require("axios")

const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
  const { username } = req.body

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "5970f87e-00bd-45e7-b3fc-743e3c37f2cd" } }
    )
    return res.status(r.status).json(r.data)
  } catch (error) {
    return res.status(e.response.status).json(e.response.data)
  }

})

app.listen(3001)