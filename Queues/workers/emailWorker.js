const { Worker } = require("bullmq");
const worker = new Worker(
  "emailQueue",
  async (job) => {
    console.log(`Processing job: ${job.name}`);
    console.log("Data:", job.data);
    console.log(
      `Sending email to ${job.data.to} with subject "${job.data.subject}"`
    );
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);
worker.on("completed", (job) => console.log(`Job ${job.id} completed!`));
worker.on("failed", (job, err) =>
  console.log(`Job ${job.id} failed: ${err.message}`)
);
worker.on("stalled", (job) => console.log(`Job ${job.id} stalled`));
