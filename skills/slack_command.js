// const menteeDialog = (bot) => (
//   bot.createDialog(
//     'Mentor Request Form',
//     'MentorIntake',
//     'Submit'
//   ).addText(
//     "Are you looking for guidance and mentorship from someone who\'s already established in their tech career? Or do you need a one-time discussion to review a resume or solve a problem? \n\nEither way, we are here to help.\n\nAt San Diego Tech Hub, our mission is to strengthen the San Diego tech community by connecting our members with one another. Based on your answers and availability we will find you the right match.\n\nMentorship connections at SDTH happen in 7 easy steps.\n\n1. Fill out the questions that will follow\n" +
//     "2. You will receive an invite to #mentorship will follow\n" +
//     "3. Mentors will see your request, and will be connected based on fit. This process could take up to a week and is based on availability. \n" +
//     "4. Mentors and mentees will be introduced\n" +
//     "5. Your mentor will be responsible for sending an invite for in-person or call \n" +
//     "6. If you’d like to meet again after the first meeting, please discuss with your mentor.\n" +
//     "7. Each of you will rate your experience, and confirm if a fit and you will continue to work together.\n\n" +
//     "What’s your full name?",
//     'fullname'
//   ).addText(`What's your email address?`, 'email')
//     .addText(`Do you have a LinkedIn profile?`, 'hasLinkedIn')
//     .addSelect(`Where are you located?`, 'location', null, [{label: 'SanDiego', value:'In San Diego'}, {label: 'Relocate', value:'Looking to relocate'}])
//     .addText(`What is your current profession? (I.e. Engineer, Product, Marketing...)`, 'profession')
//     .addText(`How many years experience in tech do you have?`, 'experience')
//     .addSelect(`I am looking for:`, 'lookingFor', null, [
//       {label:'ResumeReview', value:'Resume Review'},
//       {label: 'position', value: 'information about a position, industry, or company.'},
//       {label: 'meeting', value:'one-time meeting to solve a particular problem'},
//       {label: 'longTerm', value:'long term mentorship'}
//     ])
//     .addText(`What is the ideal profession of the mentor you want? (I.e. Engineer, Product, Marketing...) `, 'mentorProfession')
//     .addTextArea(`What's the goal that you are striving for that mentorship can help with?`, 'goal')
//     .addTextArea(`What have you done on your own to achieve that goal?`, 'selfWork')
//     .addTextArea(`What obstacles are you facing?`, 'obstacles')
//     .addTextArea(`What does success look like for you?`, 'success')
//     .addTextArea(`How did you hear about SDTH?`, 'howDidYouHear')
// )
//
// module.exports = (controller) => {
//   controller.on('slash_command',function(bot,message) {
//     // reply to slash command
//     const {text} = message
//     // const dialog = menteeDialog(bot)
//     const dialog = bot.createDialog(
//       'Mentor Request Form',
//       'MentorIntake',
//       'Submit'
//     ).addText(
//       "Are you looking for guidance and mentorship from someone who\'s already established in their tech career? Or do you need a one-time discussion to review a resume or solve a problem? \n\nEither way, we are here to help.\n\nAt San Diego Tech Hub, our mission is to strengthen the San Diego tech community by connecting our members with one another. Based on your answers and availability we will find you the right match.\n\nMentorship connections at SDTH happen in 7 easy steps.\n\n1. Fill out the questions that will follow\n" +
//       "2. You will receive an invite to #mentorship will follow\n" +
//       "3. Mentors will see your request, and will be connected based on fit. This process could take up to a week and is based on availability. \n" +
//       "4. Mentors and mentees will be introduced\n" +
//       "5. Your mentor will be responsible for sending an invite for in-person or call \n" +
//       "6. If you’d like to meet again after the first meeting, please discuss with your mentor.\n" +
//       "7. Each of you will rate your experience, and confirm if a fit and you will continue to work together.\n\n" +
//       "What’s your full name?",
//       'fullname'
//     ).addText(`What's your email address?`, 'email')
//       .addText(`Do you have a LinkedIn profile?`, 'hasLinkedIn')
//       .addSelect(`Where are you located?`, 'location', null, [{label: 'SanDiego', value:'In San Diego'}, {label: 'Relocate', value:'Looking to relocate'}])
//       .addText(`What is your current profession? (I.e. Engineer, Product, Marketing...)`, 'profession')
//       .addText(`How many years experience in tech do you have?`, 'experience')
//       .addSelect(`I am looking for:`, 'lookingFor', null, [
//         {label:'ResumeReview', value:'Resume Review'},
//         {label: 'position', value: 'information about a position, industry, or company.'},
//         {label: 'meeting', value:'one-time meeting to solve a particular problem'},
//         {label: 'longTerm', value:'long term mentorship'}
//       ])
//       .addText(`What is the ideal profession of the mentor you want? (I.e. Engineer, Product, Marketing...) `, 'mentorProfession')
//       .addTextArea(`What's the goal that you are striving for that mentorship can help with?`, 'goal')
//       .addTextArea(`What have you done on your own to achieve that goal?`, 'selfWork')
//       .addTextArea(`What obstacles are you facing?`, 'obstacles')
//       .addTextArea(`What does success look like for you?`, 'success')
//       .addTextArea(`How did you hear about SDTH?`, 'howDidYouHear');
//
//     bot.replyWithDialog(message, dialog.asObject());
//   })
// }
module.exports = (controller) => {
  controller.on('slash_command',function(bot,message) {
    // reply to slash command
    const {text} = message
    if (text === 'Request a mentor') {
      const content = { blocks: [
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

      bot.replyInteractive(message, content)
    } else {
      const dialog = bot.createDialog(
        'Mentor Request Form',
        'MentorIntake',
        'Submit'
      )
        .addText("What is your full name?", 'fullname', null)
        .addText('What is your email address?', 'email', null)
        .addText('Do you have a LinkedIn profile?', 'hasLinkedIn', null)
        .addSelect('Where are you located?', 'location', null, [{value: 'SanDiego', label:'In San Diego'}, {value: 'Relocate', label:'Looking to relocate'}])
        .addText('What is your current profession? ', 'profession', '(I.e. Engineer, Product, Marketing...)')
        .addText('How many years experience in tech do you have?', 'experience', null)
        .addSelect('I am looking for:', 'lookingFor', null, [
          {value:'ResumeReview', label:'Resume Review'},
          {value: 'position', label: 'information about a position, industry, or company.'},
          {value: 'meeting', label:'one-time meeting to solve a particular problem'},
          {value: 'longTerm', label:'long term mentorship'}
        ])
        .addText('What is the ideal profession of your mentor?  ', 'mentorProfession', '(I.e. Engineer, Product, Marketing...)')
        .addTextarea('What is the main goal mentorship can help with?', 'goal', null)
        .addTextarea('What have you done to achieve that goal?', 'selfWork', null)
      .addTextarea('What obstacles are you facing?', 'obstacles', null)
      .addTextarea('What does success look like for you?', 'success', null)
      .addTextarea('How did you hear about SDTH?', 'howDidYouHear', null);
      bot.replyWithDialog(message, dialog.asObject());
    }
  })

  controller.on('block_actions', (bot, message) => {
    console.log(message)
    const dialog = bot.createDialog(
      'Mentor Request Form',
      'MentorIntake',
      'Submit'
    )
      .addText("What is your full name?", 'fullname', null)
      .addText('What is your email address?', 'email', null)
      .addText('Do you have a LinkedIn profile?', 'hasLinkedIn', null)
      .addSelect('Where are you located?', 'location', null, [{value: 'SanDiego', label:'In San Diego'}, {value: 'Relocate', label:'Looking to relocate'}])
      .addText('What is your current profession? ', 'profession', '(I.e. Engineer, Product, Marketing...)')
      .addText('How many years experience in tech do you have?', 'experience', null)
      .addSelect('I am looking for:', 'lookingFor', null, [
        {value:'ResumeReview', label:'Resume Review'},
        {value: 'position', label: 'information about a position, industry, or company.'},
        {value: 'meeting', label:'one-time meeting to solve a particular problem'},
        {value: 'longTerm', label:'long term mentorship'}
      ])
      .addText('What is the ideal profession of your mentor?  ', 'mentorProfession', '(I.e. Engineer, Product, Marketing...)')
      .addTextarea('What is the main goal mentorship can help with?', 'goal', null)
      .addTextarea('What have you done to achieve that goal?', 'selfWork', null)
      .addTextarea('What obstacles are you facing?', 'obstacles', null)
      .addTextarea('What does success look like for you?', 'success', null)
      .addTextarea('How did you hear about SDTH?', 'howDidYouHear', null);
    bot.replyWithDialog(message, dialog.asObject());
  })
}