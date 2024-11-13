import { useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectShows } from '../../store/slices/showSlice.ts';
import { fetchAllDishes } from '../../store/thunks/showThunks.ts';

const AutoCompleteComponent = () => {
  const [value, setValue] = useState<string>('');
  const tvShows = useAppSelector(selectShows);
  const dispatch = useAppDispatch();

  const getValue = (e: { value: string }) => {
    setValue(e.value);
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    if (event.query) {
      dispatch(fetchAllDishes(value));
    }
  };

  const show = tvShows.map((show) => {
    return show.name;
  });

  console.log(tvShows);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0'}}>
      <div style={{marginRight: '30px', fontSize: '20px'}}>Search for TV Show:</div>
      <AutoComplete value={value} suggestions={show} completeMethod={search} onChange={getValue}/>
    </div>
  );
};

export default AutoCompleteComponent;