import { Tables } from '@salesapp/types';
import { View } from 'react-native';
import { database, ProductModel } from '@salesapp/database';
import { Q } from '@nozbe/watermelondb';
import { ProductTable } from './components';

const Products = database
  .get<ProductModel>(Tables.Products)
  .query(Q.where('category', 'GIBLETS'))
  .observe();

export const GibletsTableScreen: React.FC = () => {
  return (
    <View>
      <ProductTable products={Products} />
    </View>
  );
};
