import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import {
  loader,
  selectShows,
  showInform, showInformation,
  userValue
} from '../../store/slices/showSlice.ts';
import { fetchShows, getOneShowInfo } from '../../store/thunks/showThunks.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
import Loader from '../UI/Loader/Loader.tsx';

const AutoCompleteComponent = () => {
  const userShow = useAppSelector(showInform);
  const tvShows = useAppSelector(selectShows);
  const navigate = useNavigate();
  const userShowDetail = useAppSelector(showInformation);
  const preLoader = useAppSelector(loader);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const getValue = (e: { value: string }) => {
    dispatch(userValue(e.value));
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    if (event.query) {
      dispatch(fetchShows(event.query));
    }
  };

  const getInfoAboutShow = async (e: { value: string }) => {
    const selectedShow = tvShows.find((show) => show.name === e.value);

    if (selectedShow !== undefined) {
      await dispatch(getOneShowInfo(selectedShow.id));
      navigate(`/shows/${selectedShow.id}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0', flexWrap: 'wrap'}}>
        <div style={{marginRight: '30px', fontSize: '20px', marginBottom: '10px'}}>Search for TV Show:</div>
        <AutoComplete
          value={userShow}
          suggestions={tvShows.map((show) => show.name)}
          completeMethod={search}
          onChange={getValue}
          onSelect={getInfoAboutShow}
        />
      </div>
      <hr/>
      { preLoader ? <Loader/> :
        location.pathname === '/' ? <div style={{fontSize: '20px', marginTop: '30px'}}>You haven't chosen a show yet. Choose your favorite show.</div> :
          userShowDetail ? (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', flexWrap: 'wrap', marginBottom: '40px'}}>
              <div style={{marginRight: '20px'}}>
                <img src={userShowDetail.image.medium} alt={userShowDetail.name}/>
              </div>
              <div style={{width: '78%'}}>
                <h2>{userShowDetail.name}</h2>
                <p><b style={{marginRight: '30px'}}>Genres: </b>{userShowDetail.genres ? userShowDetail.genres : '-'}</p>
                <p><b style={{marginRight: '7px'}}>Premiered: </b>{userShowDetail.premiered ? userShowDetail.premiered : '-'}</p>
                <p><b style={{marginRight: '37px'}}>Ended: </b>{userShowDetail.ended ? userShowDetail.ended : '-'}</p>
                <p><b style={{marginRight: '10px'}}>Language: </b>{userShowDetail.language ? userShowDetail.language : '-'}</p>
                <p><b style={{marginRight: '18px'}}>Run time: </b>{userShowDetail.runtime ? userShowDetail.runtime+ ' min' : '-'}</p>
                <div style={{display: 'flex', alignItems: 'center'}}><b
                  style={{marginRight: '45px'}}>Detail:</b>
                  {userShowDetail.summary ? ReactHtmlParser(userShowDetail.summary) : 'No details available'}
                </div>
              </div>
            </div>
          ) : null
      }
    </>
  );
};

export default AutoCompleteComponent;



