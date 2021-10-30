const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  proffyValue = {
    name: "Albert Eintein",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/250px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    whatsapp: "995181848",
    bio: "Bio",
  };
  classValue = {
    subject: "Física",
    cost: "100",
  };
  classScheduleValues = [
    {
      weekday: 0,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
  ];
  //await createProffy(db, { proffyValue, classValue, classScheduleValues });
  const selectedProffys = await db.all("SELECT * FROM proffys");
});
