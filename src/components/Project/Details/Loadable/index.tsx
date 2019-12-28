import Loadable from 'react-loadable';
import Loader from 'components/Project/Details/Loader';

const Component = Loadable({
  loader: () => import('components/Project/Details'),
  loading: Loader,
});

export default Component;
