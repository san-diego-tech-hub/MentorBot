module.exports = (controller) => {
  controller.hears(['Request a mentor'], 'direct_message', (bot, message) => {
    const content = {blocks: [
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": "Are you looking for guidance and mentorship from someone who's already established in their tech career? Or do you need a one-time discussion to review a resume or solve a problem? \n\nEither way, we are here to help.\n\nAt San Diego Tech Hub, our mission is to strengthen the San Diego tech community by connecting our members with one another. Based on your answers and availability we will find you the right match.\n\nMentorship connections at SDTH happen in 7 easy steps.\n\n1. Fill out the questions that will follow\n2. You will receive an invite to #mentorship will follow\n3. Mentors will see your request, and will be connected based on fit. This process could take up to a week and is based on availability. \n4. Mentors and mentees will be introduced\n5. Your mentor will be responsible for sending an invite for in-person or call \n6. If you’d like to meet again after the first meeting, please discuss with your mentor.\n7. Each of you will rate your experience, and confirm if a fit and you will continue to work together.\n",
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Complete this form to get started: "
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Start",
            "emoji": true
          },
          "value": "menteeIntake"
        }
      }
    ]}

    bot.reply(message, content)
  })
}
