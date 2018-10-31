"use strict"

let pt = function playtime() {
  const message = "Back to basics"
  alert(`String interpolated message read "${message}"`);
  alert(-"+6" + -7)

  if (confirm("Do you want to run the prompt exercise?")) {
    let gibberish = prompt("You're turn!  What do you have to say for yourself?")
    console.log(`You said "${gibberish}".  How wise.`)
  } else {
    console.log(`You didn't want to talk today. Is it zen, or is it sad?`)
  }
};

function email(name, domain = "scottlogic.co.uk") {
  console.log(`Send mail to ${name}@${domain}`)
}

// pt()
// email("imaxwell")
// email("straightedgescotsman", "gmail.com")

let sum = (input1, input2) => input1 + input2
alert(sum(6,9))

let double = n => n * 2
alert(double(9))
