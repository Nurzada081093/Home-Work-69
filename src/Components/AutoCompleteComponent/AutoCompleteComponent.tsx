import { useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

const AutoCompleteComponent = () => {
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0'}}>
      <div style={{marginRight: '30px', fontSize: '20px'}}>Search for TV Show:</div>
      <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
    </div>
  );
};

export default AutoCompleteComponent;