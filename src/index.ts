import { CSVManager, Options, DataSet, DataModel, Value } from './CSVManager';

const options: Options = {
    dataColumns: ['player_name'],
    labelColumns: ['player_name'],
    converters: {},
    shuffle: false,
    splitTest: 1.0
  };
  const csvManager = new CSVManager('./players_10.csv', options);

  const dataset = csvManager.loadCSV();
  console.log(JSON.stringify(dataset))
