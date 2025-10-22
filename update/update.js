const fs = require('fs');
const path = require('path');
const adac = require('./sources/adac');
const park4night = require('./sources/park4night');
const trustpilot = require('./sources/trustpilot');
const campinginfo = require('./sources/campinginfo');
(async () => {
  const camping = await adac.getData();
  const stell = await park4night.getData();
  fs.writeFileSync(path.join(__dirname, '../data/campingplaetze.json'), JSON.stringify(camping, null, 2));
  fs.writeFileSync(path.join(__dirname, '../data/stellplaetze.json'), JSON.stringify(stell, null, 2));
})();