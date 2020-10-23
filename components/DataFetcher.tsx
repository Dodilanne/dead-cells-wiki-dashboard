import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import jQuery from 'jquery';

const DataFetcher = () => {
  const [html, setHtml] = useState<string>('');
  const [runes, setRunes] = useState<string[]>([]);

  const $ = (selector: string) => jQuery(selector, jQuery(html));

  const fetch = async () => {
    try {
      const { data } = await Axios.get('http://deadcells.gamepedia.com/Runes');
      setHtml(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (!html.length) return;

    const data = $('.wikitable:not(:last-of-type) tbody tr td:first-of-type');
    const r: string[] = [];
    data.each((_index, element) => {
      r.push(element.innerHTML.split('<')[0]);
    });
    setRunes(r);
  }, [html]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="data-fetcher-container">
      <h1>Runes</h1>
      <ul>
        {runes.map(rune => (
          <li key={rune}>{rune}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
