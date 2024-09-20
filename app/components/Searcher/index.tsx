import { TextInput } from 'react-native-paper';

import styles from './styles';

const Searcher = () => {

  return (
    <TextInput
      label="Buscar..."
      right={<TextInput.Icon icon='file-search-outline' />}
    />
  );
};

export default Searcher;