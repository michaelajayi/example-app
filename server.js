const express = require('express');

const app = express.app();

app.run();

const PORT = process.env.PORT || 5000;
console.log(`Server running on PORT ${PORT}`);