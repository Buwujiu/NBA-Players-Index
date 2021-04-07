import { PlayerData } from './type';

import fs from 'fs';
import csv from 'csv-parser';
const players : PlayerData[] = [];

fs.createReadStream('/assets/players.csv')
  .pipe(csv())
  .on('data', (row: PlayerData) => {

    // const username = generateUsername(row.Firstname, row.Surname);
    // const password = randomWords(3).join("-");

    // const user = {
    //     username,
    //     firstname: row.Firstname,
    //     surname: row.Surname,
    //     roles: row.Roles,
    //     password
    // }
    players.push(row);
  }).on('end', function () {
      console.log(JSON.stringify(players));
  });
