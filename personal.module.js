function greetUser(username) {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting;
  
    if (hour < 6) {
      greeting = 'Good night';
    } else if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    return `${greeting}, ${username}!`;
}
  
module.exports = {
    greetUser
};