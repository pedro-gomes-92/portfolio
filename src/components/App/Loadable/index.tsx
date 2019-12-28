import Loadable from 'react-loadable';
import Loader from 'components/App/Loader';

const Component = Loadable({
  loader: () => import('components/App'),
  loading: Loader,
});

export default Component;
