const logger = (req, res) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 18) {
    console.log('Closed');
  }


};

module.exports = logger;
