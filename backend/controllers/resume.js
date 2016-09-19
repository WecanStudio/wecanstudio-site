'use strict';

const tool = require('../core/tool');
const Resume = require('../models/resume');
const app = require('../core/app');
let pub = {};

pub.addResume = async(req, res) => {
  let name = req.body.name;
  let id = req.body.id;
  let position = req.body.position;
  let phone = req.body.phone;
  let email = req.body.email;
  let description = req.body.description;
  let resume = new Resume(name, id, phone, position, description);
  resume.save(function (err) {
    if (err) {
      tool.l(err);
      res.status(500);
      return;
    }
    res.mailer.send('email', {
      to: 'xhinliang@gmail.com',
      subject: `微客工作室招新： ${name}`,
      name: name,
      id: id,
      email: email,
      position: position,
      phone: phone,
      description: description
    }, function (err) {
      if (err) {
        tool.debug('send email error: ' + err);
        return;
      }
      tool.debug('send email success !');
    });

    res.mailer.send('email-reply', {
      to: email,
      subject: `微客工作室回复招新： ${name}`,
      name: name,
      id: id,
      email: email,
      position: position,
      phone: phone,
      description: description
    }, function (err) {
      if (err) {
        tool.debug('send reply email error: ' + err);
        return;
      }
      tool.debug('send reply email success !');
    });

    // 原样返回
    res.send(JSON.stringify(resume));
  })
};

module.exports = pub;
