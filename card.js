#!/usr/bin/env node

'use strict'

const axios = require('axios');
const chalk = require('chalk');
const boxen = require('boxen');
const path = require('path');

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
    work: chalk.white('Junior Developer Web ' + chalk.hex('#FF9999')('@') + 'BeCode'),
    twitter: chalk.hex('#66B2FF')('https://twitter.com/CynthiaMartiny'),
    github: chalk.hex('#66B2FF')('https://github.com/Cynthiamf'),
    linkedin: chalk.hex('#66B2FF')('https://linkedin.com/in/CynthiaMartiny'),
    npx: chalk.white('npx cynthia'),
    nameWork: chalk.hex('#FF9999').bold('      Work:'),
    nameTwitter: chalk.hex('#FF9999').bold('   Twitter:'),
    nameGitHub: chalk.hex('#FF9999').bold('    GitHub:'),
    nameLinkedIn: chalk.hex('#FF9999').bold('  LinkedIn:'),
    nameCard: chalk.hex('#FF9999').bold('      Card:')
}

const newline = '\n'
const heading = `${data.name} ${data.symbol} ${data.handle}`
const working = `${data.nameWork}  ${data.work}`
const twittering = `${data.nameTwitter}  ${data.twitter}`
const githubing = `${data.nameGitHub}  ${data.github}`
const linkedining = `${data.nameLinkedIn}  ${data.linkedin}`
const carding = `${data.nameCard}  ${data.npx}`

const output = heading +
    newline + newline +
    working + newline +
    twittering + newline +
    githubing + newline +
    linkedining + newline + newline +
    carding

console.log((boxen(output, options)));