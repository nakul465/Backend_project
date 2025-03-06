const express = require("express");
const fs = require("fs");
const cors = require("cors");

const PORT = 5001;
const PETS_FILE = "./server/pets.json";
const APPLICATIONS_FILE = "./server/adoptionApplications.json";
const CONTACT_US_FILE = "./server/contact_us.json"; // New file for Contact Us submissions

const app = express();
app.use(express.json());
app.use(cors());

// Ensure all necessary JSON files exist
if (!fs.existsSync(PETS_FILE)) {
  fs.writeFileSync(PETS_FILE, "[]");
}
if (!fs.existsSync(APPLICATIONS_FILE)) {
  fs.writeFileSync(APPLICATIONS_FILE, "[]");
}
if (!fs.existsSync(CONTACT_US_FILE)) {
  fs.writeFileSync(CONTACT_US_FILE, "[]");
}

// API to post a new pet
app.post("/api/pets", (req, res) => {
  try {
    const pets = JSON.parse(fs.readFileSync(PETS_FILE));
    pets.push(req.body);
    fs.writeFileSync(PETS_FILE, JSON.stringify(pets, null, 2));
    res.status(201).json({ message: "Pet posted successfully!" });
  } catch (error) {
    console.error("Error writing to pets.json:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API to get all pets
app.get("/api/pets", (req, res) => {
  try {
    const pets = JSON.parse(fs.readFileSync(PETS_FILE));
    res.json(pets);
  } catch (error) {
    console.error("Error reading pets.json:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API to submit a pet adoption application
app.post("/api/adoption", (req, res) => {
  try {
    const applications = JSON.parse(fs.readFileSync(APPLICATIONS_FILE));
    applications.push(req.body);
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
    res.status(201).json({ message: "Adoption application submitted successfully!" });
  } catch (error) {
    console.error("Error writing to adoptionApplications.json:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API to submit Contact Us form
app.post("/api/contact", (req, res) => {
  try {
    const contactSubmissions = JSON.parse(fs.readFileSync(CONTACT_US_FILE));
    contactSubmissions.push(req.body);
    fs.writeFileSync(CONTACT_US_FILE, JSON.stringify(contactSubmissions, null, 2));
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error writing to contact_us.json:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
