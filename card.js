#!/usr/bin/env node

'use strict'

const axios = require('axios');
const chalk = require('chalk');
const boxen = require('boxen');
const path = require('path');
const QRCode = require('qrcode-terminal');
const prompt = require('prompt');
var inquirer = require('inquirer');

const options = {
    padding: 3,
    margin: 1,
    borderStyle: 'round',
    borderColor: '#FF9999',
};


const data = {
    name: chalk.white('               Cynthia Martiny'),
    symbol: chalk.hex('#66B2FF')('▲'),
    handle: chalk.hex('#FF9999').bold('Cynthiamf'),
    work: chalk.white('Junior Web Developer ') + chalk.hex('#FF9999')('@BeCode'),
    twitter: chalk.hex('#66B2FF')('https://twitter.com/CynthiaMartiny'),
    github: chalk.hex('#66B2FF')('https://github.com/Cynthiamf'),
    linkedin: chalk.hex('#66B2FF')('https://linkedin.com/in/CynthiaMartiny'),
    npm: 'https://www.npmjs.com/' + chalk.hex('#FF9999')('~cynthiamf'),
    npx: chalk.white('npx cynthia-npx'),
    nameWork: chalk.hex('#FF9999').bold('      Work:'),
    nameTwitter: chalk.hex('#FF9999').bold('   Twitter:'),
    nameGitHub: chalk.hex('#FF9999').bold('    GitHub:'),
    nameLinkedIn: chalk.hex('#FF9999').bold('  LinkedIn:'),
    nameNpm: chalk.hex('#FF9999').bold('       Npm:'),
    nameCard: chalk.hex('#FF9999').bold('      Card:'),
}

const newline = '\n'
const heading = `${data.name} ${data.symbol} ${data.handle}`
const working = `${data.nameWork}  ${data.work}`
const twittering = `${data.nameTwitter}  ${data.twitter}`
const githubing = `${data.nameGitHub}  ${data.github}`
const linkedining = `${data.nameLinkedIn}  ${data.linkedin}`
const npming = `${data.nameNpm}  ${data.npm}`
const carding = `${data.nameCard}  ${data.npx}`


const output = heading +
    newline + newline +
    working + newline +
    twittering + newline +
    githubing + newline +
    linkedining + newline +
    npming + newline + newline +
    carding





console.log((boxen(output, options)));

inquirer
    .prompt([{
            type: 'list',
            name: 'qrcode',
            message: chalk.hex('#FF9999').bold('Would you like to see the QRCode to access to my resume ?'),
            choices: ['Yes', 'No']
        }

    ])
    .then(answers => {
        if (answers.qrcode === 'Yes') {
            const qr = QRCode.generate('https://www.slideshare.net/slideshow/embed_code/key/iyoSEqPxqWD8vD', {
                small: true,
            }, function (QRCode) {
                console.log(QRCode);
            })
        } else {
            console.log('Ok');
        };
    });
console.log();