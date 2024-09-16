import React, { useEffect } from 'react';
import csv from 'csvtojson';

const CsvFetcher = () => {
  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQGfjIyNVUnYeN03aB059xGJOkzD5p_yvIFKDWxhAsa5DC6q1cup0AbA16iIAS1oj-iU2eZ7gHFyORQ/pub?gid=0&single=true&output=csv');
        const csvText = await response.text();
        const json = await csv().fromString(csvText);
        console.log("csvtojson ",json); // Aquí ves los datos parseados
      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    };

    fetchCsvData();
  }, []);

  return <div>Check the console for parsed CSV data.</div>;
};

export default CsvFetcher;
