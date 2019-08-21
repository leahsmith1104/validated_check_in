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
    res.redirect('/check-in/has-meeting/first-name')
  }
})

router.post('/check-in/has-meeting/surname', function (req, res) {

  let selectedInitial = req.session.data['initial-last']

  if (selectedInitial === 'W') {
    res.redirect('/check-in/has-meeting/full-name')
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
    res.redirect('/check-in/has-meeting/first-name')
  }
  if (enquiryType === 'payments') {
    res.redirect('/check-in/payments')
  }
  if (enquiryType === 'benefits') {
    res.redirect('/check-in/benefits')
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

router.post('/check-in/has-meeting/coach-check', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let coach = req.session.data['coach']

  var uc = ["Farhana", "Charlotte","Paul","Sam","Bev"];
  var heritage = ["Christine","Ian","Sonia","Belinda","Michael"];
  if (uc.includes(coach)) {
    res.redirect('check-in-uc')
  }
  if (heritage.includes(coach)) {
    res.redirect('check-in-heritage')
  }
  if (coach === 'NES') {
    res.redirect('check-in-group')
  }
  else {
    res.redirect('check-in')
  }
})

router.post('/check-in/enquiryType-v3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let enquiryType = req.session.data['enquiry']

  if (enquiryType === 'meeting') {
    res.redirect('/check-in_v03/has-meeting/first-name')
  }
  if (enquiryType === 'facilities') {
    res.redirect('/check-in_v03/facilities')
  }
  if (enquiryType === 'other') {
    res.redirect('/check-in_v03/no-meeting')
  }
  else {
    res.redirect('/check-in_v03/no-meeting')
  }
})

module.exports = router
