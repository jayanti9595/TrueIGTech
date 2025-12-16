const { addJobs } = require('./queues/emailQueue');
addJobs()
.then(() => 
    console.log('All jobs added successfully'))
.catch((err) => 
    console.error('Error adding jobs:', err));