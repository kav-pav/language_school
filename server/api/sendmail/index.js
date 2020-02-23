const { Router } = require("express");

const { createUserTemplate, createSchoolTemplate } = require("./usertemplate");
const nodeMailer = require("nodemailer");
const router = new Router();

async function sendMail(data) {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "no.replay.fabryka.jezyka@gmail.com",
      pass: "Agata12345"
    }
  });
  const creationMail = {
    from: "no.replay.fabryka.jezyka@gmail.com",
    to: data.email,
    subject: "Dziekujemy za kontakt",
    text: "Dziekujemy za kontakt",
    html: await createUserTemplate({
      ...data
    })
  };

  const schoolMail = {
    from: "no.replay.fabryka.jezyka@gmail.com",
    to: "kava92@gmail.com",
    subject: "Dziekujemy za kontakt",
    text: "Dziekujemy za kontakt",
    html: await createSchoolTemplate({
      ...data
    })
  };
  const responseUser = await nodeMailerCall(creationMail, transporter);
  if (!responseUser) {
    return { responseUser, responseSchool: false };
  }
  const responseSchool = await nodeMailerCall(schoolMail, transporter);
  return { responseUser, responseSchool };
}

async function nodeMailerCall(mail, settings) {
  return new Promise((resolve, reject) => {
    settings.sendMail(mail, (error, info) => {
      if (error) {
        resolve(false);
      }
      resolve(true);
    });
  });
}

router.post("/book", async (req, res) => {
  try {
    const success = await sendMail(req.body);
    res.json({
      success
    });
  } catch (error) {
    res.json({
      success: false,
      error
    });
  }
});

module.exports = router;
