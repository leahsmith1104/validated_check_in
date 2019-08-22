const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/check-in/hasMeeting', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let hasMeeting = req.session.data['has-meeting']

  if (hasMeeting === 'false') {
    res.redirect('/check-in/no-meeting')
  } else {
    res.redirect('/check-in/has-meeting/meeting-time')
  }
})

router.post('/check-in/enquiryType', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let enquiryType = req.session.data['enquiry']

  if (enquiryType === 'meeting') {
    res.redirect('/check-in/has-meeting/meeting-time')
  }
  if (enquiryType === 'facilities') {
    res.redirect('/check-in/facilities')
  }
  if (enquiryType === 'other') {
    res.redirect('/check-in/no-meeting')
  }
  else {
    res.redirect('/check-in/no-meeting')
  }
})

module.exports = router
