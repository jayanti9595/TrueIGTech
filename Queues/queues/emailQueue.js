const { Queue } = require("bullmq");

const emailQueue = new Queue("emailQueue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

async function addJobs() {
  await emailQueue.add("sendWelcomeEmail", {
    to: "jrajput@trueigtech.com",
    subject: "Welcome!",
    body: "Hello Jayanti, welcome to BullMQ!",
  });

  await emailQueue.add("sendReminderEmail", {
    to: "jtichouhan@gmail.com",
    subject: "Reminder",
    body: "Don’t forget to complete your task.",
  });

  console.log("Jobs added to emailQueue");
}

module.exports = { emailQueue, addJobs };
