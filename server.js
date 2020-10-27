const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect db
connectDB();

// Init middleware
app.use(express.json({ extended : false }))

app.get('/home', (req, res) => res.json({ msg : "Welcome to the Contact Keeping API"}));

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))