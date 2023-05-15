import { createThemedStyles, useThemedStyles } from '@salesapp/hooks';
import { Product } from '@salesapp/types';
import withObservables, { ObservableifyProps } from '@nozbe/with-observables';
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';
import { ProductItem } from './ProductItem';

interface Props {
  products: Product[];
}

type InputProps = ObservableifyProps<Props, 'products'>;

const ProductTableToObserve: React.FC<Props> = ({ products }) => {
  const styles = useThemedStyles(themedStyles);
  // TODO: fix code smell
  const ProductListSeparator: React.FC = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={styles.root}>
      <FlashList
        data={products}
        ItemSeparatorComponent={() => <ProductListSeparator />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
        estimatedItemSize={30}
      />
    </View>
  );
};

const themedStyles = createThemedStyles(({ colors }) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.Cards.Background,
  },
  separator: {
    height: 5,
  },
}));

const enhance = withObservables(['products'], ({ products }: InputProps) => ({
  products,
}));

export const ProductTable = enhance(ProductTableToObserve);
