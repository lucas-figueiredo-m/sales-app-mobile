import { Tables } from '@salesapp/types';
import { View } from 'react-native';
import { database, ProductModel } from '@salesapp/database';
import { Q } from '@nozbe/watermelondb';
import { ProductTable } from './components';
import { Label } from '@salesapp/components';

const Products = database
  .get<ProductModel>(Tables.Products)
  .query(Q.where('category', 'BOVINE'))
  .observe();

export const BovineTableScreen: React.FC = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Label.H3>Bar e Restaurante</Label.H3>
        <Label.H3>Mercado e Acougue</Label.H3>
      </View>
      <ProductTable products={Products} />
    </View>
  );
};
