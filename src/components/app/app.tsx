import MainPage from '../main-page/main-page';

type AppScreenProps = {
  cardsCount: number;
}

const App = ({cardsCount}: AppScreenProps): JSX.Element => (
  <MainPage cardsCount={cardsCount}/>
);

export default App;
