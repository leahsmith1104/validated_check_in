var meetings = [{
  "firstInitial":"A",
  "firstName":"Adam",
  "lastInitial":"A",
  "lastName":"Ant",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"take part in a group activity",
  "about":"making a CV.",
  "waiting":"room 4 on the ground floor."
},
{
  "firstInitial":"A",
  "firstName":"Adam",
  "lastInitial":"A",
  "lastName":"Ant",
  "month":"September",
  "date":"27",
  "time":"4:00pm",
  "workCoach":"take part in a group activity",
  "about":"making a CV.",
  "waiting":"room 4 on the ground floor."
},
{
  "firstInitial":"T",
  "firstName":"Tom",
  "lastInitial":"A",
  "lastName":"Adams",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"take part in a group activity",
  "about":"making a CV.",
  "waiting":"room 4 on the ground floor."
},
{
  "firstInitial":"S",
  "firstName":"Stephen",
  "lastInitial":"M",
  "lastName":"Morley",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"see Bridie",
  "about":"your Universal Credit claim.",
  "waiting":"room 4 on the ground floor."
},
{
  "firstInitial":"L",
  "firstName":"Leah",
  "lastInitial":"S",
  "lastName":"Smith",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"see Bridie",
  "about":"your Job Seekers allowance claim.",
  "waiting":"waiting area 2 on the second floor."
},
{
  "firstInitial":"R",
  "firstName":"Richard",
  "lastInitial":"T",
  "lastName":"Thomas",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"see John",
  "about":"your Job Seekers allowance claim.",
  "waiting":"waiting area 2 on the second floor."
},
{
  "firstInitial":"T",
  "firstName":"Tom",
  "lastInitial":"W",
  "lastName":"Wright",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"see Alan",
  "about":"your Universal Credit claim.",
  "waiting":"waiting area 3 on the second floor."
},
{
  "firstInitial":"C",
  "firstName":"Chris",
  "lastInitial":"W",
  "lastName":"Waterhouse",
  "month":"September",
  "date":"27",
  "time":"11:00am",
  "workCoach":"see Alan",
  "about":"your Universal Credit claim.",
  "waiting":"waiting area 3 on the second floor."
},
{
  "firstInitial":"C",
  "firstName":"Claire",
  "lastInitial":"J",
  "lastName":"Jolley",
  "month":"January",
  "date":"28",
  "time":"11:00am",
  "workCoach":"see Paul",
  "about":"your search for work.",
  "waiting":"waiting area 1 on the ground floor."
},
{
  "firstInitial":"Z",
  "firstName":"Zebedee",
  "lastInitial":"Z",
  "lastName":"Zizou",
  "month":"January",
  "date":"28",
  "time":"11:00am",
  "workCoach":"see Paul",
  "about":"jumping very high.",
  "waiting":"the magic roundabout."
},
{
  "firstInitial":"N",
  "firstName":"Navdip",
  "lastInitial":"A",
  "lastName":"Attwal",
  "month":"January",
  "date":"28",
  "time":"11:00am",
  "workCoach":"see Paul",
  "about":"writing Jira tickets.",
  "waiting":"Glass Bowl 1."
},
{
  "firstInitial":"L",
  "firstName":"Linda",
  "lastInitial":"A",
  "lastName":"Anderson",
  "month":"January",
  "date":"28",
  "time":"11:00am",
  "workCoach":"take part in a group activity",
  "about":"searching for work online.",
  "waiting":"waiting area 1 on the ground floor."
}];

// don't touch below

function getMeeting(first,last,time) {
    var myMeeting = meetings.filter(meeting => meeting.firstName.charAt(0) == first);
    if (myMeeting.length == 1) {
    return myMeeting;
    }
    var myMeeting2 = myMeeting.filter(meeting => meeting.lastName.charAt(0) == last);
    if (myMeeting2.length == 1) {
    return myMeeting2;
    }
    var myMeeting3 = myMeeting2.filter(meeting => meeting.time == time);
    if (myMeeting3.length == 1) {
    return myMeeting3;
    }
    else {
      return false;
    }
  };

// for versions before 3.a

  function getMeetinga(first,last,time) {
      var myMeeting = meetings.filter(meeting => meeting.firstInitial == first);
      if (myMeeting.length == 1) {
      return myMeeting;
      }
      var myMeeting2 = myMeeting.filter(meeting => meeting.lastInitial == last);
      if (myMeeting2.length == 1) {
      return myMeeting2;
      }
      var myMeeting3 = myMeeting2.filter(meeting => meeting.time == time);
      if (myMeeting3.length == 1) {
      return myMeeting3;
      }
      else {
        return false;
      }
    };


// expected output: Array ["exuberant", "destruction", "present"]
