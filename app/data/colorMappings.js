import { hexToRgb } from '../utils/colorUtils';
export const ukRegionsColors = [
  { regionName: 'North East', regionNumber: '01', color: hexToRgb('#99FF99') },
  { regionName: 'North West', regionNumber: '02', color: hexToRgb('#CCFFFF') },
  {
    regionName: 'Yorkshire and The Humber',
    regionNumber: '03',
    color: hexToRgb('#6DD100'),
  },
  {
    regionName: 'East Midlands',
    regionNumber: '04',
    color: hexToRgb('#2FCC61'),
  },
  {
    regionName: 'West Midlands',
    regionNumber: '05',
    color: hexToRgb('#139A6A'),
  },
  { regionName: 'Eastern', regionNumber: '06', color: [178, 255, 102, 255] },
  { regionName: 'London', regionNumber: '07', color: [204, 255, 153, 255] },
  { regionName: 'South East', regionNumber: '08', color: [0, 204, 102, 255] },
  { regionName: 'South West', regionNumber: '09', color: [102, 204, 0, 255] },
];
